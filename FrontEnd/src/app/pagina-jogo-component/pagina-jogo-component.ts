
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
  barrasNota: { estrelas: number; percentual: number }[] = [];
  jogosSimilares: any;

  constructor(
    private route: ActivatedRoute,
    private jService: JogoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      // Usa o método do serviço para buscar o jogo
      this.jogoSelecionado = this.jService.getJogoPorId(Number(id));
      if (this.jogoSelecionado) {
         this.calcularBarrasNota(this.jogoSelecionado.avaliacoes);
      // Passa o array de gêneros (this.jogoSelecionado.generos)
      this.jogosSimilares = this.jService.getJogosPorGeneros(
        this.jogoSelecionado.generos, // Note o 's' se mudou o nome da propriedade para generos
        id
      );

      }
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
