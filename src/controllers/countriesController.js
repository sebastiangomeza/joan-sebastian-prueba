const axios = require('axios');

async function getAllCountries(req, res) {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const countries = response.data;
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los países' });
  }
}

async function getCountryByName(req, res) {
  const name = req.params.name;
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    const country = response.data;
    res.json(country);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el país' });
  }
}

module.exports = {
  getAllCountries,
  getCountryByName
};
