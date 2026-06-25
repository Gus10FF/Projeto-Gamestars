import { Component, OnInit } from '@angular/core';
import { JogoService } from '../services/jogo-service';

@Component({
  selector: 'app-tela-inicio-component',
  standalone: false,
  templateUrl: './tela-inicio-component.html',
  styleUrls: ['./tela-inicio-component.css'],
})
export class TelaInicioComponent implements OnInit {

  todosJogos: any[] = [];
  jogosFiltrados: any[] = [];  // resultado após filtro+ordenação (lista completa)
  jogosPagina: any[] = [];     // fatia exibida na página atual
  jogosPopulares: any[] = [];

  plataformaSelecionada = 'Todas';
  ordenacaoSelecionada  = 'Mais bem avaliados';

  // Paginação
  readonly itensPorPagina = 12; // 6 colunas × 2 fileiras
  paginaAtual = 1;
  totalPaginas = 1;
  paginas: number[] = [];

  constructor(private jService: JogoService) {}

  ngOnInit(): void {
    this.todosJogos = this.jService.getJogos();
    this.aplicarFiltros();
    this.jogosPopulares = this.obterMaisRecentes(this.todosJogos);
  }

  // --- Preços ---

  private precoParaNumero(preco: string): number {
    if (!preco || preco.toLowerCase() === 'grátis' || preco === '0') return 0;
    return parseFloat(preco.replace(',', '.'));
  }

  private calcularMenorPreco(jogo: any): number {
    if (!jogo.precos || jogo.precos.length === 0) return Infinity;
    const numeros = jogo.precos.map((p: any) => this.precoParaNumero(p.preco));
    return Math.min(...numeros);
  }

  getMenorPrecoTexto(jogo: any): string {
    const valor = this.calcularMenorPreco(jogo);
    if (valor === 0) return 'Grátis';
    return 'R$ ' + valor.toFixed(2).replace('.', ',');
  }

  // --- Sidebar ---

  obterMaisRecentes(lista: any[]): any[] {
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