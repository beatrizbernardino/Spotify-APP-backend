const express = require('express');
const Tentativa = require('./models/Tentativa');
const router = express.Router();

router.get('/', async (req, res) => {
	const tentativas = await Tentativa.find();
	res.send(tentativas);
});

router.post('/save', async (req, res) => {
	const tentativa = new Tentativa({
		id: req.body.id,
		musica: req.body.musica,
		correct: req.body.correct,
		guess: req.body.guess
	});
	await tentativa.save();
	res.send(tentativa);
});

router.get('/tentativas/:id', async (req, res) => {
	try {
		const tentativas = await Tentativa.find({ id: req.params.id });
		res.send(tentativas);
	} catch (error) {
		res.status(404);
		res.send({ error: 'Esse usuário não existe!' });
	}
});

router.post('/likes/', async (req, res) => {
	try {
		var newlike = new Tentativa({ name: req.body.art });

		console.log(newlike);
		newlike.save();
		res.send(newlike);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
