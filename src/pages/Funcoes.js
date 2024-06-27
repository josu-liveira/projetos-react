import React from 'react';
import CodeBlock from '../components/CodeBlock';

const sampleCode = 
`const sayHello = () => {
  console.log("Hello, world!");
};

sayHello();
`;

function Funcoes() {
  return (
    <div>
      <h2>Funções</h2>
      <p>Funções de envio de mensagens.</p>
      <CodeBlock language="javascript" value={sampleCode} />
    </div>
  );
}

export default Funcoes;
