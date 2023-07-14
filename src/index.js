require('dotenv').config();
const express = require('express');
const countriesRoutes = require('./routes/countriesRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para el parsing del body
app.use(express.json());

// Rutas
app.use('/countries', countriesRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
