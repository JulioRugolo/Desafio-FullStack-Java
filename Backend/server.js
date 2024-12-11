require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send(`Servidor rodando na porta ${PORT}!`);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
