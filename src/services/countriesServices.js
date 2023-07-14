const axios = require('axios');

async function getAllCountries() {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los países');
  }
}

async function getCountryByName(name) {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener el país');
  }
}

module.exports = {
  getAllCountries,
  getCountryByName
};
