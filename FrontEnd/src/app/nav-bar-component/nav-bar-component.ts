import { Component, OnInit } from '@angular/core';
import { Jogo, JogoService } from '../services/jogo-service';

@Component({
  selector: 'app-nav-bar-component',
  standalone: false,
  templateUrl: './nav-bar-component.html',
  styleUrls: ['./nav-bar-component.css'],
})
export class NavBarComponent implements OnInit {
  termo: string = '';
  todosJogos: Jogo[] = [];
  sugestoes: Jogo[] = []; // Lista de sugestões exibida abaixo do input

  constructor(private jogoService: JogoService) {}

  ngOnInit(): void {
    // Carrega os jogos para saber o que sugerir
    this.jogoService.getJogos().subscribe({
      next: (jogos) => this.todosJogos = jogos,
      error: (err) => console.error('Erro ao carregar sugestões na Navbar', err)
    });
  }

  aoDigitar(): void {
    // Envia o termo para o componente Home filtrar a página principal
    this.jogoService.atualizarTermoBusca(this.termo);

    // Se a barra estiver vazia, limpa as sugestões do menu dropdown
    if (!this.termo.trim()) {
      this.sugestoes = [];
      return;
    }

    // Filtra até 5 jogos que começam ou contêm o termo digitado
    this.sugestoes = this.todosJogos
      .filter(jogo => jogo.name.toLowerCase().includes(this.termo.toLowerCase()))
      .slice(0, 5); // Limita para não quebrar o layout
  }

  selecionarSugestao(nomeJogo: string): void {
    this.termo = nomeJogo;
    this.sugestoes = []; // Fecha a caixinha de sugestão
    this.jogoService.atualizarTermoBusca(this.termo); // Atualiza a busca global
  }

  limparSugesoes(): void {
    // Um pequeno delay para dar tempo do clique no item acontecer antes de fechar a lista
    setTimeout(() => {
      this.sugestoes = [];
    }, 200);
  }
}

