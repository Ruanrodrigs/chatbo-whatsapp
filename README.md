# chatbot-whatsapp
Bot do WhatsApp para o Manchester City Football Club

 
Visão Geral
Este projeto é um bot do WhatsApp projetado para o engajamento de membros do Manchester City Football Club. O bot é construído usando Node.js, Express e a API do WhatsApp Web por meio da biblioteca whatsapp-web.js. O banco de dados MongoDB é utilizado para armazenar e recuperar interações do usuário.

Estrutura de Código

whatsapp.js: Configuração e lógica principal do cliente WhatsApp.
db.js: Configuração e modelo do MongoDB para registrar jornadas.
server.js: Configuração do servidor Express e inicialização.
apiRoutes.js: Rotas da API, incluindo o endpoint /api/webhook.

Recursos

Integração com o WhatsApp: O bot se integra ao WhatsApp usando a biblioteca whatsapp-web.js. Ele pode enviar e receber mensagens, permitindo interações personalizadas com os membros do clube.
Armazenamento em Banco de Dados: As interações do usuário são armazenadas em um banco de dados MongoDB usando o Mongoose ODM. Isso permite que o clube acompanhe e analise o envolvimento do usuário ao longo do tempo.

Primeiros Passos

1. Instalação:
⦁	Execute 'npm install' para instalar as dependências.
2. Configuração:
⦁	Configure sua conexão MongoDB em 'app.js'.
⦁	Ajuste as configurações do bot do WhatsApp, como número de telefone e manipulação de mensagens, em whatsapp.js.
4. Executar a Aplicação:
⦁	Durante a execução, um código QR será gerado no console.
⦁	Execute 'npm start' para iniciar o servidor.
5. Autenticação do WhatsApp:
⦁	Escaneie o código QR gerado pelo bot usando seu WhatsApp para autenticação.

Pontos de Extensão

⦁	POST /api/webhook
⦁	Descrição: Ponto de extremidade para receber mensagens do site do clube.

Manipulação de Mensagens

⦁	O bot responde a mensagens específicas do usuário, como saudações e informações do usuário.
⦁	Exemplos de interações incluem solicitar o nome do usuário e confirmar seu CPF.

Notas Adicionais

⦁	O projeto inclui um script simples para lidar com a geração do código QR do WhatsApp e autenticação do usuário.
⦁	Cliques em botões são simulados com base em mensagens específicas.
