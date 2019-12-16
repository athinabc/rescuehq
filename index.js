const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const pets = [
	{
		id: 1,
		name: "Simba",
		dob: "2012-06-07",
		sex: "male",
		type: "dog",
		status: "adopted",
		tags: "mixed"
	},
	{
		id: 2,
		name: "Goodboi",
		dob: "2013-09-07",
		sex: "male",
		type: "dog",
		status: "adopted",
		tags: "mixed"
	},
	{
		id: 3,
		name: "Bandit",
		dob: "2019-06-13",
		sex: "male",
		type: "cat",
		status: "available",
		tags: "mixed"
	},
	{
		id: 4,
		name: "Piglet",
		dob: "2019-06-13",
		sex: "female",
		type: "cat",
		status: "available",
		tags: "mixed"
	},
	{
		id: 5,
		name: "Kitty",
		dob: "2019-06-13",
		sex: "female",
		type: "cat",
		status: "available",
		tags: "mixed"
	}
];

app.use(bodyParser.json());

app.get('/api/v1/pets', (req, res) => {
  res.json(pets);
});

app.get('/api/v1/pets/:id', (req, res) => {
  res.json(pets[req.params.id]);
});

app.listen(10000, () => {
  console.log(`Server started!`);
});