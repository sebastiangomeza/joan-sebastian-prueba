const countriesServices = require('../services/countriesServices');

async function getAllCountries(req, res) {
  try {
    const countries = await countriesServices.getAllCountries()
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
}

async function getCountryByName(req, res) {
  const name = req.params.name;
  try {
    const fields = ['name', 'area', 'population']
    const country = await countriesServices.getCountryByName(name, fields)
    res.json(country);
  } catch (error) {
    if (error.statusCode === 404) {
      res.status(404).json({ error: 'country not found' });
    }
    else {
      res.status(500).json({ error: 'Server Error' });
    }
  }
}

module.exports = {
  getAllCountries,
  getCountryByName
};
