const mongoose = require('mongoose');

const schema = mongoose.Schema({
	id: String,
	musica: String,
	correct: String,
	guess: String,
	name: String
});

module.exports = mongoose.model('usercollection', schema, 'usercollection');
