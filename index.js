const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

require('dotenv').config();
// const aws = require('aws-sdk');

// let s3 = new aws.S3({
//   mongo_url: process.env.mongo_url
// });

mongoose
	.connect('mongodb://localhost:27017/spotify-APP-Backend', { useNewUrlParser: true }) //to run locally mongodb://localhost:27017/proj2
	.then(() => {
		const app = express();
		app.use(cors());
		app.use(express.json());
		app.use('/', routes);

		app.listen(3001, () => {
			console.log('Server has started!');
		});

		// const port = process.env.PORT || 5000;
		// app.listen(port, () => {
		// 	console.log(`Server started on port ${port}`);
		// });
	});
