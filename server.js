import { app } from "./app.js";

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});