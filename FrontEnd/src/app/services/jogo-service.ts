import { Injectable } from '@angular/core';

interface Comentario {
  usuario: string;
  texto: string;
  data: string;
}

interface Resenha {
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
  totalResenhas: number;
  resenhas: Resenha[];
  precos: Preco[];
}

@Injectable({
  providedIn: 'root',
})
export class JogoService {

  private todosJogos: Jogo[] = [
    {
      id: 1, nome: 'Ultrakill', ano: 2019, nota: 4.9,
      imagem: 'jogos/Ultrakill.jpeg',
      desenvolvedor: "Arsi 'Hakita' Patala",
      descricao: 'FPS retrô frenético que combina movimentação avançada, combate estiloso e pontuação inspirada em jogos de ação.',
      plataformas: ['PC (Windows)'],
      generos: ['FPS', 'Boomer Shooter', 'Ação'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_17', nota: 5,
          texto: 'Um dos FPS mais rápidos e satisfatórios que já joguei. O sistema de movimentação incentiva dominar cada fase.',
          data: '12 jun. 2025',
          comentarios: [
            { usuario: 'Usuario_32', texto: 'Concordo totalmente. A movimentação é o ponto mais forte do jogo.', data: '25 jul. 2025' },
            { usuario: 'Usuario_58', texto: 'Depois que aprendi os combos o jogo ficou ainda melhor.', data: '25 jul. 2025' },
          ]
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '37,99', link: 'https://store.steampowered.com/app/1229490', melhorPreco: true },
      ]
    },
    {
      id: 2, nome: 'Enter The Gungeon', ano: 2016, nota: 4.8,
      imagem: 'jogos/Enter the Gungeon.jpeg',
      desenvolvedor: 'Dodge Roll',
      descricao: 'Roguelike de ação focado em tiroteios intensos, armas absurdas e exploração de masmorras geradas proceduralmente.',
      plataformas: ['PC (Windows)', 'Nintendo Switch', 'PlayStation 4', 'Xbox One'],
      generos: ['Roguelike', 'Bullet Hell', 'Ação'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_42', nota: 5,
          texto: 'Excelente roguelike. A variedade de armas e a rejogabilidade são absurdas.',
          data: '13 jun. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '29,99', link: 'https://store.steampowered.com/app/311690', melhorPreco: true },
      ]
    },
    {
      id: 3, nome: 'Iron Lung', ano: 2022, nota: 4.7,
      imagem: 'jogos/Iron Lung.jpeg',
      desenvolvedor: 'David Szymanski',
      descricao: 'Jogo de terror psicológico ambientado em um submarino explorando um oceano de sangue em um planeta desconhecido.',
      plataformas: ['PC (Windows)'],
      generos: ['Terror', 'Psicológico', 'Exploração'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_8', nota: 4,
          texto: 'Atmosfera extremamente desconfortável. Consegue gerar tensão mesmo com mecânicas simples.',
          data: '14 jun. 2025',
          comentarios: [
            { usuario: 'Usuario_14', texto: 'A atmosfera realmente é muito pesada e desconfortável.', data: '25 jul. 2025' },
            { usuario: 'Usuario_87', texto: 'Um dos jogos de terror mais criativos que joguei recentemente.', data: '25 jul. 2025' },
          ]
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '14,99', link: 'https://store.steampowered.com/app/1914700', melhorPreco: true },
      ]
    },
    {
      id: 4, nome: 'DeltaRune', ano: 2018, nota: 4.9,
      imagem: 'jogos/Deltarune.jpeg',
      desenvolvedor: 'Toby Fox',
      descricao: 'RPG episódico ambientado em um universo paralelo a Undertale, com personagens marcantes e combate único.',
      plataformas: ['PC (Windows)', 'Nintendo Switch', 'PlayStation 4', 'PlayStation 5'],
      generos: ['RPG', 'Aventura', 'Indie'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_65', nota: 5,
          texto: 'Personagens memoráveis e uma trilha sonora fantástica. Ansioso pelos próximos capítulos.',
          data: '15 jun. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: 'Grátis', link: 'https://store.steampowered.com/app/1671210', melhorPreco: true },
      ]
    },
    {
      id: 5, nome: 'Mullet Madjack', ano: 2024, nota: 4.9,
      imagem: 'jogos/Mullet Madjack.jpeg',
      desenvolvedor: 'HAMMER95 Studios',
      descricao: 'FPS brasileiro extremamente veloz inspirado em animes dos anos 80 e jogos arcade.',
      plataformas: ['PC (Windows)'],
      generos: ['FPS', 'Boomer Shooter', 'Ação'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_23', nota: 5,
          texto: 'FPS frenético e estiloso. Cada fase parece uma corrida contra o relógio.',
          data: '16 jun. 2025',
          comentarios: [
            { usuario: 'Usuario_45', texto: 'A trilha sonora combina perfeitamente com a velocidade do gameplay.', data: '26 jul. 2025' },
            { usuario: 'Usuario_72', texto: 'Conseguiu me prender por horas tentando melhorar meus tempos.', data: '26 jul. 2025' },
          ]
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '32,99', link: 'https://store.steampowered.com/app/2537390', melhorPreco: true },
      ]
    },
    {
      id: 6, nome: 'Dust: An Elysian Tail', ano: 2012, nota: 4.5,
      imagem: 'jogos/Dust.jpeg',
      desenvolvedor: 'Dean Dodrill',
      descricao: 'Metroidvania com visual desenhado à mão, combate fluido e narrativa emocionante.',
      plataformas: ['PC (Windows)', 'PlayStation 4', 'Xbox One', 'Nintendo Switch'],
      generos: ['Metroidvania', 'Ação', 'RPG'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_91', nota: 4,
          texto: 'Visual bonito e combate divertido. A história também surpreende positivamente.',
          data: '17 jun. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '19,99', link: 'https://store.steampowered.com/app/236090', melhorPreco: true },
      ]
    },
    {
      id: 7, nome: 'Uktena 64', ano: 2025, nota: 4.5,
      imagem: 'jogos/Uktena 64.jpeg',
      desenvolvedor: 'SeethingSwarm',
      descricao: 'Jogo de terror inspirado na estética do Nintendo 64 com foco em exploração e atmosfera.',
      plataformas: ['PC (Windows)'],
      generos: ['Terror', 'Exploração', 'Indie'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_37', nota: 3,
          texto: 'Boa ambientação retrô. Ainda tem espaço para evoluir, mas a proposta é interessante.',
          data: '18 jun. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '14,99', link: 'https://store.steampowered.com/app/2767780', melhorPreco: true },
      ]
    },
    {
      id: 8, nome: 'Hotline Miami', ano: 2012, nota: 4.7,
      imagem: 'jogos/HM.jpeg',
      desenvolvedor: 'Dennaton Games',
      descricao: 'Jogo de ação ultraviolento com perspectiva superior, ritmo acelerado e trilha sonora eletrônica marcante.',
      plataformas: ['PC (Windows)', 'PlayStation 4', 'PlayStation 3', 'PlayStation Vita'],
      generos: ['Ação', 'Shooter', 'Top-Down'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_54', nota: 5,
          texto: 'Trilha sonora perfeita e gameplay viciante. Um clássico indie.',
          data: '19 jun. 2025',
          comentarios: [
            { usuario: 'Usuario_21', texto: 'Hotline Miami nunca envelhece.', data: '26 jul. 2025' },
            { usuario: 'Usuario_93', texto: 'A música e a ação são simplesmente perfeitas.', data: '26 jul. 2025' },
          ]
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '11,99', link: 'https://store.steampowered.com/app/219150', melhorPreco: true },
      ]
    },
    {
      id: 9, nome: 'Gravity Circuit', ano: 2023, nota: 4.6,
      imagem: 'jogos/Gravity Circuit.jpg',
      desenvolvedor: 'Domesticated Ant Games',
      descricao: 'Plataforma de ação inspirado em clássicos dos anos 90 com foco em combate corpo a corpo.',
      plataformas: ['PC (Windows)', 'Nintendo Switch', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X/S'],
      generos: ['Plataforma', 'Ação', 'Metroidvania'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_12', nota: 4,
          texto: 'Movimentação fluida e chefes bem construídos. Excelente homenagem aos jogos clássicos.',
          data: '20 jun. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '29,99', link: 'https://store.steampowered.com/app/2012440', melhorPreco: true },
      ]
    },
    {
      id: 10, nome: 'Balatro', ano: 2024, nota: 4.2,
      imagem: 'jogos/balatro.jpeg',
      desenvolvedor: 'LocalThunk',
      descricao: 'Roguelike de construção de baralhos baseado em pôquer, combinando estratégia e multiplicadores absurdos.',
      plataformas: ['PC (Windows)', 'Nintendo Switch', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X/S'],
      generos: ['Roguelike', 'Cartas', 'Estratégia'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_88', nota: 4,
          texto: 'Uma ideia simples executada de forma brilhante. Sempre dá vontade de jogar mais uma partida.',
          data: '21 jun. 2025',
          comentarios: [
            { usuario: 'Usuario_39', texto: 'Balatro virou meu vício mais recente.', data: '27 jul. 2025' },
            { usuario: 'Usuario_66', texto: 'Sempre acho que vou jogar só uma partida e acabo ficando horas.', data: '27 jul. 2025' },
          ]
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '32,99', link: 'https://store.steampowered.com/app/2379780', melhorPreco: true },
      ]
    },
    {
      id: 11, nome: 'BALL X PIT', ano: 2025, nota: 4.5,
      imagem: 'jogos/Ball x pit.jpeg',
      desenvolvedor: 'Kenny Sun',
      descricao: 'Roguelike de ação que mistura mecânicas de breakout, construção de base e progressão permanente em partidas rápidas.',
      plataformas: ['PC (Windows)'],
      generos: ['Roguelike', 'Ação', 'Arcade'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_31', nota: 4,
          texto: 'Mistura interessante de gêneros. Tem potencial para crescer bastante.',
          data: '22 jun. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '14,99', link: 'https://store.steampowered.com/app/2456780', melhorPreco: true },
      ]
    },
    {
      id: 12, nome: 'Lost in Vivo', ano: 2018, nota: 4.1,
      imagem: 'jogos/Lost in Vivo.jpeg',
      desenvolvedor: 'KIRA',
      descricao: 'Jogo de terror psicológico em primeira pessoa focado em claustrofobia, exploração e atmosfera perturbadora.',
      plataformas: ['PC (Windows)'],
      generos: ['Terror', 'Psicológico', 'Sobrevivência'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_76', nota: 3,
          texto: 'O clima de terror funciona muito bem, embora alguns momentos sejam confusos.',
          data: '23 jun. 2025',
          comentarios: [
            { usuario: 'Usuario_18', texto: 'A ambientação compensa algumas limitações técnicas.', data: '27 jul. 2025' },
            { usuario: 'Usuario_52', texto: 'Também fiquei perdido em alguns momentos da campanha.', data: '27 jul. 2025' },
          ]
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '14,99', link: 'https://store.steampowered.com/app/1045980', melhorPreco: true },
      ]
    },
    {
      id: 13, nome: 'Super Galaxy Squadron EX Turbo', ano: 2015, nota: 3.7,
      imagem: 'jogos/Super Galaxy.jpeg',
      desenvolvedor: 'Syn9',
      descricao: "Shoot 'em up inspirado em clássicos arcade com múltiplos pilotos, desafios intensos e progressão moderna.",
      plataformas: ['PC (Windows)'],
      generos: ["Shoot 'em Up", 'Arcade', 'Ação'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_4', nota: 3,
          texto: 'Shooter sólido com bastante conteúdo, mas não se destaca tanto quanto outros do gênero.',
          data: '24 jun. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '9,99', link: 'https://store.steampowered.com/app/396480', melhorPreco: true },
      ]
    },
    {
      id: 14, nome: 'Mycopunk', ano: 2025, nota: 4.7,
      imagem: 'jogos/Mycopunk.jpeg',
      desenvolvedor: 'Pigeons at Play',
      descricao: 'FPS cooperativo focado em combate contra criaturas fúngicas, personalização de equipamentos e trabalho em equipe.',
      plataformas: ['PC (Windows)'],
      generos: ['FPS', 'Cooperativo', 'Ação'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_59', nota: 5,
          texto: 'Combate cooperativo divertido e ótima direção artística.',
          data: '25 jun. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '29,99', link: 'https://store.steampowered.com/app/2649880', melhorPreco: true },
      ]
    },
    {
      id: 15, nome: 'Noita', ano: 2020, nota: 4.5,
      imagem: 'jogos/Noita_.jpg',
      desenvolvedor: 'Nolla Games',
      descricao: 'Roguelike de ação onde cada pixel é simulado fisicamente, permitindo interações criativas e destruição total do cenário.',
      plataformas: ['PC (Windows)'],
      generos: ['Roguelike', 'Sandbox', 'Ação'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_27', nota: 5,
          texto: 'Um dos roguelikes mais criativos já feitos. As possibilidades são praticamente infinitas.',
          data: '26 jun. 2025',
          comentarios: [
            { usuario: 'Usuario_75', texto: 'Noita é um caos completo da melhor forma possível.', data: '28 jul. 2025' },
            { usuario: 'Usuario_7', texto: 'Cada partida gera histórias completamente diferentes.', data: '28 jul. 2025' },
          ]
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '29,99', link: 'https://store.steampowered.com/app/881100', melhorPreco: true },
      ]
    },
    {
      id: 16, nome: 'Amid Evil', ano: 2018, nota: 3.9,
      imagem: 'jogos/Amid Evil.jpeg',
      desenvolvedor: 'Indefatigable',
      descricao: 'Boomer shooter de fantasia inspirado em clássicos dos anos 90, com armas mágicas e movimentação veloz.',
      plataformas: ['PC (Windows)'],
      generos: ['FPS', 'Boomer Shooter', 'Fantasia'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_44', nota: 4,
          texto: 'Visual incrível e combate muito satisfatório. Uma ótima homenagem aos shooters clássicos.',
          data: '27 jun. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '29,99', link: 'https://store.steampowered.com/app/673130', melhorPreco: true },
      ]
    },
    {
      id: 17, nome: 'A Wolf in Antumn', ano: 2025, nota: 3.6,
      imagem: 'jogos/A Wolf in Antumn.jpeg',
      desenvolvedor: 'Pacthesis Studio',
      descricao: 'Aventura narrativa independente focada em exploração, atmosfera melancólica e desenvolvimento de personagens.',
      plataformas: ['PC (Windows)'],
      generos: ['Aventura', 'Narrativo', 'Indie'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_73', nota: 3,
          texto: 'História interessante e atmosfera agradável, mas o ritmo poderia ser melhor.',
          data: '28 jun. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '9,99', link: 'https://store.steampowered.com', melhorPreco: true },
      ]
    },
    {
      id: 18, nome: 'Chop Goblins', ano: 2022, nota: 4.8,
      imagem: 'jogos/Chop Goblins.jpeg',
      desenvolvedor: 'David Szymanski',
      descricao: 'FPS curto e acelerado onde goblins viajantes do tempo espalham caos através de diferentes períodos históricos.',
      plataformas: ['PC (Windows)'],
      generos: ['FPS', 'Boomer Shooter', 'Ação'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_11', nota: 5,
          texto: 'Curto, divertido e cheio de personalidade. Vale cada minuto.',
          data: '29 jun. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '6,59', link: 'https://store.steampowered.com/app/2130030', melhorPreco: true },
      ]
    },
    {
      id: 19, nome: 'Cult of the Lamb', ano: 2022, nota: 4.5,
      imagem: 'jogos/Cult of The Lamb.jpeg',
      desenvolvedor: 'Massive Monster',
      descricao: 'Mistura de roguelike e gerenciamento de culto onde o jogador recruta seguidores e expande sua seita.',
      plataformas: ['PC (Windows)', 'Nintendo Switch', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X/S'],
      generos: ['Roguelike', 'Gerenciamento', 'Ação'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_95', nota: 4,
          texto: 'A mistura de gerenciamento e roguelike funciona melhor do que eu esperava.',
          data: '30 jun. 2025',
          comentarios: [
            { usuario: 'Usuario_84', texto: 'A parte de gerenciamento me surpreendeu bastante.', data: '28 jul. 2025' },
            { usuario: 'Usuario_30', texto: 'Achei o equilíbrio entre combate e administração muito bom.', data: '28 jul. 2025' },
          ]
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '59,99', link: 'https://store.steampowered.com/app/1313140', melhorPreco: true },
      ]
    },
    {
      id: 20, nome: 'Your Only Move is HUSTLE', ano: 2022, nota: 4.8,
      imagem: 'jogos/Yomi.jpeg',
      desenvolvedor: 'Ivy Sly',
      descricao: 'Jogo de luta baseado em turnos que simula combates de anime quadro a quadro com enorme profundidade estratégica.',
      plataformas: ['PC (Windows)'],
      generos: ['Luta', 'Estratégia', 'Multijogador'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_29', nota: 5,
          texto: 'Sistema de combate extremamente profundo. Cada luta parece uma partida de xadrez.',
          data: '01 jul. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '19,99', link: 'https://store.steampowered.com/app/2212330', melhorPreco: true },
      ]
    },
    {
      id: 21, nome: 'My Friend Pedro', ano: 2019, nota: 4.2,
      imagem: 'jogos/My Friend Pedro.png',
      desenvolvedor: 'DeadToast Entertainment',
      descricao: 'Jogo de ação acrobática focado em tiroteios estilizados, parkour e combos cinematográficos.',
      plataformas: ['PC (Windows)', 'Nintendo Switch', 'PlayStation 4', 'Xbox One'],
      generos: ['Ação', 'Plataforma', 'Shooter'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_67', nota: 4,
          texto: 'Gameplay estiloso e muito divertido. As acrobacias deixam tudo mais dinâmico.',
          data: '02 jul. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '29,99', link: 'https://store.steampowered.com/app/1073010', melhorPreco: true },
      ]
    },
    {
      id: 22, nome: 'Lunacid', ano: 2023, nota: 4.7,
      imagem: 'jogos/Lunacid.jpeg',
      desenvolvedor: 'KIRA LLC',
      descricao: "RPG de exploração em primeira pessoa inspirado nos clássicos King's Field, com atmosfera sombria e progressão livre.",
      plataformas: ['PC (Windows)'],
      generos: ['RPG', 'Dungeon Crawler', 'Exploração'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_38', nota: 5,
          texto: 'Exploração recompensadora e atmosfera fantástica. Um prato cheio para fãs de RPGs antigos.',
          data: '03 jul. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '19,99', link: 'https://store.steampowered.com/app/1745510', melhorPreco: true },
      ]
    },
    {
      id: 23, nome: 'Celeste', ano: 2018, nota: 4.6,
      imagem: 'jogos/Celeste.png',
      desenvolvedor: 'Extremely OK Games',
      descricao: 'Plataforma desafiadora que acompanha a jornada de Madeline enquanto enfrenta obstáculos físicos e emocionais.',
      plataformas: ['PC (Windows)', 'Nintendo Switch', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X/S'],
      generos: ['Plataforma', 'Precision Platformer', 'Indie'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_81', nota: 5,
          texto: 'Desafiador na medida certa e com uma mensagem muito inspiradora.',
          data: '04 jul. 2025',
          comentarios: [
            { usuario: 'Usuario_55', texto: 'Celeste é um dos melhores jogos independentes já feitos.', data: '29 jul. 2025' },
            { usuario: 'Usuario_90', texto: 'A curva de aprendizado é excelente.', data: '29 jul. 2025' },
          ]
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '19,99', link: 'https://store.steampowered.com/app/504230', melhorPreco: true },
      ]
    },
    {
      id: 24, nome: 'Animal Well', ano: 2024, nota: 4.9,
      imagem: 'jogos/Animal Well.jpeg',
      desenvolvedor: 'Shared Memory',
      descricao: 'Metroidvania focado em exploração, mistérios e quebra-cabeças, sem depender de combate tradicional.',
      plataformas: ['PC (Windows)', 'Nintendo Switch', 'PlayStation 5', 'Xbox Series X/S'],
      generos: ['Metroidvania', 'Exploração', 'Puzzle'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_6', nota: 5,
          texto: 'Cheio de segredos e descobertas. Um dos jogos mais criativos dos últimos anos.',
          data: '05 jul. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '59,99', link: 'https://store.steampowered.com/app/813230', melhorPreco: true },
      ]
    },
    {
      id: 25, nome: 'AntonBlast', ano: 2024, nota: 4.9,
      imagem: 'jogos/AntonBlast.jpeg',
      desenvolvedor: 'Summitsphere',
      descricao: 'Plataforma de ação frenético inspirado em Wario Land, com destruição de cenários e movimentação explosiva.',
      plataformas: ['PC (Windows)', 'Nintendo Switch'],
      generos: ['Plataforma', 'Ação', 'Arcade'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_52', nota: 4,
          texto: 'Movimentação excelente e fases muito divertidas. Captura bem a energia dos clássicos.',
          data: '06 jul. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '59,99', link: 'https://store.steampowered.com/app/1834180', melhorPreco: true },
      ]
    },
    {
      id: 26, nome: 'Buckshot Roulette', ano: 2023, nota: 4.3,
      imagem: 'jogos/BuckShot.png',
      desenvolvedor: 'Mike Klubnika',
      descricao: 'Jogo de horror e estratégia que transforma a roleta russa em um confronto psicológico intenso.',
      plataformas: ['PC (Windows)'],
      generos: ['Terror', 'Estratégia', 'Indie'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_19', nota: 4,
          texto: 'Conceito simples, mas extremamente eficaz. A tensão é constante.',
          data: '07 jul. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '3,99', link: 'https://store.steampowered.com/app/2835570', melhorPreco: true },
      ]
    },
    {
      id: 27, nome: '9 Kings', ano: 2024, nota: 4.8,
      imagem: 'jogos/9Kings.jpg',
      desenvolvedor: 'Sad Socket',
      descricao: 'Roguelike estratégico de construção de reino onde diferentes reis competem pelo domínio do mapa.',
      plataformas: ['PC (Windows)'],
      generos: ['Roguelike', 'Estratégia', 'Construção'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_84', nota: 5,
          texto: 'Ótimo sistema estratégico e bastante variedade entre partidas.',
          data: '08 jul. 2025',
          comentarios: [
            { usuario: 'Usuario_11', texto: 'A variedade estratégica realmente faz diferença entre partidas.', data: '29 jul. 2025' },
            { usuario: 'Usuario_43', texto: 'Espero que receba ainda mais atualizações.', data: '29 jul. 2025' },
          ]
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '14,99', link: 'https://store.steampowered.com/app/2797460', melhorPreco: true },
      ]
    },
    {
      id: 28, nome: 'Arsonate', ano: 2026, nota: 4.5,
      imagem: 'jogos/Arsonate.png',
      desenvolvedor: 'Arsonate Team',
      descricao: 'Ação independente com foco em combate rápido, exploração e progressão baseada em habilidades.',
      plataformas: ['PC (Windows)'],
      generos: ['Ação', 'Roguelike', 'Indie'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_34', nota: 3,
          texto: 'Boa base para um jogo promissor. Ainda precisa de mais conteúdo.',
          data: '09 jul. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '19,99', link: 'https://store.steampowered.com', melhorPreco: true },
      ]
    },
    {
      id: 29, nome: 'Exit The Gungeon', ano: 2019, nota: 4.4,
      imagem: 'jogos/Exit the Gungeon.jpeg',
      desenvolvedor: 'Dodge Roll',
      descricao: 'Spin-off de Enter the Gungeon que troca a exploração de masmorras por ação intensa em plataformas verticais.',
      plataformas: ['PC (Windows)', 'Nintendo Switch', 'PlayStation 4', 'Xbox One'],
      generos: ['Roguelike', 'Plataforma', 'Ação'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_97', nota: 4,
          texto: 'Uma abordagem diferente para a fórmula de Enter the Gungeon que funciona muito bem.',
          data: '10 jul. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '14,99', link: 'https://store.steampowered.com/app/1209350', melhorPreco: true },
      ]
    },
    {
      id: 30, nome: 'The Pony Factory', ano: 2024, nota: 3.9,
      imagem: 'jogos/Pony Factory.jpeg',
      desenvolvedor: 'David Szymanski',
      descricao: 'Jogo de terror independente com estética retrô e atmosfera perturbadora inspirada em creepypastas e horror analógico.',
      plataformas: ['PC (Windows)'],
      generos: ['Terror', 'Psicológico', 'Indie'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_15', nota: 2,
          texto: 'A ambientação é interessante, mas o jogo não conseguiu me prender por muito tempo.',
          data: '11 jul. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: 'Grátis', link: 'https://store.steampowered.com/app/2573830', melhorPreco: true },
      ]
    },
    {
      id: 31, nome: 'Deaths Door', ano: 2021, nota: 4.3,
      imagem: 'jogos/Deaths Door.jpeg',
      desenvolvedor: 'Acid Nerve',
      descricao: 'Aventura de ação isométrica onde um corvo ceifador enfrenta criaturas poderosas para coletar almas perdidas.',
      plataformas: ['PC (Windows)', 'Nintendo Switch', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X/S'],
      generos: ['Ação', 'Aventura', 'Soulslike'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_63', nota: 4,
          texto: 'Combate divertido, exploração recompensadora e chefes memoráveis. Uma excelente aventura.',
          data: '12 jul. 2025',
          comentarios: [
            { usuario: 'Usuario_61', texto: 'Os chefes foram o ponto alto para mim.', data: '30 jul. 2025' },
            { usuario: 'Usuario_97', texto: 'A direção artística também merece elogios.', data: '30 jul. 2025' },
          ]
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '59,99', link: 'https://store.steampowered.com/app/894020', melhorPreco: true },
      ]
    },
    {
      id: 32, nome: 'Hotline Miami 2', ano: 2015, nota: 4.3,
      imagem: 'jogos/HM 2.jpeg',
      desenvolvedor: 'Dennaton Games',
      descricao: 'Sequência de Hotline Miami que amplia a narrativa, a violência estilizada e a complexidade dos confrontos.',
      plataformas: ['PC (Windows)'],
      generos: ['Ação', 'Shooter', 'Top-Down'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_22', nota: 4,
          texto: 'Mais difícil e caótico que o primeiro jogo, com uma narrativa surpreendentemente interessante.',
          data: '13 jul. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '14,99', link: 'https://store.steampowered.com/app/274170', melhorPreco: true },
      ]
    },
    {
      id: 33, nome: 'Fight Knight', ano: 2021, nota: 4.6,
      imagem: 'jogos/Fight Knight.png',
      desenvolvedor: 'Team Sorcerobe',
      descricao: 'Dungeon crawler em primeira pessoa focado exclusivamente em combate corpo a corpo rápido e responsivo.',
      plataformas: ['PC (Windows)'],
      generos: ['Dungeon Crawler', 'Ação', 'RPG'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_71', nota: 5,
          texto: 'Combate corpo a corpo extremamente satisfatório. Cada andar apresenta um desafio único.',
          data: '14 jul. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '29,99', link: 'https://store.steampowered.com/app/1294140', melhorPreco: true },
      ]
    },
    {
      id: 34, nome: 'Dusk', ano: 2018, nota: 4.9,
      imagem: 'jogos/Dusk.jpg',
      desenvolvedor: 'David Szymanski',
      descricao: 'Boomer shooter inspirado em Quake e Doom, com ação intensa, fases elaboradas e atmosfera de horror rural.',
      plataformas: ['PC (Windows)', 'Nintendo Switch'],
      generos: ['FPS', 'Boomer Shooter', 'Ação'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_13', nota: 5,
          texto: 'Um dos melhores boomer shooters já feitos. Ritmo excelente do início ao fim.',
          data: '15 jul. 2025',
          comentarios: [
            { usuario: 'Usuario_28', texto: 'Dusk é uma aula de design para FPS modernos.', data: '30 jul. 2025' },
            { usuario: 'Usuario_76', texto: 'Concordo, o ritmo das fases é excelente.', data: '30 jul. 2025' },
          ]
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '29,99', link: 'https://store.steampowered.com/app/519860', melhorPreco: true },
      ]
    },
    {
      id: 35, nome: 'Faith', ano: 2017, nota: 4.0,
      imagem: 'jogos/Faith.jpeg',
      desenvolvedor: 'Airdorf Games',
      descricao: 'Jogo de terror inspirado em gráficos de Atari que explora exorcismos, cultos e fenômenos sobrenaturais.',
      plataformas: ['PC (Windows)', 'Nintendo Switch', 'PlayStation 4'],
      generos: ['Terror', 'Psicológico', 'Sobrevivência'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_56', nota: 4,
          texto: 'Visual simples, mas muito eficaz para criar tensão e desconforto.',
          data: '16 jul. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '19,99', link: 'https://store.steampowered.com/app/1179080', melhorPreco: true },
      ]
    },
    {
      id: 36, nome: 'Gloomwood', ano: 2022, nota: 4.9,
      imagem: 'jogos/Gloomwood.jpeg',
      desenvolvedor: 'Dillon Rogers e David Szymanski',
      descricao: 'Immersive sim de horror stealth inspirado em Thief, com exploração aberta e múltiplas abordagens para cada situação.',
      plataformas: ['PC (Windows)'],
      generos: ['Stealth', 'Immersive Sim', 'Terror'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_90', nota: 5,
          texto: 'Atmosfera fantástica e liberdade para abordar objetivos de diferentes formas.',
          data: '17 jul. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '29,99', link: 'https://store.steampowered.com/app/1438770', melhorPreco: true },
      ]
    },
    {
      id: 37, nome: 'Inscryption', ano: 2021, nota: 4.7,
      imagem: 'jogos/Inscriptyon.jpeg',
      desenvolvedor: 'Daniel Mullins Games',
      descricao: 'Mistura de jogo de cartas, quebra-cabeças e horror psicológico repleta de mistérios e reviravoltas.',
      plataformas: ['PC (Windows)', 'Nintendo Switch', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X/S'],
      generos: ['Cartas', 'Roguelike', 'Terror'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_47', nota: 5,
          texto: 'Mistura gêneros de forma brilhante. Cada nova descoberta deixa a experiência mais interessante.',
          data: '18 jul. 2025',
          comentarios: [
            { usuario: 'Usuario_36', texto: 'Inscryption foi uma das maiores surpresas que já tive jogando.', data: '31 jul. 2025' },
            { usuario: 'Usuario_69', texto: 'Quanto menos se sabe sobre ele antes de jogar, melhor.', data: '31 jul. 2025' },
          ]
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '29,99', link: 'https://store.steampowered.com/app/1092790', melhorPreco: true },
      ]
    },
    {
      id: 38, nome: 'Spooky Jump Scare Mansion', ano: 2014, nota: 4.7,
      imagem: 'jogos/Spooky Mansion.jpeg',
      desenvolvedor: 'Lag Studios',
      descricao: 'Jogo de terror que combina sustos aparentemente inocentes com ameaças cada vez mais perigosas e perturbadoras.',
      plataformas: ['PC (Windows)'],
      generos: ['Terror', 'Sobrevivência', 'Exploração'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_5', nota: 4,
          texto: 'Começa parecendo um jogo inocente, mas evolui para algo muito mais assustador.',
          data: '19 jul. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: 'Grátis', link: 'https://store.steampowered.com/app/93700', melhorPreco: true },
      ]
    },
    {
      id: 39, nome: 'Griss', ano: 2018, nota: 4.6,
      imagem: 'jogos/Griss.jpeg',
      desenvolvedor: 'Nomada Studio',
      descricao: 'Plataforma artístico focado em narrativa visual, exploração e representação emocional através de ambientes pintados à mão.',
      plataformas: ['PC (Windows)', 'Nintendo Switch', 'PlayStation 4', 'Xbox One'],
      generos: ['Plataforma', 'Aventura', 'Puzzle'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_78', nota: 5,
          texto: 'Visual deslumbrante e trilha sonora emocionante. Uma experiência artística memorável.',
          data: '20 jul. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '29,99', link: 'https://store.steampowered.com/app/763790', melhorPreco: true },
      ]
    },
    {
      id: 40, nome: 'Secret Aagent Wizard Boy and the International Crime Syndicate', ano: 2025, nota: 4.1,
      imagem: 'jogos/Wizard Agent.jpeg',
      desenvolvedor: 'The Secret Wizard Team',
      descricao: 'Aventura cômica que mistura espionagem, magia e exploração em um mundo repleto de organizações criminosas.',
      plataformas: ['PC (Windows)'],
      generos: ['Aventura', 'Comédia', 'Exploração'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_26', nota: 3,
          texto: 'Ideias criativas e humor divertido, embora ainda precise de mais conteúdo.',
          data: '21 jul. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '9,99', link: 'https://store.steampowered.com', melhorPreco: true },
      ]
    },
    {
      id: 41, nome: 'Undertale', ano: 2015, nota: 4.4,
      imagem: 'jogos/Undertale.jpeg',
      desenvolvedor: 'Toby Fox',
      descricao: 'RPG independente onde as escolhas do jogador afetam profundamente a história, os personagens e o desfecho da aventura.',
      plataformas: ['PC (Windows)', 'Nintendo Switch', 'PlayStation 4', 'Xbox One'],
      generos: ['RPG', 'Narrativo', 'Indie'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_100', nota: 5,
          texto: 'Personagens inesquecíveis e uma narrativa que recompensa cada escolha do jogador.',
          data: '22 jul. 2025',
          comentarios: [
            { usuario: 'Usuario_24', texto: 'Undertale continua sendo uma experiência única.', data: '31 jul. 2025' },
            { usuario: 'Usuario_88', texto: 'Os personagens são impossíveis de esquecer.', data: '31 jul. 2025' },
          ]
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '9,99', link: 'https://store.steampowered.com/app/391540', melhorPreco: true },
      ]
    },
    {
      id: 42, nome: 'Pseudoregalia', ano: 2023, nota: 4.8,
      imagem: 'jogos/Pseudoregalia.png',
      desenvolvedor: 'Rittzler',
      descricao: 'Metroidvania 3D focado em movimentação avançada, exploração livre e descoberta de habilidades.',
      plataformas: ['PC (Windows)'],
      generos: ['Metroidvania', 'Plataforma 3D', 'Exploração'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_40', nota: 5,
          texto: 'Movimentação excelente e exploração extremamente satisfatória para quem gosta de segredos.',
          data: '23 jul. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: '14,99', link: 'https://store.steampowered.com/app/2159160', melhorPreco: true },
      ]
    },
    {
      id: 43, nome: 'Squirrel Stapler', ano: 2023, nota: 4.1,
      imagem: 'jogos/Squirrel Stapler.jpeg',
      desenvolvedor: 'David Szymanski',
      descricao: 'Jogo de horror surreal onde o jogador caça esquilos para cumprir exigências cada vez mais perturbadoras.',
      plataformas: ['PC (Windows)'],
      generos: ['Terror', 'Caça', 'Psicológico'],
      totalResenhas: 1,
      resenhas: [
        {
          usuario: 'Usuario_68', nota: 4,
          texto: 'Estranho, perturbador e memorável. Uma experiência de horror bastante única.',
          data: '24 jul. 2025',
          comentarios: []
        }
      ],
      precos: [
        { nome: 'Steam', logo: 'lojas/steam.png', preco: 'Grátis', link: 'https://store.steampowered.com/app/2537530', melhorPreco: true },
      ]
    },
  ];

  constructor() {}

  getJogos() {
    return this.todosJogos;
  }

  getJogoPorId(id: number) {
    return this.todosJogos.find(jogo => jogo.id === id);
  }

  getJogosPorGeneros(generosDoJogoAtual: string[], idAtual: number) {
    return this.todosJogos.filter(jogo => {
      if (jogo.id === idAtual) return false;
      return jogo.generos.some(genero => generosDoJogoAtual.includes(genero));
    });
  }
}