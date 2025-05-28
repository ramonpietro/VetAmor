const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Permitir que o frontend acesse o backend (cors)
app.use(cors());

// Para ler JSON no corpo das requisições
app.use(bodyParser.json());

// Rota teste para ver se tá funcionando
app.get('/', (req, res) => {
  res.send('Backend do VetAmor tá on 🔥');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
