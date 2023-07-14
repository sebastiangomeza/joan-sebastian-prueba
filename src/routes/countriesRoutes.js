const express = require('express');
const countriesController = require('../controllers/countriesController');

const router = express.Router();

router.get('/', countriesController.getAllCountries);
router.get('/:name', countriesController.getCountryByName);

module.exports = router;
