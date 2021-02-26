package com.rest.API.Controller;

import com.rest.API.Exception.GlobalErrorException;
import com.rest.API.Models.Tarefa;
import com.rest.API.Repository.TarefasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tarefas")
public class TarefaController {

    @Autowired
    TarefasRepository tarefasRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public List<Tarefa> getAllTarefas() {
        return tarefasRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Tarefa createTarefa(@RequestBody Tarefa tarefa) {
        return tarefasRepository.save(tarefa);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/{id}")
    public Tarefa updateTarefa(@PathVariable(value = "id") Long id, @RequestBody Tarefa task) throws GlobalErrorException {
        Tarefa t = tarefasRepository.findById(id)
                .orElseThrow(() -> new GlobalErrorException(ResponseEntity.notFound().toString()));

        t.setConcluido(task.getConcluido());

        return tarefasRepository.save(t);
    }
}
