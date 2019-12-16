// Dependencies
const express = require('express'),
    routes = express.Router(),
    Pet = require('../models/pet'),
	fs = require('fs');

/**
Method: GET
Description: Get all Pet instances
*/
routes.get('/', function (req, res, next) {
	let petData = fs.readFileSync('pets.json');
	let pets = JSON.parse(petData);
	res.json(pets);
});

/**
Method: POST
Description: Create a new Pet instance
*/
routes.post('/', function (req, res, next) {
	let petData = req.body; 
	let data = JSON.stringify(petData);
	fs.writeFileSync('pets.json', data);
});

module.exports = routes;