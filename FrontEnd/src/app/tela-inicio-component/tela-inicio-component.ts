import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { JogoService, Jogo } from '../services/jogo-service'; // Importando a interface Jogo do seu service

@Component({
  selector: 'app-tela-inicio-component',
  standalone: false,
  templateUrl: './tela-inicio-component.html',
  styleUrls: ['./tela-inicio-component.css'],
})
export class TelaInicioComponent implements OnInit {

  todosJogos: Jogo[] = [];
  jogosFiltrados: Jogo[] = [];  // resultado após filtro+ordenação
  jogosPagina: Jogo[] = [];     // fatia exibida na página atual
  jogosPopulares: Jogo[] = [];

  plataformaSelecionada = 'Todas';
  ordenacaoSelecionada  = 'Mais bem avaliados';

  // Paginação
  readonly itensPorPagina = 12;
  paginaAtual = 1;
  totalPaginas = 1;
  paginas: number[] = [];

  constructor(private jService: JogoService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Busca todos os jogos do backend Spring Boot
    this.jService.getJogos().subscribe({
      next: (jogos: Jogo[]) => {
        this.todosJogos = jogos;

        // Aplica os filtros e monta a sidebar de populares apenas após os dados chegarem
        this.aplicarFiltros();
        this.jogosPopulares = this.obterMaisRecentes(this.todosJogos);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao buscar jogos para a tela inicial:', err);
      }
    });
  }

  // --- Preços ---

  private precoParaNumero(preco: string): number {
    if (!preco || preco.toLowerCase() === 'grátis' || preco === '0') return 0;
    // Remove R$, espaços e ajusta os pontos/vírgulas decimais
    const limpo = preco.replace('R$', '').replace(/\s/g, '').replace(',', '.');
    return parseFloat(limpo);
  }

  private calcularMenorPreco(jogo: Jogo): number {
  // Se jogo.precos não existir, for nulo ou estiver vazio, retorna Infinity com segurança
  if (!jogo || !jogo.precos || jogo.precos.length === 0) return Infinity;

  const numeros = jogo.precos.map((p: any) => this.precoParaNumero(p.preco));
  return Math.min(...numeros);
}

getMenorPrecoTexto(jogo: Jogo): string {
  const valor = this.calcularMenorPreco(jogo);
  if (valor === Infinity) return 'N/A'; // 👈 Retorna 'N/A' ou 'Sem preço' se não houver dados
  if (valor === 0) return 'Grátis';
  return 'R$ ' + valor.toFixed(2).replace('.', ',');
}

  // --- Sidebar ---

  obterMaisRecentes(lista: Jogo[]): Jogo[] {
    return [...lista].sort((a, b) => b.ano - a.ano).slice(0, 10);
  }

  // --- Filtros e ordenação ---

  aplicarFiltros(): void {
    let resultado = this.plataformaSelecionada === 'Todas'
      ? [...this.todosJogos]
      : this.todosJogos.filter(j => j.plataformas.includes(this.plataformaSelecionada));

    switch (this.ordenacaoSelecionada) {
      case 'Mais bem avaliados':
        resultado.sort((a, b) => b.nota - a.nota);
        break;
      case 'Mais em conta':
        resultado.sort((a, b) => this.calcularMenorPreco(a) - this.calcularMenorPreco(b));
        break;
      case 'Lançamentos':
        resultado.sort((a, b) => b.ano - a.ano);
        break;
    }

    this.jogosFiltrados = resultado;
    this.irParaPagina(1); // sempre volta à primeira página ao filtrar
  }

  // --- Paginação ---

  private atualizarPagina(): void {
    this.totalPaginas = Math.ceil(this.jogosFiltrados.length / this.itensPorPagina) || 1;
    this.paginas = Array.from({ length: this.totalPaginas }, (_, i) => i + 1);

    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    this.jogosPagina = this.jogosFiltrados.slice(inicio, inicio + this.itensPorPagina);
  }

  irParaPagina(pagina: number): void {
    if (pagina < 1 || pagina > this.totalPaginas) return;
    this.paginaAtual = pagina;
    this.atualizarPagina();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- Eventos dos selects ---

  onPlataformaChange(valor: string): void {
    this.plataformaSelecionada = valor;
    this.aplicarFiltros();
  }

  onOrdenacaoChange(valor: string): void {
    this.ordenacaoSelecionada = valor;
    this.aplicarFiltros();
  }
}
