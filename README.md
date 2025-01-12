# lb4-library

## Objetivo do Projeto

O `lb4-library` é um serviço de biblioteca desenvolvido para a cadeira de Desenvolvimento Web I na Universidade da Maia. O sistema foi desenvolvido com o framework **LoopBack 4** para fornecer uma API RESTful simples que gere informações sobre autores e livros de uma biblioteca.
O projeto está estruturado em três partes principais: a API, a base de dados e o painel de administração em React.
Na nossa aplicação é possível Adicionar livros, autores e géneros, assim como registar empréstimos dos livros, para além disso podemos atualizar as informações de todos estes recursos, criar novos registos e apagar caso necessário. Criamos filtros de pesquisa e relações entre os autores e livros.

Projeto feito por:

-António Oliveira a044409@umaia.pt

-João Bernardo a045900@umaia.pt

## Estrutura do Projeto

inf24dw1g34m3-main/
│
├── api/
│   ├── src/
│   ├── .dockerignore
│   ├── .editorconfig
│   ├── .eslintignore
│   ├── .eslintrc.js
│   ├── .gitignore
│   ├── .mocharc.json
│   ├── .prettierignore
│   ├── .prettierrc
│   ├── .yo-rc.json
│   ├── DEVELOPING.md
│   ├── Dockerfile
│   ├── openapi.json
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── tsconfig.json
│   └── tsconfig.tsbuildinfo
│
├── database/
|   ├── data.sql
│   └── Dockerfile
│
├── reactadmin/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── Dockerfile
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
│
└── compose.yaml
inf24dw1g34m3-main/
│
├── api/
│   ├── src/
│   ├── .dockerignore
│   ├── .editorconfig
│   ├── .eslintignore
│   ├── .eslintrc.js
│   ├── .gitignore
│   ├── .mocharc.json
│   ├── .prettierignore
│   ├── .prettierrc
│   ├── .yo-rc.json
│   ├── DEVELOPING.md
│   ├── Dockerfile
│   ├── openapi.json
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── tsconfig.json
│   └── tsconfig.tsbuildinfo
│
├── database/
│   ├── data.sql
│   └── Dockerfile
│
├── reactadmin/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── Dockerfile
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
│
└── compose.yaml





## Tecnologias Usadas

- **Node.js**: Ambiente de execução JavaScript.
- **LoopBack 4**: Framework para criação de APIs RESTful.
- **Express.js**: Framework web utilizado no LoopBack 4.
- **Swagger/OpenAPI 3.0**: Especificação para a documentação e teste da API.


## Funcionalidades

- **Contar Autores**: Endpoint para obter a contagem total de autores cadastrados no sistema.
- **Cadastrar Autor**: Permite adicionar um novo autor à biblioteca.
- **Listar Autores**: Retorna todos os autores registrados.
- **Atualizar Autor**: Permite atualizar as informações de um autor.
- **Excluir Autor**: Remove um autor da base de dados.

## Estrutura do Projeto

A estrutura de diretórios do projeto segue as melhores práticas do LoopBack 4 e está organizada da seguinte forma:

