import { Component, OnInit } from '@angular/core';
import { JogoService } from '../services/jogo-service';

interface Jogo {
  id: number;
  nome: string;
  ano: number;
  nota: number;
  imagem: string;
  plataformas: string[];
  menorPreco: number; // menor preço encontrado entre as lojas (0 = grátis)
}

@Component({
  selector: 'app-tela-inicio-component',
  standalone: false,
  templateUrl: './tela-inicio-component.html',
  styleUrls: ['./tela-inicio-component.css'],
})
export class TelaInicioComponent implements OnInit {

  todosJogos: any[] = [];
  meusJogos: Jogo[] = [];
  jogosPopulares: any[] = [];

  constructor(
    private jService: JogoService
  ){ }

  // Valores dos selects
  plataformaSelecionada = 'Todas';
  ordenacaoSelecionada  = 'Mais bem avaliados';



  ngOnInit(): void {
    this.todosJogos = this.jService.getJogos();
    this.aplicarFiltros();
    this.jogosPopulares = this.obterMaisRecentes(this.meusJogos);
  }

  obterMaisRecentes(lista: Jogo[]): Jogo[] {
  // Criamos uma cópia da lista com [...lista] para não modificar o array original
  return [...lista]
    .sort((a, b) => b.ano - a.ano) // Ordena do ano maior para o menor
    .slice(0, 10);                  // Pega os primeiros 5 elementos
}

  aplicarFiltros(): void {
    // 1. Filtra por plataforma
    let resultado = this.plataformaSelecionada === 'Todas'
      ? [...this.todosJogos]
      : this.todosJogos.filter(j =>
          j.plataformas.includes(this.plataformaSelecionada)
        );

    // 2. Ordena
    switch (this.ordenacaoSelecionada) {
      case 'Mais bem avaliados':
        resultado.sort((a, b) => b.nota - a.nota);
        break;
      case 'Mais em conta':
        resultado.sort((a, b) => a.menorPreco - b.menorPreco);
        break;
      case 'Lançamentos':
        resultado.sort((a, b) => b.ano - a.ano);
        break;
    }

    this.meusJogos = resultado;
  }

  onPlataformaChange(valor: string): void {
    this.plataformaSelecionada = valor;
    this.aplicarFiltros();
  }

  onOrdenacaoChange(valor: string): void {
    this.ordenacaoSelecionada = valor;
    this.aplicarFiltros();
  }
}
