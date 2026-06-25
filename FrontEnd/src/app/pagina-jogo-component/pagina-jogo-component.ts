import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JogoService } from '../services/jogo-service';

@Component({
  selector: 'app-pagina-jogo-component',
  standalone: false,
  templateUrl: './pagina-jogo-component.html',
  styleUrl: './pagina-jogo-component.css',
})
export class PaginaJogoComponent implements OnInit {

  jogo: any;
  barrasNota: { estrelas: number; percentual: number }[] = [];
  jogosSimilares: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private jService: JogoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jogo = this.jService.getJogoPorId(id);

    if (this.jogo) {
      this.calcularBarrasNota(this.jogo.resenhas);
      this.jogosSimilares = this.jService
        .getJogosPorGeneros(this.jogo.generos, this.jogo.id)
        .slice(0, 4);
    }
  }

  private calcularBarrasNota(resenhas: any[]): void {
    const total = resenhas?.length || 1;
    this.barrasNota = [5, 4, 3, 2, 1].map(estrelas => {
      const count = resenhas?.filter(r => Math.round(r.nota) === estrelas).length ?? 0;
      return { estrelas, percentual: Math.round((count / total) * 100) };
    });
  }
}