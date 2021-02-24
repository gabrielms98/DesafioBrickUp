package com.rest.API.Repository;

import com.rest.API.Models.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TarefasRepository extends JpaRepository<Tarefa, Long> { }
