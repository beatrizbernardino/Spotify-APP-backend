const mongoose = require("mongoose");

const schema = mongoose.Schema({
  id: String,
  musica: String,
  correct: String,
  guess: String
});

module.exports = mongoose.model("try", schema, "try");
