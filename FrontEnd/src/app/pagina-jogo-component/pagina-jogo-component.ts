import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JogoService, Jogo } from '../services/jogo-service';

@Component({
  selector: 'app-pagina-jogo-component',
  standalone: false,
  templateUrl: './pagina-jogo-component.html',
  styleUrl: './pagina-jogo-component.css',
})
export class PaginaJogoComponent implements OnInit {

  jogo: Jogo | undefined;
  barrasNota: { estrelas: number; percentual: number }[] = [];
  jogosSimilares: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private jService: JogoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // 1. Escuta mudanças nos parâmetros da URL (caso o usuário mude de jogo)
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      if (id) {
        this.carregarDadosDoJogo(id);

      }
      console.log(this.carregarDadosDoJogo(id));
    });
  }

  private carregarDadosDoJogo(id: number): void {
    // 2. Faz a chamada ao Service e se inscreve para receber a resposta do Spring Boot
    this.jService.getJogoPorId(id).subscribe({
      next: (jogoBuscado: Jogo) => {
        this.jogo = jogoBuscado;

        console.log('========== JOGO RECEBIDO ==========');
      console.log(jogoBuscado);


        // Só executa as lógicas visuais e de recomendação após o jogo chegar do backend
        this.calcularBarrasNota(this.jogo.resenhas);
        this.carregarJogosSimilares();

        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao buscar jogo do backend:', err);
      }
    });
  }

  private carregarJogosSimilares(): void {
    if (!this.jogo) return;

    // 3. Buscamos a lista completa de jogos do backend primeiro para poder filtrar os similares localmente
    this.jService.getJogos().subscribe({
      next: (todosOsJogos: Jogo[]) => {
        this.jogosSimilares = this.jService
          .getJogosPorGeneros(todosOsJogos, this.jogo!.generos, this.jogo!.id)
          .slice(0, 8);

          this.cdr.detectChanges();
      },
      error: (err) => console.error('Erro ao buscar jogos similares:', err)
    });
  }

  private calcularBarrasNota(resenhas: any[]): void {
    const total = resenhas?.length || 1;
    this.barrasNota = [5, 4, 3, 2, 1].map(estrelas => {
      const count = resenhas?.filter(r => Math.round(r.nota) === estrelas).length ?? 0;
      return { estrelas, percentual: Math.round((count / total) * 100) };
    });
  }

  // Altere o objeto para conter as propriedades exatas que seu ResenhaRequestDTO espera
novaResenha = {
  usuarioId: 1, // Exemplo: Mockando com o ID de um usuário cadastrado no banco (ex: 1)
  nota: 5,
  texto: ''
};

enviarResenha(): void {
  if (!this.jogo) return;

  if (!this.novaResenha.texto.trim()) {
    alert('Por favor, escreva o texto da resenha!');
    return;
  }

  // Payload formatado exatamente como o record Java quer receber
  const payload = {
    usuarioId: Number(this.novaResenha.usuarioId), // ou apenas o número direto
    nota: Number(this.novaResenha.nota),
    texto: this.novaResenha.texto.trim()
  };

  console.log("Enviando este payload para o backend:", payload);

  this.jService.adicionarResenha(this.jogo.id, payload).subscribe({
    next: (jogoAtualizado: Jogo) => {
      this.jogo = jogoAtualizado;
      this.calcularBarrasNota(this.jogo.resenhas);

      // Reseta os campos mantendo o usuarioId padrão de teste
      this.novaResenha = { usuarioId: 1, nota: 5, texto: '' };

      this.cdr.detectChanges();
      alert('Resenha adicionada com sucesso!');
    },
    error: (err) => {
      console.error('Erro detalhado do Spring:', err.error);
      alert('Erro ao salvar resenha. Verifique os logs do servidor.');
    }
  });
}
}
