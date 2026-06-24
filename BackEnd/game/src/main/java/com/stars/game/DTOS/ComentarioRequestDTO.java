package com.stars.game.DTOS;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ComentarioRequestDTO(
    Long usuarioId,

    @NotBlank(message = "O comentário não pode estar vazio")
    @Size(max = 500, message = "O comentário deve ter no máximo 500 caracteres")
    String texto
) {

}
