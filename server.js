// Dependencies
const express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	Pet = require('./models/pet'),
	petServices = require('./services/pet');
const app = express();
const port = 80;
const logger = require('./logger');

// Routes
const petRoutes = require('./routes/pet.route');

// CORS
const corsOptions = {
	origin: 'http://localhost:' + port
};
app.use(cors(corsOptions));

// Body Parser
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// Routes
app.use('/acr/v1/pets', petRoutes);