package com.stars.game.controllers;

import com.stars.game.entities.Resenha;
import com.stars.game.repositories.ResenhaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/resenhas")
public class ResenhaController {

    private final ResenhaRepository resenhaRepository;

    public ResenhaController(ResenhaRepository resenhaRepository) {
        this.resenhaRepository = resenhaRepository;
    }

    @GetMapping
    public ResponseEntity<List<Resenha>> listarTodas() {
        return ResponseEntity.ok(resenhaRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Resenha> buscarPorId(@PathVariable Long id) {

        Resenha resenha = resenhaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Resenha não encontrada"));

        return ResponseEntity.ok(resenha);
    }

    @DeleteMapping("/{id}")
public ResponseEntity<Void> deletar(@PathVariable Long id) {
    if (!resenhaRepository.existsById(id)) {
        return ResponseEntity.notFound().build();
    }
    resenhaRepository.deleteById(id);
    return ResponseEntity.noContent().build();
}

}