package com.stars.game.DTOS;

import java.time.LocalDate;

public record ComentarioResponseDTO(
    Long id,
    UsuarioResponseDTO usuario,
    String texto,
    LocalDate data
) {

}
