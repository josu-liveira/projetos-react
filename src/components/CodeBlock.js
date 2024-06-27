// src/components/CodeBlock.js
import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import './CodeBlock.css';

const CodeBlock = ({ language, value }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    hljs.highlightBlock(codeRef.current);
  }, [value]);

  return (
    <pre>
      <code ref={codeRef} className={language}>
        {value}
      </code>
    </pre>
  );
};

export default CodeBlock;
