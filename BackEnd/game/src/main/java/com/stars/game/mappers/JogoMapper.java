package com.stars.game.mappers;

import java.time.LocalDate;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.stars.game.DTOS.*;
import com.stars.game.entities.*;

@Mapper(componentModel = "spring", imports = {LocalDate.class})
public interface JogoMapper {
    default String mapUsuarioToString(Usuario usuario) {
        return usuario != null ? usuario.getUsername() : null;  // adjust based on your DTO needs
    }
    
    // Handle String to Usuario conversion (DTO → entity)
    default Usuario mapStringToUsuario(String usuarioNome) {
        if (usuarioNome == null) {
            return null;
        }
        Usuario usuario = new Usuario();
        usuario.setUsername(usuarioNome);
        return usuario;
    }
UsuarioResponseDTO toDTO(Usuario usuario);

    // --- COMENTARIO ---
    ComentarioResponseDTO toDTO(Comentario comentario);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "usuario", source = "usuario")
    @Mapping(target = "texto", source = "dto.texto")
    @Mapping(target = "resenha", ignore = true)  // Add this line
    @Mapping(target = "data", expression = "java(LocalDate.now())")
    Comentario toEntity(ComentarioRequestDTO dto, Usuario usuario);

    // --- AVALIACAO ---
    ResenhaResponseDTO toDTO(Resenha resenha);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "comentarios", ignore = true)
    @Mapping(target = "usuario", source = "usuario")
    @Mapping(target = "jogo", source = "jogo") // mapeia para o atributo 'juego' da entidade
    @Mapping(target = "conteudo", source = "dto.texto")
    @Mapping(target = "nota", source = "dto.nota")
    @Mapping(target = "data", expression = "java(LocalDate.now())")
    Resenha toEntity(ResenhaRequestDTO dto, Usuario usuario, Jogo jogo);

    // --- JOGO ---
    @Mapping(target = "totalResenhas", source = "jogo.totalResenhas") // chama o método transient automaticamente
    JogoResponseDTO toDTO(Jogo jogo);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "nota", constant = "0.0")
    @Mapping(target = "totalResenhas", constant = "0L")
    @Mapping(target = "resenhas", ignore = true)
    @Mapping(target = "precos", ignore = true)
    Jogo toEntity(JogoRequestDTO dto);

    // --- PREÇO ---
    PrecoResponseDTO toDTO(Preco preco);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "jogo", ignore = true)
    Preco toEntity(PrecoRequestDTO dto);
    }
