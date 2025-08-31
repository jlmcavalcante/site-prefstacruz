# Blueprint: Visite Santa Cruz dos Milagres

## Visão Geral

Este documento serve como um guia de desenvolvimento para o site "Visite Santa Cruz dos Milagres", detalhando a estrutura, design e funcionalidades implementadas. O objetivo é criar um portal informativo, acessível e fácil de usar para cidadãos e turistas.

## Design e Estilo

- **Tema:** Profissional com Destaques em Azul
- **Paleta de Cores:**
  - Fundo Principal: `bg-white`
  - Texto Principal: `text-black`
  - Cabeçalho: Fundo `bg-blue-700`, Texto `text-white`
  - Rodapé: Fundo `bg-blue-700`, Texto `text-white`
  - Botões de Ação: `bg-blue-600` (hover: `bg-blue-700`)
- **Tipografia:**
  - Fonte: Inter (Google Fonts)
  - Título (h1): `text-4xl`, `font-bold`
  - Subtítulo (h2): `text-3xl`, `font-bold`
  - Subtítulo (h3): `text-2xl`, `font-semibold`
  - Parágrafo (p): `text-xl`
- **Layout:**
    - O conteúdo principal (`<main>`) tem um fundo branco (`bg-white`) e padding de `p-8` para garantir um espaçamento limpo e legível.

## Estrutura do Projeto

```
/
|-- public/
|-- src/
|   |-- app/
|   |   |-- globals.css
|   |   |-- layout.tsx     # Layout principal com Header e Footer
|   |   |-- page.tsx       # Página inicial
|   |   |-- santuario/
|   |   |   `-- page.tsx   # Página do Santuário
|   |   |-- como-chegar/
|   |   |   `-- page.tsx   # Página Como Chegar
|   |   `-- festejos/
|   |       `-- page.tsx   # Página Festejos
|   `-- components/
|       |-- Header.tsx     # Componente de Cabeçalho
|       |-- Footer.tsx     # Componente de Rodapé
|       `-- PhotoGallery.tsx # Componente de Galeria de Fotos
|-- package.json
`-- ... (outros arquivos de configuração)
```

## Funcionalidades

- **Cabeçalho:** Exibe o título "Visite Santa Cruz dos Milagres" em um fundo azul (`bg-blue-700`) com texto branco e sombra. Contém links de navegação para as páginas "Início" e "Santuário".
- **Rodapé:** Exibe o aviso de direitos autorais "© 2024 Visite Santa Cruz dos Milagres. Todos os direitos reservados." em um fundo azul (`bg-blue-700`) com texto branco.
- **Página Inicial:**
  - **Seção Hero:** Centralizada vertical e horizontalmente.
    - Título: "Bem-vindo a Santa Cruz dos Milagres" (`text-4xl`, `font-bold`).
    - Subtítulo: "A Cidade da Fé e da Peregrinação no Piauí" (`text-xl`).
  - **Botões de Ação:** Estilizados com fundo azul, texto branco, cantos arredondados, padding e sombra.
    - "Horários das Missas" (link para a página `/santuario`)
    - "Como Chegar" (link para a página `/como-chegar`)
    - "Principais Festejos" (link para a página `/festejos`)
- **Página Santuário:**
  - Layout centralizado com `max-w-4xl` e padding.
  - Exibe o título "Santuário de Santa Cruz dos Milagres".
  - **Seção "Horários de Missas e Celebrações":** Lista os horários das missas.
  - **Seção "Nossa História":** Apresenta um texto sobre a história do santuário.
  - **Seção "Galeria de Fotos":** Exibe uma galeria de imagens usando o componente `PhotoGallery`.
- **Página Como Chegar:**
  - Layout centralizado com `max-w-4xl` e padding.
  - Exibe o título "Como Chegar em Santa Cruz dos Milagres".
  - Inclui um subtítulo "Localização do Santuário".
  - Incorpora um mapa interativo do Google Maps com cantos arredondados e sombra.
  - **Seção "Principais Rotas":**
    - Subtítulo "Vindo de Teresina" com um parágrafo de exemplo.
    - Subtítulo "Vindo de Floriano" com um parágrafo de exemplo.
- **Página Festejos:**
  - Layout centralizado com `max-w-4xl` e padding.
  - Exibe o título "Calendário Religioso e Principais Festejos".
  - **Lista de Eventos:**
    - Exibe uma lista de eventos em cards com borda, sombra e padding.
    - Cada card contém o nome do festejo (h3), a data (p) e uma breve descrição (p).
    - Eventos incluídos: 'Festa da Invenção da Santa Cruz (Maio)', 'Festa da Exaltação da Santa Cruz (Setembro)' e 'Encontro dos Santos (Novembro)'.
- **Componente PhotoGallery:**
  - Exibe uma galeria de imagens em um layout de grade (grid).
  - Aceita uma propriedade `imageUrls` (array de strings) para popular a galeria.
