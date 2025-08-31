import React from 'react';
import MetaGeneratorTool from '@/components/meta-generator-tool';
import {Container} from "react-bootstrap";

export default function Home() {
  return (
    <div className="font-sans min-h-screen my-8">
      <Container>
        <div className={"mx-auto"}>
          <div className={"text-body-secondary"}>
            <MetaGeneratorTool/>
          </div>
        </div>
      </Container>
    </div>
  );
}
