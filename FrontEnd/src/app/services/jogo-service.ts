import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root',
})
export class JogoService{

  jogo: Jogo | undefined;

  private todosJogos: Jogo[] = [
    {
      id: 1,
      nome: 'Ultrakill',
      ano: 2020,
      nota: 4.9,
      imagem: 'jogos/Ultrakill.jpeg',
      desenvolvedor: 'Arsi "Hakita" Patala',
      descricao: 'ULTRAKILL é um fast-paced boomer shooter que combina o movimento frenético de jogos como Quake com o sistema de pontuação estilizado de Devil May Cry. Você é uma máquina movida a sangue que desce ao inferno em busca de combustível para sobreviver. Quanto mais próximo dos inimigos, mais sangue você absorve e mais saúde você recupera.',
      plataformas: ['PC'],
      generos: ['Ação', 'FPS', 'Roguelite'],
      totalAvaliacoes: 2847,
      avaliacoes: [
        {
          usuario: 'gabriel_fps',
          nota: 5,
          texto: 'Melhor shooter que já joguei. O sistema de pontuação é viciante demais e o movimento é incrivelmente fluido. Cada arma tem múltiplos usos alternativos que mudam completamente o gameplay.',
          data: '12 jun. 2025',
          comentarios: [
            { usuario: 'mariana_gamer', texto: 'Concordo! O railcannon então é surreal de satisfatório.', data: '13 jun. 2025' },
            { usuario: 'rodrigo_k', texto: 'O jogo ainda tá em acesso antecipado mas já entregou mais que muitos jogos completos.', data: '14 jun. 2025' }
          ]
        },
        {
          usuario: 'lucas_dev',
          nota: 4.5,
          texto: 'Jogo incrível, mas a curva de aprendizado é bem íngreme nos atos mais recentes. Para quem gosta de desafio, é perfeito.',
          data: '03 mai. 2025',
          comentarios: [
            { usuario: 'felipe_br', texto: 'P-rank em tudo é o verdadeiro desafio. Vale cada tentativa.', data: '05 mai. 2025' }
          ]
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '37,99', link: 'https://store.steampowered.com', melhorPreco: true },
        { nome: 'Nuuvem', logo: 'lojas/nuuvem.png', preco: '41,50', precoOriginal: '55,00', desconto: 25, link: 'https://nuuvem.com', melhorPreco: false },
        { nome: 'Fanatical', logo: 'lojas/fanatical.png', preco: '43,90', link: 'https://fanatical.com', melhorPreco: false },
      ]
    },
    {
      id: 2,
      nome: 'Enter The Gungeon',
      ano: 2016,
      nota: 4.8,
      imagem: 'jogos/Enter the Gungeon.jpeg',
      desenvolvedor: 'Dodge Roll',
      descricao: 'Enter the Gungeon é um bullet hell dungeon crawler que acompanha aventureiros enquanto tentam encontrar e destruir o passado. Lute por andares cada vez mais profundos de um dungeon em constante mudança, repleto de inimigos mortais e armas incríveis.',
      plataformas: ['PC', 'PS4', 'Xbox', 'Switch'],
      generos: ['Roguelite', 'Bullet Hell', 'Ação'],
      totalAvaliacoes: 1543,
      avaliacoes: [
        {
          usuario: 'ana_plays',
          nota: 5,
          texto: 'Um dos melhores roguelites já feitos. As referências a armas e jogos são incríveis, e o sistema de rolagem é super satisfatório.',
          data: '20 abr. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '29,99', link: 'https://store.steampowered.com', melhorPreco: false },
        { nome: 'Nuuvem', logo: 'lojas/nuuvem.png', preco: '24,90', precoOriginal: '29,99', desconto: 17, link: 'https://nuuvem.com', melhorPreco: true },
      ]
    },
    {
      id: 3,
      nome: 'Iron Lung',
      ano: 2022,
      nota: 4.7,
      imagem: 'jogos/Iron Lung.jpeg',
      desenvolvedor: 'David Szymanski',
      descricao: 'Você está preso em um submarino movido a sangue no fundo de uma lua misteriosa. Tire fotos do abismo enquanto tenta não morrer. Uma experiência de horror curta e inesquecível.',
      plataformas: ['PC'],
      generos: ['Horror', 'Suspense', 'Indie'],
      totalAvaliacoes: 987,
      avaliacoes: [
        {
          usuario: 'thiago_horror',
          nota: 5,
          texto: 'Experiência única. Nunca fui tão assustado por algo que mal consigo ver. O sound design é assombrosamente bom.',
          data: '01 mar. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '14,99', link: 'https://store.steampowered.com', melhorPreco: true },
      ]
    },
    {
      id: 4,
      nome: 'Deltarune',
      ano: 2018,
      nota: 4.9,
      imagem: 'jogos/Deltarune.jpeg',
      desenvolvedor: 'Toby Fox',
      descricao: 'Deltarune é um RPG de Toby Fox, criador de Undertale. Você joga como Kris, um humano em uma cidade estranha. Quando um buraco negro se abre na escola, uma jornada épica começa. Dois capítulos disponíveis gratuitamente.',
      plataformas: ['PC', 'Switch', 'PS4'],
      generos: ['RPG', 'Indie', 'Aventura'],
      totalAvaliacoes: 3210,
      avaliacoes: [
        {
          usuario: 'carol_rpg',
          nota: 5,
          texto: 'Toby Fox superou até o Undertale. A escrita é impecável e os personagens são cativantes. Ansioso pelos próximos capítulos.',
          data: '18 mai. 2025',
          comentarios: [
            { usuario: 'pedro_gamer', texto: 'Susie e Ralsei são personagens incríveis, mal posso esperar pelo capítulo 3!', data: '19 mai. 2025' }
          ]
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: 'Grátis', link: 'https://store.steampowered.com', melhorPreco: true },
      ]
    },
    {
      id: 5,
      nome: 'Mullet Madjack',
      ano: 2024,
      nota: 4.9,
      imagem: 'jogos/Mullet Madjack.jpeg',
      desenvolvedor: 'HAMMER95',
      descricao: 'Um shooter frenético dos anos 90 no futuro cyberpunk. Mate robôs para manter seu coração batendo — você tem 10 segundos antes de morrer e só mais kills podem te manter vivo.',
      plataformas: ['PC'],
      generos: ['FPS', 'Ação', 'Roguelite'],
      totalAvaliacoes: 1120,
      avaliacoes: [
        {
          usuario: 'vitor_action',
          nota: 5,
          texto: 'A premissa de matar ou morrer é genialmente simples. A estética cyberpunk anos 90 é incrível e a trilha sonora é pesadíssima.',
          data: '30 abr. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '32,99', link: 'https://store.steampowered.com', melhorPreco: true },
        { nome: 'Nuuvem', logo: 'lojas/nuuvem.png', preco: '36,50', link: 'https://nuuvem.com', melhorPreco: false },
      ]
    },
    {
      id: 6,
      nome: 'Dust: An Elysian Tail',
      ano: 2012,
      nota: 4.5,
      imagem: 'jogos/Dust.jpeg',
      desenvolvedor: 'Humble Hearts',
      descricao: 'Um action RPG de plataforma belíssimo, criado quase inteiramente por uma única pessoa. Uma história épica de identidade e redenção em um mundo de fantasia.',
      plataformas: ['PC', 'Xbox', 'PS4', 'Switch'],
      generos: ['Action RPG', 'Plataforma', 'Aventura'],
      totalAvaliacoes: 789,
      avaliacoes: [
        {
          usuario: 'julia_indie',
          nota: 4.5,
          texto: 'Um jogo feito por uma pessoa só com qualidade de estúdio. A arte é de tirar o fôlego e o combate é extremamente satisfatório.',
          data: '10 jan. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '19,99', link: 'https://store.steampowered.com', melhorPreco: true },
      ]
    },
    {
      id: 7,
      nome: 'Uktena 64',
      ano: 2025,
      nota: 4.5,
      imagem: 'jogos/Uktena 64.jpeg',
      desenvolvedor: 'Turnfollow',
      descricao: 'Um RPG de terror com estética de Nintendo 64 baseado no folclore dos povos nativos americanos. Explore uma reserva assombrada e descubra seus segredos sombrios.',
      plataformas: ['PC'],
      generos: ['RPG', 'Horror', 'Indie'],
      totalAvaliacoes: 310,
      avaliacoes: [
        {
          usuario: 'bianca_indie',
          nota: 4.5,
          texto: 'Raridade de jogo que usa mitologia indígena de forma respeitosa e genuína. A atmosfera é perturbadora e fascinante.',
          data: '22 mai. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '14,99', link: 'https://store.steampowered.com', melhorPreco: true },
        { nome: 'Itch.io', logo: 'lojas/itch.png', preco: '12,00', link: 'https://itch.io', melhorPreco: false },
      ]
    },
    {
      id: 8,
      nome: 'Hotline Miami',
      ano: 2012,
      nota: 4.7,
      imagem: 'jogos/HM.jpeg',
      desenvolvedor: 'Dennaton Games',
      descricao: 'Um jogo de ação violenta e difícil com uma perspectiva top-down. Envolva-se em um banho de sangue ao estilo anos 80 ao som de uma trilha sonora sintetizada alucinante. Descubra quem está por trás dos misteriosos telefonemas que o levam a mascarar e matar.',
      plataformas: ['PC', 'PS4', 'PS Vita', 'Switch'],
      generos: ['Ação', 'Indie', 'Top-Down'],
      totalAvaliacoes: 2100,
      avaliacoes: [
        {
          usuario: 'igor_retro',
          nota: 5,
          texto: 'Obra de arte do game design indie. Cada fase é um puzzle de ação frenética. A trilha sonora então é lendária.',
          data: '15 fev. 2025',
          comentarios: [
            { usuario: 'marina_ps', texto: 'Hotline Miami 2 também é muito bom, mas o primeiro tem algo especial.', data: '17 fev. 2025' }
          ]
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '11,99', link: 'https://store.steampowered.com', melhorPreco: false },
        { nome: 'Nuuvem', logo: 'lojas/nuuvem.png', preco: '9,90', precoOriginal: '11,99', desconto: 17, link: 'https://nuuvem.com', melhorPreco: true },
      ]
    }
  ];

  constructor() {}

  // Método para retornar todos os jogos
  getJogos() {
    return this.todosJogos;
  }

  // Método para retornar apenas um jogo pelo ID
  getJogoPorId(id: number) {
    return this.todosJogos.find(jogo => jogo.id === id);
  }

  getJogosPorGeneros(generosDoJogoAtual: string[], idAtual: number) {
    return this.todosJogos.filter(jogo => {
      // 1. Ignora o próprio jogo atual
      if (jogo.id === idAtual) return false;

      // 2. Verifica se o jogo atual tem PELO MENOS UM gênero igual aos do jogo buscado
      return jogo.generos.some(genero => generosDoJogoAtual.includes(genero));
    });
  }
}
