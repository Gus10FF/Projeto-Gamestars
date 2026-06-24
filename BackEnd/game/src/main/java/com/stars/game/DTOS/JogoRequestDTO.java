package com.stars.game.DTOS;

import java.util.List;

import jakarta.validation.constraints.*;

public record JogoRequestDTO(
    @NotBlank(message = "O nome do jogo não pode estar em branco")
    String name,

    @NotNull(message = "O ano de lançamento é obrigatório")
    Integer ano,

    String imagem,
    String desenvolvedor,
    String descricao,
    
    @NotEmpty(message = "O jogo deve ter pelo menos uma plataforma associada")
    List<String> plataformas,

    @NotEmpty(message = "O jogo deve ter pelo menos um género associado")
    List<String> generos
) {

}
