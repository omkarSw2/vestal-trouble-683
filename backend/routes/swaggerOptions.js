const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API',
      version: '1.0.0',
      description: 'API documentation for Your Application',
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
      contact: {
        name: 'Sachin Kumar',
        url: 'https://yourwebsite.com',
        email: 'sachinpatel.k.786@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:8080', // Adjust this to match your server URL
        description: 'Local Development Server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to your API route files
};

const specs = swaggerJsdoc(options);

module.exports = specs;
