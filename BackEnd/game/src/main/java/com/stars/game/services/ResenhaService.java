package com.stars.game.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.stars.game.entities.Jogo;
import com.stars.game.entities.Resenha;
import com.stars.game.entities.Usuario;
import com.stars.game.repositories.JogoRepository;
import com.stars.game.repositories.ResenhaRepository;
import com.stars.game.repositories.UsuarioRepository;

@Service
public class ResenhaService {

    private final ResenhaRepository resenhaRepository;
    private final UsuarioRepository usuarioRepository;
    private final JogoRepository jogoRepository;

    public ResenhaService(
            ResenhaRepository resenhaRepository,
            UsuarioRepository usuarioRepository,
            JogoRepository jogoRepository) {

        this.resenhaRepository = resenhaRepository;
        this.usuarioRepository = usuarioRepository;
        this.jogoRepository = jogoRepository;
    }

    public List<Resenha> listarTodas() {
        return resenhaRepository.findAll();
    }

    public Resenha buscarPorId(Long id) {
        return resenhaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Resenha não encontrada"));
    }

    public Resenha criarResenha(Long usuarioId, Long jogoId, Resenha resenha) {

        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        Jogo jogo = jogoRepository.findById(jogoId)
                .orElseThrow(() -> new RuntimeException("Jogo não encontrado"));

        resenha.setUsuario(usuario);
        resenha.setJogo(jogo);
        resenha.setData(LocalDate.now());

        Resenha salva = resenhaRepository.save(resenha);

        atualizarNotaMedia(jogo);

        return salva;
    }

    public Resenha atualizar(Long id, Resenha novaResenha) {

        Resenha resenha = buscarPorId(id);

        resenha.setConteudo(novaResenha.getConteudo());
        resenha.setNota(novaResenha.getNota());

        Resenha salva = resenhaRepository.save(resenha);

        atualizarNotaMedia(resenha.getJogo());

        return salva;
    }

    public void deletar(Long id) {

        Resenha resenha = buscarPorId(id);

        Jogo jogo = resenha.getJogo();

        resenhaRepository.delete(resenha);

        atualizarNotaMedia(jogo);
    }

    private void atualizarNotaMedia(Jogo jogo) {

        List<Resenha> resenhas = jogo.getResenhas();

        if (resenhas == null || resenhas.isEmpty()) {
            jogo.setNota(0.0);
        } else {

            double media = resenhas.stream()
                    .mapToLong(Resenha::getNota)
                    .average()
                    .orElse(0.0);

            jogo.setNota(media);
        }

        jogoRepository.save(jogo);
    }
}