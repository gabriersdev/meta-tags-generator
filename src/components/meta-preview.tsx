"use client";

import React from 'react';
import {Card} from 'react-bootstrap';

// Define a interface para as propriedades (props)
interface MetaPreviewProps {
  title: string;
  description: string;
  imageUrl: string;
  siteUrl: string;
}

const MetaPreview: React.FC<MetaPreviewProps> = ({title, description, imageUrl, siteUrl}) => {
  // Extrai o domínio da URL para exibição
  const domain = siteUrl ? new URL(siteUrl).hostname : 'exemplo.com';
  
  return (
    <>
      <h2 className="mb-4 text-primary-emphasis fs-3">Pré-visualização</h2>
      <Card className="shadow-sm">
        {imageUrl && <Card.Img variant="top" src={imageUrl} className={"w-[300px] h-[300px] object-cover"} alt="Pré-visualização da imagem"/>}
        <Card.Body>
          <Card.Text className="text-muted small text-uppercase">{domain}</Card.Text>
          <Card.Title>{title || "Seu Título Aparecerá Aqui"}</Card.Title>
          <Card.Text>{description || "Sua descrição aparecerá aqui para dar um contexto sobre o link."}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default MetaPreview;