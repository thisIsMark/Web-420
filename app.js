// Require Statements

const express = require("express");
const http = require("http");
const swaggerUi = require("swagger-ui-express");
const mongoose = require("mongoose");
const swaggerJsdoc = require("swagger-jsdoc");

// Express library = app
let app = express();

app.use(express.json());
app.use(express.urlencoded({'extended':true}));

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'WEB 420 RESTful APIs',
            version: '1.0.0',
        },
    },
    apis: ['./routes/*.js'], // files containing annotations for the OpenAPI Specification
};

const openapiSpecification = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
