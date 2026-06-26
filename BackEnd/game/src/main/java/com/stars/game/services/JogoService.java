package com.stars.game.services;

import com.stars.game.DTOS.*;
import com.stars.game.entities.*;
import com.stars.game.mappers.JogoMapper;
import com.stars.game.repositories.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class JogoService {

    private final JogoRepository jogoRepository;

    private final UsuarioRepository usuarioRepository;

    private final ResenhaRepository resenhaRepository;

    private final JogoMapper jogoMapper;

    JogoService(JogoMapper jogoMapper, JogoRepository jogoRepository, UsuarioRepository usuarioRepository, ResenhaRepository resenhaRepository) {
        this.jogoMapper = jogoMapper;
        this.jogoRepository = jogoRepository;
        this.usuarioRepository = usuarioRepository;
        this.resenhaRepository = resenhaRepository;
    }

    // --- CRIAÇÃO DE UM JOGO ---
    @Transactional
    public JogoResponseDTO criarJogo(JogoRequestDTO dto) {
        Jogo jogo = jogoMapper.toEntity(dto);
        jogo = jogoRepository.save(jogo);
        return jogoMapper.toDTO(jogo);
    }

    public List<JogoResponseDTO> listarTodos() {
    // Busca os jogos do banco e mapeia/converte para JogoResponseDTO
        return jogoRepository.findAll().stream()
                .map(jogo -> jogoMapper.toDTO(jogo)) // Ou a sua lógica de conversão
                .toList();
    }
    // --- BUSCA DE JOGO POR ID ---
    @Transactional(readOnly = true)
    public JogoResponseDTO buscarPorId(Long id) {
        Jogo jogo = jogoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Jogo não encontrado com o ID: " + id));
        return jogoMapper.toDTO(jogo);
    }

    // --- ADICIONAR UMA AVALIAÇÃO (RESENHA) A UM JOGO ---
    @Transactional
    public JogoResponseDTO adicionarResenha(Long jogoId, ResenhaRequestDTO dto) {
        // 1. Busca o Jogo e o Usuário que está a avaliar
        Jogo jogo = jogoRepository.findById(jogoId)
                .orElseThrow(() -> new RuntimeException("Jogo não encontrado"));
        
        Usuario usuario = usuarioRepository.findById(dto.usuarioId())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        // 2. Converte o DTO para Entidade através do MapStruct
        Resenha resenha = jogoMapper.toEntity(dto, usuario, jogo);

        // 3. Adiciona a nova avaliação à lista do jogo
        jogo.getResenhas().add(resenha);

        // 4. Recalcula a nota média do Jogo
        recalcularNotaDoJogo(jogo);

        // 5. Salva o jogo (o CascadeType.ALL vai salvar a avaliação automaticamente)
        jogoRepository.save(jogo);

        return jogoMapper.toDTO(jogo);
    }

    // --- ADICIONAR UM COMENTÁRIO A UMA AVALIAÇÃO ---
    @Transactional
    public ResenhaResponseDTO adicionarComentario(Long resenhaId, ComentarioRequestDTO dto) {
        Resenha resenha = resenhaRepository.findById(resenhaId)
                .orElseThrow(() -> new RuntimeException("Avaliação não encontrada"));

        Usuario usuario = usuarioRepository.findById(dto.usuarioId())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        Comentario comentario = jogoMapper.toEntity(dto, usuario);
        
        resenha.getComentarios().add(comentario);
        resenha = resenhaRepository.save(resenha);

        return jogoMapper.toDTO(resenha);
    }

    // --- MÉTODO AUXILIAR PARA RECALCULAR A MÉDIA ---
    private void recalcularNotaDoJogo(Jogo jogo) {
        List<Resenha> resenha = jogo.getResenhas();
        if (resenha == null || resenha.isEmpty()) {
            jogo.setNota(0.0);
            return;
        }

        double soma_das_Notas = resenha.stream()
                .mapToDouble(Resenha::getNota)
                .sum();

        // Define a nova média arredondada
        jogo.setNota(soma_das_Notas / resenha.size());
    }
}