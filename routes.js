const express = require("express");
const Tentativa = require("./models/Tentativa");
const router = express.Router();

router.get("/", async (req, res) => {
  const tentativas = await Tentativa.find();
  res.send(tentativas);
});

router.post("/save", async (req, res) => {
  const tentativa = new Tentativa({
    id: req.body.id,
    musica: req.body.musica,
    correct: req.body.correct,
    guess: req.body.guess
  });
  await tentativa.save();
  res.send(tentativa);
});

router.get("/tentativas/:id", async (req, res) => {
  try {
    const tentativas = await Tentativa.find({ id: req.params.id });
    res.send(tentativas);
  } catch {
    res.status(404);
    res.send({ error: "Esse usuário não existe!" });
  }
});

router.post('/likes/', function(req, res, next) {
  var db = require("../db.js");
  var likes = db.Mongoose.model('usercollection', db.userSchema, 'usercollection');
  var newlike = ({name: req.body.name});
  console.log(newlike);
  newlike.save(function (err){
    if (err) {
      res.status(500).json({ error: err.message });
      res.end();
      return;
    }
    res.json(newlike);
    res.end();
  });
});

module.exports = router;
