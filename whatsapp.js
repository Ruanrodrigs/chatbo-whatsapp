const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client();

let  nomeCliente ='';

client.on('qr', (qr) => {
    console.log('QR Code gerado:', qr);
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Cliente está pronto!');
});
// Função para enviar mensagens
function sendMessage(to, message) {
    // Implemente a lógica para enviar mensagens, por exemplo, usando a biblioteca do WhatsApp
    console.log(`Mensagem enviada para ${to}: ${message}`);
    client.sendMessage(to, message);
  }
client.on('message', async (message) => {
    console.log('Mensagem recebida:', message.body);

    try {
        if (message.body.toLowerCase() === 'boa tarde') {
            console.log('Resposta: Olá');
            sendMessage(message.from, `Olá! Eu sou Haland, assistente virtual do Manchester City Football Club. Você está no canal do sócio torcedor. Lembrando que seus dados serão utilizados de acordo com a lei de proteção de dados. Ao continuar, você estará autorizando o Manchester City a entrar em contato para oferecer ofertas e informações sobre nossos produtos. Para começar, me conte como posso te chamar. Qual é o seu nome?`);
        } else if (message.body.toLowerCase() === 'ruan') {
            nomeCliente = 'ruan' ;
            console.log(`Resposta: Ótimo, ${nomeCliente}! Agora, para personalizar ainda mais nossa interação, poderia me confirmar seu CPF?`);
            sendMessage(message.from, `Ótimo, ${nomeCliente}! Agora, para personalizar ainda mais nossa interação, poderia me confirmar seu CPF?`);
        } else if (message.body.match(/^\d{11}$/)) { // Aceita qualquer sequência de 11 dígitos como CPF
            console.log(`Resposta: Agradecemos muito, ${nomeCliente}! Em breve, nossa equipe entrará em contato para finalizar seu cadastro como sócio torcedor do Manchester City. Fique de olho nas nossas ofertas!`);
            sendMessage(message.from, `Agradecemos muito, ${nomeCliente}! Em breve, nossa equipe entrará em contato para finalizar seu cadastro como sócio torcedor do Manchester City. Fique de olho nas nossas ofertas!`);
        }
    } catch (error) {
        console.error('Erro ao processar mensagem:', error);
        sendMessage(message.from, 'Ops, algo deu errado! Por favor, tente novamente ou entre em contato conosco para obter assistência.');
    }
});

client.initialize();

module.exports = { client };
