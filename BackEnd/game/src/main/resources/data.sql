-- 1. Inserir Usuários
INSERT INTO tbl_usuarios (id, username, email, tipo) VALUES 
(1, 'gabriel_fps', 'gabriel@email.com', 'usuario'),
(2, 'mariana_gamer', 'mariana@email.com', 'usuario'),
(3, 'rodrigo_k', 'rodrigo@email.com', 'usuario');

INSERT INTO tbl_jogos (id, name, ano, nota, imagem, desenvolvedor, descricao) VALUES 
(1, 'Ultrakill', 2020, 5.0, 'https://exemplo.com/ultrakill.png', 'Arsi ''Hakita'' Patala', 'Um shooter em primeira pessoa retro, rápido e focado em estilo.');

-- 3. Inserir as Plataformas do Jogo
INSERT INTO tbl_jogo_plataformas (jogo_id, plataformas) VALUES 
(1, 'PC (Windows)');

-- 4. Inserir os Gêneros do Jogo
INSERT INTO tbl_jogo_generos (jogo_id, generos) VALUES 
(1, 'FPS'),
(1, 'Boomer Shooter'),
(1, 'Ação');

INSERT INTO tbl_resenhas (id, usuario_id, jogo_id, nota, conteudo, data) VALUES 
(1, 1, 1, 5, 'Melhor shooter que já joguei. O sistema de pontuação é viciante demais e o movimento é incrivelmente fluido. Cada arma tem múltiplos usos alternativos que mudam completamente o gameplay.', '2025-06-12');

-- 6. Inserir os Comentários usando 'resenha_id' e vinculando à resenha ID 10
INSERT INTO tbl_comentarios (id, usuario_id, resenha_id, texto, data) VALUES 
(101, 2, 1, 'Concordo! O railcannon então é surreal de satisfatório.', '2025-06-13'),
(102, 3, 1, 'O jogo ainda tá em acesso antecipado mas já entregou mais que muitos jogos completos.', '2025-06-14');