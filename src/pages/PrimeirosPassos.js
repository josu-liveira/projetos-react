import React from 'react';
import CodeBlock from '../components/CodeBlock';

const importarPacotes = 
`const makeWASocket = require('@whiskeysockets/baileys').default;
const { DisconnectReason } = require('@whiskeysockets/baileys');
const pino = require('pino');`

const iniciarConexao = 
`async function connectToWhatsApp() {
    const client = makeWASocket({
        printQRInTerminal: true,
        logger: pino({ level: 'silent' })
    });`

const monitorConexao = 
`client.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'close') {
        const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut;
        console.log('Conexão fechada! Causa: ', lastDisconnect.error, ', reconectando... ', shouldReconnect);
        if (shouldReconnect) {
            connectToWhatsApp();
        }
    } else if (connection === 'open') {
        console.log('Conexão estabelecida');
    }
});`

const monitorMensagens = 
`client.ev.on('messages.upsert', async (msg) => {
    const mensagem = msg.messages[0];
    if (!mensagem.message) return;

    const jid = mensagem.key.remoteJid;
    const texto = mensagem.message.conversation || mensagem.message.extendedTextMessage?.text || '';

    if (texto === 'Oi') {
        await client.sendMessage(jid, { text: 'Olá' });
    }
});`

const logsCode = 
`	console.log('Inicializando...');  
}  
connectToWhatsApp();`

const codigoPronto =
`const makeWASocket = require('@whiskeysockets/baileys').default;
const { DisconnectReason } = require('@whiskeysockets/baileys');
const pino = require('pino');

async function connectToWhatsApp() {
    const client = makeWASocket({
        printQRInTerminal: true,
        logger: pino({ level: 'silent' })
    });

    client.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log('Conexão fechada! Causa: ', lastDisconnect.error, ', reconectando... ', shouldReconnect);
            if (shouldReconnect) {
                connectToWhatsApp();
            }
        } else if (connection === 'open') {
            console.log('Conexão estabelecida');
        }
    });

    client.ev.on('messages.upsert', async (msg) => {
        const mensagem = msg.messages[0];
        if (!mensagem.message) return;

        const jid = mensagem.key.remoteJid;
        const texto = mensagem.message.conversation || mensagem.message.extendedTextMessage?.text || '';

        if (texto === 'Oi') {
            await client.sendMessage(jid, { text: 'Olá Mundo!' });
        }
    });

    console.log('Inicializando...');
}

connectToWhatsApp();
`

function PrimeirosPassos() {
  return (
    <div>
      <h2>Iniciando com Baileys</h2>
      <h3>Importar pacotes</h3>
      <CodeBlock language="javascript" value={importarPacotes} />
      <p>Importação de funções básicas das bibliotecas, onde @whiskeysockets/baileys é responsável pelas funções de conexão com o sock, e pino captura todos os eventos de atualizações dentro desse sock em JSON. Este é o código de funcionamento mais básico que existe. Se você instalou tudo corretamente, ele funcionará. Com base nele você pode evoluir as condicionais da forma que quiser.</p>
      <h3>Abrindo a conexão</h3>
      <CodeBlock language="javascript" value={iniciarConexao} />
      <p>Aqui, criamos a função assíncrona principal connectToWhatsApp(), onde em seu escopo definimos uma variável client que armazena a função makeWASocket(), que como o próprio nome já diz, realiza a conexão com o WebSocket. Atente-se a printQRInTerminal, que deve ser definido como true. Isso será responsável por exibir o QR-Code de conexão em seu terminal. O tipo logger usa o pino capturar as atualizações de mensagens. Baileys já tem funções que realizam o parse do JSON recebido, não necessitando de bibliotecas externas.</p>
      <h3>Monitoramento da conexão</h3>
      <CodeBlock language="javascript" value={monitorConexao} />
      <p>Sabendo que Baileys usa a sintaxe EventEmitter para captura de eventos, o objeto connection.update é responsável por escutar os eventos de atualização da conexão. Foram adicionadas algumas condicionais para tratar o estado da conexão e exibir no terminal.</p>
      <h3>Monitorar mensagens</h3>
      <CodeBlock language="javascript" value={monitorMensagens} />
      <p>O evento messages.upsert escuta os eventos de novas mensagens recebidas. A variável jid obtém o ID do remetente da mensagem. A variável texto extrai o conteúdo da mensagem. A mensagem pode estar no campo conversation ou extendedTextMessage.text, dependendo do tipo da mensagem. A condição verifica se o texto contém um texto exatamente igual a "Oi", e se contiver, ela usa a função sendMessage para enviar uma mensagem com um "Olá" para o jid que enviou a mensagem.</p>
      <h3>Logs</h3>
      <p1>Por fim temos:</p1>
      <CodeBlock language="javascript" value={logsCode} />
      <p>console.log() exibe no terminal "Inicializando...", caso tudo acima ocorrer como esperado e connectToWhatsApp() executa a função assíncrona principal.</p>
      <h3>Código completo</h3>
      <CodeBlock language="javascript" value={codigoPronto} />
      <p>Exemplo de código que envia um "Olá Mundo!" quando receber um "Oi";</p>
    </div>
  );
}

export default PrimeirosPassos;
