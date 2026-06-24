package com.stars.game.mappers;

import java.time.LocalDate;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.stars.game.DTOS.*;
import com.stars.game.entities.*;

@Mapper(componentModel = "spring", imports = {LocalDate.class})
public interface JogoMapper {
UsuarioResponseDTO toDTO(Usuario usuario);

    // --- COMENTARIO ---
    ComentarioResponseDTO toDTO(Comentario comentario);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "usuario", source = "usuario")
    @Mapping(target = "texto", source = "dto.texto")
    @Mapping(target = "data", expression = "java(LocalDate.now())")
    Comentario toEntity(ComentarioRequestDTO dto, Usuario usuario);

    // --- AVALIACAO ---
    ResenhaResponseDTO toDTO(Resenha resenha);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "comentarios", ignore = true)
    @Mapping(target = "usuario", source = "usuario")
    @Mapping(target = "juego", source = "jogo") // mapeia para o atributo 'juego' da entidade
    @Mapping(target = "texto", source = "dto.texto")
    @Mapping(target = "nota", source = "dto.nota")
    @Mapping(target = "data", expression = "java(LocalDate.now())")
    Resenha toEntity(ResenhaRequestDTO dto, Usuario usuario, Jogo jogo);

    // --- JOGO ---
    @Mapping(target = "totalAvaliacoes", source = "jogo.totalAvaliacoes") // chama o método transient automaticamente
    JogoResponseDTO toDTO(Jogo jogo);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "nota", constant = "0.0")
    @Mapping(target = "totalAvaliacoes", constant = "0L")
    @Mapping(target = "avaliacoes", ignore = true)
    Jogo toEntity(JogoRequestDTO dto);
}
