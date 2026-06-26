package com.stars.game.entities;

import java.util.List;


import jakarta.persistence.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;


@Entity
@Table(name = "tbl_jogos")
public class Jogo{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O nome não pode estar em branco")
    private String name;

    @NotNull(message = "O ano é obrigatório")
    private Integer ano;

    private Double nota;

    private String imagem;

    private String desenvolvedor;

    @Column(length = 1000)
    private String descricao;

    @ElementCollection
    @CollectionTable(name = "tbl_jogo_plataformas", joinColumns = @JoinColumn(name = "jogo_id"))
    private List<String> plataformas;

    @ElementCollection
    @CollectionTable(name = "tbl_jogo_generos", joinColumns = @JoinColumn(name = "jogo_id"))
    private List<String> generos;

    @OneToMany(mappedBy = "jogo", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Preco> precos;

    @Transient
    private Long totalResenhas;

    @OneToMany(mappedBy = "jogo", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<@Valid Resenha> resenhas;
public Jogo() {}

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Integer getAno() { return ano; }
    public void setAno(Integer ano) { this.ano = ano; }

    public Double getNota() { 
        if (resenhas == null || resenhas.isEmpty()) {
            return 0.0;
        }

        double soma = resenhas.stream()
                .mapToDouble(Resenha::getNota) // se o Resenha DTO ainda for classe antiga
                .sum();

        double media = soma / resenhas.size();
        return Math.round(media * 10.0) / 10.0;
    }

    public List<Preco> getPrecos() {
    return precos;
}

public void setPrecos(List<Preco> precos) {
    this.precos = precos;
}

    public void setNota(Double nota) { this.nota = nota; }

    public String getImagem() { return imagem; }
    public void setImagem(String imagem) { this.imagem = imagem; }

    public String getDesenvolvedor() { return desenvolvedor; }
    public void setDesenvolvedor(String desenvolvedor) { this.desenvolvedor = desenvolvedor; }

    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }

    public List<String> getPlataformas() { return plataformas; }
    public void setPlataformas(List<String> plataformas) { this.plataformas = plataformas; }

    public List<String> getGeneros() { return generos; }
    public void setGeneros(List<String> generos) { this.generos = generos; }

    // Calcula dinamicamente a quantidade sempre que o atributo for solicitado pela API
    public Long getTotalResenhas() {
        if (this.resenhas == null) {
            return 0L;
        }
        return (long) this.resenhas.size();
    }

    public void setTotalResenhas(Long totalResenhas) {
        this.totalResenhas = totalResenhas;
    }

    public List<Resenha> getResenhas() { return resenhas; }
    public void setResenhas(List<Resenha> resenhas) { this.resenhas = resenhas; }
    
}