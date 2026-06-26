package com.stars.game.DTOS;

import java.util.List;

public record JogoResponseDTO(
    Long id,
    String name,
    Integer ano,
    Double nota,
    String imagem,
    String desenvolvedor,
    String descricao,
    List<String> plataformas,
    List<String> generos,
    Long totalResenhas,
    List<ResenhaResponseDTO> resenhas,
    List<PrecoResponseDTO> precos
) {

}
