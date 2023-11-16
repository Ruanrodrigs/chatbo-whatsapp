const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/whatsappdb', { useNewUrlParser: true, useUnifiedTopology: true });

const jornadaSchema = new mongoose.Schema({
  numero: String,
  mensagem: String
});

const Jornada = mongoose.model('Jornada', jornadaSchema);

module.exports = { Jornada };
