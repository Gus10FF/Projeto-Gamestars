package com.stars.game.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "tbl_comentarios")
public class Comentario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // --- ALTERAÇÃO: De String para relacionamento com a entidade Usuario ---
    @NotNull(message = "O usuário do comentário é obrigatório")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "usuario_id", nullable = false) // Mapeia exatamente a coluna 'usuario_id' do SQL
    private Usuario usuario;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "resenha_id") // Mapeia a coluna 'avaliacao_id' usada no data.sql
    @JsonIgnore // Evita loops infinitos de serialização JSON
    private Resenha resenha;

    @NotBlank(message = "O texto do comentário não pode estar vazio")
    @Size(max = 500, message = "O comentário deve ter no máximo 500 caracteres")
    private String texto;

    @NotNull(message = "A data do comentário é obrigatória")
    @PastOrPresent(message = "A data do comentário não pode ser futura")
    @JsonFormat(pattern = "d MMM. yyyy", locale = "pt-BR")
    private LocalDate data;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public Usuario getUsuario() {
        return usuario;
    }
    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Resenha getResenha() {
        return resenha;
    }
    public void setResenha(Resenha resenha) {
        this.resenha = resenha;
    }

    public String getTexto() {
        return texto;
    }
    public void setTexto(String texto) {
        this.texto = texto;
    }

    public LocalDate getData() {
        return data;
    }
    public void setData(LocalDate data) {
        this.data = data;
    }

    
}