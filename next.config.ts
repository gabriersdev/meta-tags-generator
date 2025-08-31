import type { NextConfig } from "next";

const repoName = 'meta-tags-generator';

const nextConfig: NextConfig = {
  // // Ativa a exportação estática
  output: 'export',
  
  // Define o caminho base para o projeto no GitHub Pages
  basePath: `/${repoName}`,
  
  // Opcional: Desativa o trailingSlash se você prefere URLs sem a barra no final
  trailingSlash: true,
  
  // Opcional: Garante que o componente <Image> funcione na exportação estática
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
