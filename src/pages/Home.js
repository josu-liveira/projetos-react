import React from 'react';

function Home() {
  return (
    <div>
      <h2>Introdução</h2>
      <p>Sempre fui fascinado por chatbots. A infinidade de possibilidades e integrações práticas no meio organizacional se beneficiam muito quando se trata de automações. Ideias mais complexas e avançadas exigem a mesma dose de conhecimento em programação, por isso, este projeto está marcando muito minha evolução em desenvolvimento. Conforme estou aprendendo a programar, desenvolvo parte por parte deste projeto. Sem dúvidas, este é meu repositório preferido 🙂.</p>
      <h3>A escolha da biblioteca/API</h3>
      <p>Este projeto foi desenvolvido com base na API WhiskeySockets/Baileys, escolhida por fornecer uma integração direta com o servidor do WhatsApp através de uma conexão WebSocket. Diferentemente de outras bibliotecas que realizam requisições HTTP por meio de um WebDriver, como Selenium ou Chromium para funcionar, essa abordagem torna a API cerca de 60% mais eficiente.</p>
      <h3>Vantagens do WebSocket sobre HTTP</h3>
      <p>Utilizar WebSocket para comunicação em tempo real é mais eficiente em termos de latência e uso de recursos. WebSockets mantêm uma conexão persistente entre o cliente e o servidor, permitindo comunicação bidirecional sem a sobrecarga de abrir novas conexões HTTP repetidamente.</p>
      <h3>Modularidade e Implementação</h3>
      <p>A modularidade da API é um ponto importante, pois permite sua implementação em qualquer sistema operacional ou ambiente de servidor. Em meus testes, transformei um smartphone Galaxy A01 em um servidor Linux improvisado, onde implementei um acesso SSH e consegui rodar o código sem problemas, tudo graças a essa incrível API.</p>
      <h3>Infinitas Possibilidades</h3>
      <p>Com essa API, praticamente tudo é possível... Desde um simples chatbot até uma integração em tempo real com uma API REST. A capacidade de envio e recebimento de mensagens, arquivos, e até mesmo interações com grupos e status, abre um leque de funcionalidades que podem ser exploradas</p>
      <h3>Limites de Conteúdo Gratuito</h3>
      <p>Atualmente, existe pouco conteúdo em pt-BR relacionado a essa API que seja gratuito (principalmente no YouTube). Pensando nisso, tive a iniciativa de criar este repositório, onde estou estudando a documentação da API WhiskeySockets/Baileys e re-documentando de uma forma que seu uso seja simples e fácil, possibilitando que uma pessoa que esteja iniciando em programação consiga utilizar essa API tão poderosa.</p>
    </div>
  );
}

export default Home;
