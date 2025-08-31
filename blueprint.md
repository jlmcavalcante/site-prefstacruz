# Blueprint: Prefeitura de Santa Cruz dos Milagres

## Visão Geral

Este documento serve como um guia de desenvolvimento para o site da Prefeitura de Santa Cruz dos Milagres, detalhando a estrutura, design e funcionalidades implementadas. O objetivo é criar um portal informativo, acessível e fácil de usar para os cidadãos.

## Design e Estilo

- **Paleta de Cores:**
  - Azul Principal: `#005b9f` (usado no cabeçalho)
  - Azul Botões: `bg-blue-600` (hover: `bg-blue-700`)
  - Fundo: `#ffffff`
  - Rodapé: `#f8f9fa`
  - Texto Subtítulo: `text-slate-600`
- **Tipografia:**
  - Fonte: Inter (Google Fonts)
  - Título (h1): `text-4xl`, `font-bold`
  - Subtítulo (p): `text-xl`

## Estrutura do Projeto

```
/
|-- public/
|-- src/
|   |-- app/
|   |   |-- globals.css
|   |   |-- layout.tsx     # Layout principal com Header e Footer
|   |   |-- page.tsx       # Página inicial
|   |   `-- santuario/
|   |       `-- page.tsx   # Página do Santuário
|   `-- components/
|       |-- Header.tsx     # Componente de Cabeçalho
|       |-- Footer.tsx     # Componente de Rodapé
|       `-- PhotoGallery.tsx # Componente de Galeria de Fotos
|-- package.json
`-- ... (outros arquivos de configuração)
```

## Funcionalidades

- **Cabeçalho:** Exibe o título "Prefeitura de Santa Cruz dos Milagres" e links de navegação para as páginas "Início" e "Santuário".
- **Rodapé:** Exibe o aviso de direitos autorais "© 2024 Prefeitura de Santa Cruz dos Milagres. Todos os direitos reservados." em todas as páginas.
- **Página Inicial:**
  - **Seção Hero:** Centralizada vertical e horizontalmente.
    - Título: "Bem-vindo a Santa Cruz dos Milagres" (`text-4xl`, `font-bold`).
    - Subtítulo: "A Cidade da Fé e da Peregrinação no Piauí" (`text-xl`, `text-slate-600`).
  - **Botões de Ação:** Estilizados com fundo azul, texto branco, cantos arredondados, padding e sombra.
    - "Horários das Missas"
    - "Como Chegar"
    - "Principais Festejos"
- **Página Santuário:**
  - Exibe o título "Santuário de Santa Cruz dos Milagres".
  - **Seção "Horários de Missas e Celebrações":** Lista os horários das missas.
  - **Seção "Nossa História":** Apresenta um texto sobre a história do santuário.
- **Componente PhotoGallery:**
  - Exibe uma galeria de imagens em um layout de grade (grid).
  - Aceita uma propriedade `imageUrls` (array de strings) para popular a galeria.
