const express = require('express');
const router = express.Router();
const { client } = require('./whatsapp');
const { Jornada } = require('./db');

router.post('/webhook', async (req, res) => {
  try {
    const { numero, mensagem } = req.body;

    // Envia mensagem via WhatsApp
    await client.sendMessage(`${numero}@c.us`, mensagem);

    // Registra no banco de dados
    await Jornada.create({ numero, mensagem });

    res.status(200).json({ success: true, message: 'Mensagem enviada e registrada com sucesso.' });
  } catch (error) {
    console.error('Erro no webhook:', error);
    res.status(500).json({ success: false, error: 'Erro interno no servidor.' });
  }
});

module.exports = router;
