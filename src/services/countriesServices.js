const axios = require('axios');
const { Api404Error, Api500Error } = require('../utils/baseError')

async function getAllCountries() {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los países');
  }
}

async function getCountryByName(name, fields) {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}?fields=${fields}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Api404Error()
    } else {
      throw new Api500Error();
    }
  }
}

module.exports = {
  getAllCountries,
  getCountryByName
};
