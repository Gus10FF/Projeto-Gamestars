package com.stars.game.entities;

import java.util.List;

import org.hibernate.annotations.Formula;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;


@Entity
@Table(name = "tbl_jogos")
public class Jogo{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O nome não pode estar em branco")
    private String name;

    @NotNull
    private Integer ano;

    private Double nota;

    private String imagem;

    private String desenvolvedor;

    private String descrição;

    private List<String> plataformas;

    private List<String> generos;

    @Formula("(SELECT COUNT(*) FROM tbl_resenhas a WHERE a.jogo_id = id)")
    private Long totalResenhas;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAno() {
        return ano;
    }

    public void setAno(Integer ano) {
        this.ano = ano;
    }

    public Double getNota() {
        return nota;
    }

    public void setNota(Double nota) {
        this.nota = nota;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public String getDesenvolvedor() {
        return desenvolvedor;
    }

    public void setDesenvolvedor(String desenvolvedor) {
        this.desenvolvedor = desenvolvedor;
    }

    public String getDescrição() {
        return descrição;
    }

    public void setDescrição(String descrição) {
        this.descrição = descrição;
    }

    public List<String> getPlataformas() {
        return plataformas;
    }

    public void setPlataformas(List<String> plataformas) {
        this.plataformas = plataformas;
    }

    public List<String> getGeneros() {
        return generos;
    }

    public void setGeneros(List<String> generos) {
        this.generos = generos;
    }

    public Long getTotalResenhas() {
        return totalResenhas;
    }

    public void setTotalResenhas(Long totalResenhas) {
        this.totalResenhas = totalResenhas;
    }
    
}