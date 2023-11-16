const express = require('express');
const app = express();
const port = 3000;

// Middleware para processar o corpo das solicitações como JSON
app.use(express.json());

// Importa as rotas da API
const apiRoutes = require('./apiRoutes');
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu servidor!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
