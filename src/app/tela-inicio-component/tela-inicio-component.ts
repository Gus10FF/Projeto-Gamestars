import { Component, OnInit } from '@angular/core';

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

  // Lista completa — nunca alterada
  private todosJogos: Jogo[] = [
    { id: 1, nome: 'Ultrakill',             ano: 2020, nota: 4.9, imagem: 'jogos/Ultrakill.jpeg',          plataformas: ['PC'],            menorPreco: 37.99 },
    { id: 2, nome: 'Enter The Gungeon',     ano: 2016, nota: 4.8, imagem: 'jogos/Enter the Gungeon.jpeg',  plataformas: ['PC', 'PS5', 'Xbox'], menorPreco: 24.90 },
    { id: 3, nome: 'Iron Lung',             ano: 2022, nota: 4.7, imagem: 'jogos/Iron Lung.jpeg',          plataformas: ['PC'],            menorPreco: 14.99 },
    { id: 4, nome: 'Deltarune',             ano: 2018, nota: 4.9, imagem: 'jogos/Deltarune.jpeg',          plataformas: ['PC'],            menorPreco: 0 },
    { id: 5, nome: 'Mullet Madjack',        ano: 2024, nota: 4.9, imagem: 'jogos/Mullet Madjack.jpeg',     plataformas: ['PC'],            menorPreco: 32.99 },
    { id: 6, nome: 'Dust: An Elysian Tail', ano: 2012, nota: 4.5, imagem: 'jogos/Dust.jpeg',               plataformas: ['PC', 'Xbox'],    menorPreco: 19.99 },
    { id: 7, nome: 'Uktena 64',             ano: 2025, nota: 4.5, imagem: 'jogos/Uktena 64.jpeg',          plataformas: ['PC'],            menorPreco: 12.00 },
    { id: 8, nome: 'Hotline Miami',         ano: 2012, nota: 4.7, imagem: 'jogos/HM.jpeg',                 plataformas: ['PC', 'PS5'],     menorPreco: 9.90 },
  ];

  // Lista exibida — resultado do filtro + ordenação
  meusJogos: Jogo[] = [];

  // Valores dos selects
  plataformaSelecionada = 'Todas';
  ordenacaoSelecionada  = 'Mais bem avaliados';

  jogosPopulares = [
    { id: 4, nome: 'Deltarune',   ano: 2018, nota: 4.9, imagem: 'jogos/Deltarune.jpeg' },
    { id: 10, nome: 'Balatro',    ano: 2024, nota: 4.2, imagem: 'jogos/balatro.jpeg' },
    { id: 11, nome: 'BALL X PIT', ano: 2025, nota: 4.5, imagem: 'jogos/Ball x pit.jpeg' },
  ];

  ngOnInit(): void {
    this.aplicarFiltros();
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