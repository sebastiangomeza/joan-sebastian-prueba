const express = require('express');
const countriesController = require('../controllers/countriesController');

const router = express.Router();

router.get('/', countriesController.getAllCountries);
/**
 * @swagger
 * /countries:
 *   get:
 *     summary: Get all countries
 *     description: Retrieve information for all countries
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Country'
 *       500:
 *         $ref: '#/components/responses/InternalError'
 */


router.get('/:name', countriesController.getCountryByName);
/**
 * @swagger
 * /countries/{name}:
 *   get:
 *     summary: Get country by name
 *     description: Retrieve country information by name
 *     parameters:
 *       - name: name
 *         in: path
 *         description: Country name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Country'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/InternalError'
 */

module.exports = router;
