# Blueprint: Prefeitura de Santa Cruz dos Milagres

## Visão Geral

Este documento serve como um guia de desenvolvimento para o site da Prefeitura de Santa Cruz dos Milagres, detalhando a estrutura, design e funcionalidades implementadas. O objetivo é criar um portal informativo, acessível e fácil de usar para os cidadãos.

## Design e Estilo

- **Paleta de Cores:**
  - Azul Principal: `#005b9f` (usado no cabeçalho)
  - Fundo: `#ffffff`
  - Rodapé: `#f8f9fa`
- **Tipografia:**
  - Fonte: Inter (Google Fonts)

## Estrutura do Projeto

```
/
|-- public/
|-- src/
|   |-- app/
|   |   |-- globals.css
|   |   |-- layout.tsx     # Layout principal com Header e Footer
|   |   `-- page.tsx       # Página inicial
|   `-- components/
|       |-- Header.tsx     # Componente de Cabeçalho
|       `-- Footer.tsx     # Componente de Rodapé
|-- package.json
`-- ... (outros arquivos de configuração)
```

## Funcionalidades

- **Cabeçalho:** Exibe o título "Prefeitura de Santa Cruz dos Milagres" em todas as páginas.
- **Rodapé:** Exibe o aviso de direitos autorais "© 2024 Prefeitura de Santa Cruz dos Milagres. Todos os direitos reservados." em todas as páginas.
- **Página Inicial:**
  - **Seção Hero:** Apresenta o título "Bem-vindo a Santa Cruz dos Milagres" e o subtítulo "A Cidade da Fé e da Peregrinação no Piauí".
