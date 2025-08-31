"use client";

import React from 'react';
import {Form, Card, FloatingLabel} from 'react-bootstrap';

// Define a interface para as propriedades (props) do formulário
interface MetaData {
  title: string;
  description: string;
  keywords: string;
  imageUrl: string;
  siteUrl: string;
  author: string;
}

interface MetaFormProps {
  data: MetaData;
  setData: (data: MetaData) => void;
}

const MetaForm: React.FC<MetaFormProps> = ({data, setData}) => {
  // Função para atualizar o estado de forma genérica
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setData({...data, [name]: value});
  };
  
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title as="h2" className="mb-4 fs-3 text-primary-emphasis">
          Informações do website
        </Card.Title>
        <Form>
          <Form.Group className="mb-3" controlId="formTitle">
            <FloatingLabel label="Título da Página">
              <Form.Control
                type="text"
                name="title"
                placeholder="Título da Página"
                value={data.title}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formDescription">
            <FloatingLabel label="Descrição">
              <Form.Control
                as="textarea"
                name="description"
                placeholder="Descrição"
                style={{height: '125px'}}
                value={data.description}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formKeywords">
            <FloatingLabel label="Palavras-chave (separadas por vírgula)">
              <Form.Control
                type="text"
                name="keywords"
                placeholder="Palavras-chave"
                value={data.keywords}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formImageUrl">
            <FloatingLabel label="URL da Imagem (preview)">
              <Form.Control
                type="url"
                name="imageUrl"
                placeholder="https://exemplo.com/imagem.png"
                value={data.imageUrl}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formSiteUrl">
            <FloatingLabel label="URL do Site">
              <Form.Control
                type="url"
                name="siteUrl"
                placeholder="https://exemplo.com"
                value={data.siteUrl}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formAuthor">
            <FloatingLabel label="Autor">
              <Form.Control
                type="text"
                name="author"
                placeholder="Seu nome ou @usuario"
                value={data.author}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default MetaForm;