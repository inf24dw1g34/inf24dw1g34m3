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


## Instalação
> Passo 1: criar o clone do projeto do github para o computador:
```
git clone https://github.com/inf24dw1g34/inf24dw1g34m3-main.git (...)
```

> Passo 2: dentro da pasta do projeto, abrir terminal / prompt / bash e fazer o docker compose up:
```
docker compose up -d --build (...)
```


### Organização do Repositório
api/: Contém a implementação da API da aplicação.

  src/: Diretório com os ficheiros de código fonte da API.

  .dockerignore: Lista de ficheiros e diretórios a serem ignorados pelo Docker.

  .editorconfig: Ficheiro de configuração de editores de texto para manter a consistência de codificação.

  .eslintignore: Lista de ficheiros e diretórios a serem ignorados pelo ESLint.

  .eslintrc.js: Configuração do ESLint para linting do código.

  .gitignore: Lista de ficheiros e diretórios a serem ignorados pelo Git.

  .mocharc.json: Configuração do Mocha para testes.

  .prettierignore: Lista de ficheiros e diretórios a serem ignorados pelo Prettier.

  .prettierrc: Configuração do Prettier para formatação de código.

  .yo-rc.json: Configuração do Yeoman.

  DEVELOPING.md: Guia de desenvolvimento e contributo para a API.

  Dockerfile: Ficheiro de configuração para construção da imagem Docker da API.

  openapi.json: Documentação da API no formato OpenAPI.

  package-lock.json: Ficheiro que armazena a árvore exata de dependências instaladas.

  package.json: Ficheiro que contém metadados sobre o projeto e as dependências da API.

  README.md: Documentação específica da API.

  tsconfig.json: Configuração do TypeScript para o projeto.

  tsconfig.tsbuildinfo: Ficheiro de cache do TypeScript.

database/: Contém os ficheiros relacionados à base de dados.

  data.sql: Ficheiro SQL com os scripts para inicialização da base de dados.

  Dockerfile: Ficheiro de configuração para construção da imagem Docker da base de dados.

reactadmin/: Contém a implementação do painel de administração em React.

  public/: Diretório com os ficheiros públicos da aplicação React.

  src/: Diretório com os ficheiros de código fonte da aplicação React.

  .gitignore: Lista de ficheiros e diretórios a serem ignorados pelo Git.

  Dockerfile: Ficheiro de configuração para construção da imagem Docker da aplicação React.

  package-lock.json: Ficheiro que armazena a árvore exata de dependências instaladas.

  package.json: Ficheiro que contém metadados sobre o projeto e as dependências da aplicação React.

  README.md: Documentação específica do painel de administração.

lb4-library.postman_collection.json: Coleção de testes e exemplos de requisições para a API, criada utilizando o Postman.

compose.yaml: Ficheiro de configuração para orquestração de containers Docker utilizando Docker Compose.

### Docker Links

https://hub.docker.com/r/jbelece/database_m3

https://hub.docker.com/r/jbelece/api
