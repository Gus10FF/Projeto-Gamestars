import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Comentario {
  id?: number;
  usuario: { id: number; username: string; email?: string };
  texto: string;
  data: string;
}

export interface Resenha {
  usuario: { id: number; username: string; email?: string };
  nota: number;
  texto: string;
  data: string;
  comentarios: Comentario[];
}

export interface Preco {
  nome: string;
  logo: string;
  preco: string;
  precoOriginal?: string;
  desconto?: number;
  link: string;
  melhorPreco: boolean;
}

export interface Jogo {
  id: number;
  name: string;
  ano: number;
  nota: number;
  imagem: string;
  desenvolvedor: string;
  descricao: string;
  plataformas: string[];
  generos: string[];
  totalResenhas: number;
  resenhas: Resenha[];
  precos: Preco[];
}

@Injectable({
  providedIn: 'root',
})
export class JogoService {

  private apiUrl = 'http://localhost:8080/jogos';

  constructor(private http: HttpClient) {}


  getJogos(): Observable<Jogo[]> {
  return this.http.get<Jogo[]>(this.apiUrl).pipe(
    map(jogos => jogos.map(jogo => ({
      ...jogo,
      resenhas: jogo.resenhas || [], // evita que venha undefined
      precos: []      // evita que quebre por falta de dados no H2
    })))
  );
}

  getJogoPorId(id: number): Observable<Jogo> {
  return this.http.get<Jogo>(`${this.apiUrl}/${id}`).pipe(
    map(jogo => ({
      ...jogo,
      resenhas: jogo.resenhas || [],
      precos: []
    }))
  );
}

  getJogosPorGeneros(todosOsJogos: Jogo[], generosDoJogoAtual: string[], idAtual: number): Jogo[] {
    return todosOsJogos.filter(jogo => {
      if (jogo.id === idAtual) return false;
      return jogo.generos.some(genero => generosDoJogoAtual.includes(genero));
    });
  }
}
