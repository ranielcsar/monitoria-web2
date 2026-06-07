import { Router } from "express";
import { database } from "../db/index.js";

const cursosRouter = Router();

cursosRouter.get("/cursos", (req, res) => {
  const stmt = database.prepare("SELECT * FROM cursos");
  const todosCursos = stmt.all(); // array com os registros
  res.status(200).json(todosCursos);
});

cursosRouter.get("/cursos/:id", (req, res) => {
  const { id } = req.params;

  const stmt = database.prepare("SELECT * FROM cursos WHERE id = ?");
  const curso = stmt.get(id);

  if (!curso)
    return res.status(404).json("Curso não encontrado");

  return res.status(200).json(curso);
});

cursosRouter.post("/cursos", (req, res) => {
  const { nome, carga_horaria, descricao } = req.body;
  const stmt = database.prepare("INSERT INTO cursos (nome, carga_horaria, descricao) VALUES (?, ?, ?)");
  stmt.run(nome, carga_horaria, descricao);
  res.status(201).send("Curso cadastrado com sucesso");
});

cursosRouter.put("/cursos/:id", (req, res) => {
  const { id } = req.params;
  const { nome, carga_horaria, descricao } = req.body;
  const stmt = database.prepare(`
      UPDATE cursos 
      SET nome = ?, carga_horaria = ?, descricao = ? 
      WHERE id = ?
    `);
  stmt.run(nome, carga_horaria, descricao, id);
  res.status(200).send("Curso atualizado com sucesso");
});

cursosRouter.delete("/cursos/:id", (req, res) => {
  const { id } = req.params;
  const stmt = database.prepare("DELETE FROM cursos WHERE id = ?");
  stmt.run(id);
  res.status(200).send("Curso deletado com sucesso");
});

export { cursosRouter };