package com.stars.game.controllers;

import com.stars.game.DTOS.JogoRequestDTO;
import com.stars.game.DTOS.JogoResponseDTO;
import com.stars.game.DTOS.ResenhaRequestDTO;
import com.stars.game.DTOS.ResenhaResponseDTO;
import com.stars.game.DTOS.ComentarioRequestDTO;
import com.stars.game.services.JogoService;

import jakarta.validation.Valid;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/jogos")
@CrossOrigin(origins = "http://localhost:4200")
public class JogoController {

    private final JogoService jogoService;

    public JogoController(JogoService jogoService) {
        this.jogoService = jogoService;
    }

    @GetMapping
        public ResponseEntity<List<JogoResponseDTO>> listarTodos() {
        return ResponseEntity.ok(jogoService.listarTodos()); // Garanta que esse método existe no seu Service
    }

    @PostMapping
    public ResponseEntity<JogoResponseDTO> criarJogo(
            @Valid @RequestBody JogoRequestDTO dto) {

        return ResponseEntity.ok(jogoService.criarJogo(dto));
    }

    @GetMapping("/{id}")
    public ResponseEntity<JogoResponseDTO> buscarPorId(
            @PathVariable Long id) {

        return ResponseEntity.ok(jogoService.buscarPorId(id));
    }

    @PostMapping("/{jogoId}/resenhas")
    public ResponseEntity<JogoResponseDTO> adicionarResenha(
            @PathVariable Long jogoId,
            @Valid @RequestBody ResenhaRequestDTO dto) {

        return ResponseEntity.ok(
                jogoService.adicionarResenha(jogoId, dto)
        );
    }

    @PostMapping("/resenhas/{resenhaId}/comentarios")
    public ResponseEntity<ResenhaResponseDTO> adicionarComentario(
            @PathVariable Long resenhaId,
            @Valid @RequestBody ComentarioRequestDTO dto) {

        return ResponseEntity.ok(
                jogoService.adicionarComentario(resenhaId, dto)
        );
    }
}