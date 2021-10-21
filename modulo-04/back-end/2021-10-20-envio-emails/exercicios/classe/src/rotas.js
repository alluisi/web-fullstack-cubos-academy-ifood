const express = require('express');
const emails = require('./controladores/emails');

const rotas = express();

rotas.post('/cadastrar', emails.cadastrarEmail);
rotas.post('/enviar', emails.enviarEmails);

module.exports = rotas;