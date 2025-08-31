"use client";

import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap';

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
// import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism';

interface GeneratedCodeProps {
  code: string;
}

const GeneratedCode: React.FC<GeneratedCodeProps> = ({code}) => {
  const [buttonText, setButtonText] = useState('Copiar Código');
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setButtonText('Copiado!');
    setTimeout(() => {
      setButtonText('Copiar Código');
    }, 2000);
  };
  
  return (
    // O Card agora serve apenas como um contêiner com cabeçalho
    <Card className="mt-4 shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center flex-wrap gap-3 py-3">
        <h3 className="fs-3 m-0 p-0">Código Gerado</h3>
        <Button variant="primary" onClick={handleCopy}>
          {buttonText}
        </Button>
      </Card.Header>
      {/* 3. O corpo do Card não precisa de padding, pois o SyntaxHighlighter já tem o seu */}
      <Card.Body style={{padding: 0, overflow: 'hidden', borderRadius: '0 0 var(--bs-card-border-radius) var(--bs-card-border-radius)'}}>
        <SyntaxHighlighter
          language="html"
          // style={vscDarkPlus}
          // Estilos customizados para encaixar perfeitamente e usar a fonte desejada
          customStyle={{
            margin: 0, // Remove margens padrão
            border: 'none', // Remove bordas
            boxShadow: 'none', // Remove sombras
            borderRadius: '0', // O radius é controlado pelo Card.Body
            fontSize: '14px',
            paddingBottom: '32px'
          }}
          // Garante que o texto quebre a linha quando for muito longo
          wrapLongLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </Card.Body>
    </Card>
  );
};

export default GeneratedCode;