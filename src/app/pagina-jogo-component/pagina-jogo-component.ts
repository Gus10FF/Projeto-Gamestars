
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JogoService } from '../services/jogo-service';

interface Comentario {
  usuario: string;
  texto: string;
  data: string;
}

interface Avaliacao {
  usuario: string;
  nota: number;
  texto: string;
  data: string;
  comentarios: Comentario[];
}

interface Preco {
  nome: string;
  logo: string;
  preco: string;
  precoOriginal?: string;
  desconto?: number;
  link: string;
  melhorPreco: boolean;
}

interface Jogo {
  id: number;
  nome: string;
  ano: number;
  nota: number;
  imagem: string;
  desenvolvedor: string;
  descricao: string;
  plataformas: string[];
  generos: string[];
  totalAvaliacoes: number;
  avaliacoes: Avaliacao[];
  precos: Preco[];
}

@Component({
  selector: 'app-pagina-jogo-component',
  standalone: false,
  templateUrl: './pagina-jogo-component.html',
  styleUrl: './pagina-jogo-component.css',
})
export class PaginaJogoComponent implements OnInit {

  jogoSelecionado: any;
  jogo: any;
  barrasNota: { estrelas: number; percentual: number }[] = [];

 jogosSimilares = [
    { id: 2, nome: 'Enter The Gungeon', nota: 4.8, imagem: 'jogos/Enter the Gungeon.jpeg' },
    { id: 6, nome: 'Dust: An Elysian Tail', nota: 4.5, imagem: 'jogos/Dust.jpeg' },
    { id: 8, nome: 'Hotline Miami', nota: 4.7, imagem: 'jogos/HM.jpeg' },
  ];

  constructor(
    private route: ActivatedRoute,
    private jService: JogoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      // Usa o método do serviço para buscar o jogo
      this.jogoSelecionado = this.jService.getJogoPorId(Number(id));
console.log(this.jogoSelecionado);
    }

  }

  private calcularBarrasNota(avaliacoes: Avaliacao[]): void {
    const total = avaliacoes.length || 1;
    this.barrasNota = [5, 4, 3, 2, 1].map(estrelas => {
      const count = avaliacoes.filter(a => Math.round(a.nota) === estrelas).length;
      return { estrelas, percentual: Math.round((count / total) * 100) };
    });
  }
}
