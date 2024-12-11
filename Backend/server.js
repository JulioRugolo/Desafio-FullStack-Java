require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database'); // Configuração do Sequelize
const PaisRoutes = require('./routes/PaisRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rotas de Países
app.use('/api/paises', PaisRoutes);

// Sincronizar modelos e iniciar o servidor
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Tabelas criadas com sucesso!');
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao sincronizar tabelas:', error);
  });
