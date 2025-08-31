"use client";

import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import MetaForm from '@/components/meta-form';
import MetaPreview from '@/components/meta-preview';
import GeneratedCode from '@/components/generated-code';

const MetaGeneratorTool: React.FC = () => {
  const [metaData, setMetaData] = useState({
    title: 'Eskimozin | Eskimozin Craft - Todos os Links',
    description: 'Descubra todos os links sobre Eskimozin ou Eskimozin Craft, o popular YouTuber e streamer! Explore links para seus últimos vídeos, transmissões e atualizações de conteúdo, tudo em um só lugar.',
    keywords: 'Eskimozin, Eskimozin Craft, YouTuber, streamer, links, vídeos, transmissões, conteúdo, Twitch, Youtube',
    imageUrl: 'https://eskimozin.github.io/links/img/favicon.png',
    siteUrl: 'https://eskimozin.github.io/links/',
    author: '@gabriersdev - Gabriers - Gabriel Ribeiro',
  });
  
  const generateMetaTags = () => {
    const {title, description, keywords, imageUrl, siteUrl, author} = metaData;
    
    // Simplesmente retorna a string formatada com os dados do estado
    return `
<title>${title}</title>
<meta name="title" content="${title}" />
<meta name="description" content="${description}" />
<meta name="keywords" content="${keywords}" />
<meta name="author" content="${author}" />
<meta name="robots" content="index, follow" />
    
<meta property="og:type" content="website" />
<meta property="og:url" content="${siteUrl}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:image" content="${imageUrl}" />
<meta property="og:image:secure_url" content="${imageUrl}" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="400" />
<meta property="og:image:height" content="400" />
    
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="${siteUrl}" />
<meta property="twitter:title" content="${title}" />
<meta property="twitter:description" content="${description}" />
<meta property="twitter:image" content="${imageUrl}" />
`;
  };
  
  return (
    <Container fluid className="">
      <Row>
        <Col md={12} className="bg-primary-subtle mb-5 px-4 py-3 rounded-md text-center border border-primary-subtle">
          <h1 className="fs-3 text-primary-emphasis">Meta Tags</h1>
          <p className="text-mutedm m-0 p-0">Preview, Edit, and Generate!</p>
        </Col>
      </Row>
      <Row>
        <Col lg={5} className="mb-4 mb-lg-0">
          <MetaForm data={metaData} setData={setMetaData}/>
        </Col>
        <Col lg={7}>
          <MetaPreview {...metaData} />
          <GeneratedCode code={generateMetaTags()}/>
        </Col>
      </Row>
    </Container>
  );
};

export default MetaGeneratorTool;