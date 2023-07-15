const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');
const router = express.Router();

const options = {
  swaggerDefinition: {
    info: {
      title: 'API Documentation',
      version: '1.0.0',
    },
    components: {
      schemas: {
        Country: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            population: {
              type: 'number',
            },
          },
        },
      },
      responses: {
        NotFound: {
          description: 'Country not found',
        },
        InternalError: {
          description: 'Internal server error',
        },
      },
    },
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

router.use('/api-docs', swaggerUi.serve);
router.get(
  '/api-docs',
  swaggerUi.setup(swaggerSpec, {
    explorer: true,
  })
);

module.exports = router;
