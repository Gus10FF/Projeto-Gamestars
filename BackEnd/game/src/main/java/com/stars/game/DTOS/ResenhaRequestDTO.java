package com.stars.game.DTOS;

import jakarta.validation.constraints.*;


public record ResenhaRequestDTO(
    @NotNull(message = "O ID do usuário que avalia é obrigatório")
    Long usuarioId,

    @NotNull(message = "A nota é obrigatória")
    @Min(value = 1, message = "A nota mínima é 1")
    @Max(value = 5, message = "A nota máxima é 5")
    Integer nota,

    @NotBlank(message = "O texto da avaliação não pode estar vazio")
    @Size(max = 1000, message = "O texto deve ter no máximo 1000 caracteres")
    String texto
) {

}
