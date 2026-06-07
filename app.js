import "./db/index.js";
import express from "express";
import { cursosRouter } from './routes/cursos.js'

const app = express();

app.use(express.json());
app.use(cursosRouter)
export { app };