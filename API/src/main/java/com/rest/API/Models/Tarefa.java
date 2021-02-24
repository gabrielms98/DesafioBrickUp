package com.rest.API.Models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "tarefas")
public class Tarefa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long _id;

    @Column(nullable = false)
    private String nome;

    @Lob
    @Column(nullable = true)
    private byte[] image;

    @Column(nullable = false)
    private Boolean concluido;

    public Tarefa(String nome, byte[] image, Boolean concluido) {
        this.nome = nome;
        this.image = image;
        this.concluido = concluido;
    }

    public Tarefa() {
        super();
    }

    public long get_id() {
        return _id;
    }

    public void set_id(long _id) {
        this._id = _id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public Boolean getConcluido() {
        return concluido;
    }

    public void setConcluido(Boolean concluido) {
        this.concluido = concluido;
    }
}
