require('dotenv').config();
const swaggerRoute = require('../swagger');
const express = require('express');
const countriesRoutes = require('./routes/countriesRoutes');
const createLog = require('./utils/createLog')
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(createLog)
app.use('/countries', countriesRoutes);
app.use('/api', swaggerRoute);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

module.exports=app