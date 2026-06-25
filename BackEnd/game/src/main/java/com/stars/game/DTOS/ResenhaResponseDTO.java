package com.stars.game.DTOS;

import java.time.LocalDate;
import java.util.List;

public record ResenhaResponseDTO(
    Long id,
    UsuarioResponseDTO usuario,
    Integer nota,
    String conteudo,
    LocalDate data,
    List<ComentarioResponseDTO> comentarios
) {

}
