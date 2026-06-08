import express from "express";

const app = express();

app.use(express.json());

//simulando a base de dados por enquanto
const cursos = [
    { id: 1, nome: "LCC"},
    { id: 2, nome: "Quimica"}
]

//Função para buscar um índice de Curso pelo id
function buscarCurso(id){
    return cursos.findIndex(curso=>{
        return curso.id === Number(id);
    });
}

app.get("/", (req, res)=> {
    res.status(200).send("Curso Web 2 - LCC");
});

app.get("/cursos", (req, res)=> {
    res.status(200).json(cursos);
})

//criando registro com post
app.post("/cursos", (req, res)=>{
    cursos.push(req.body);
    res.status(201).send("Curso cadastrado com sucesso");
});

//visualizar um curso
app.get("/cursos/:id", (req, res)=>{
    
})

//buscar e atualizar curso

//deletar curso


export default app;