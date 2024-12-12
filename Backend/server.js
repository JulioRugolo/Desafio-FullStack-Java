require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const cors = require('cors');

// Importar rotas
const PaisRoutes = require('./routes/PaisRoutes');
const PontoTuristicoRoutes = require('./routes/PontoTuristicoRoutes');
const ComentarioRoutes = require('./routes/ComentarioRoutes');
require('./models/associations');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Rotas
app.use('/api/pais', PaisRoutes);
app.use('/api/ponto-turistico', PontoTuristicoRoutes);
app.use('/api/comentario', ComentarioRoutes);

// Sincronizar modelos e iniciar o servidor
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Tabelas criadas ou atualizadas com sucesso!');
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao sincronizar tabelas:', error.message);
  });
