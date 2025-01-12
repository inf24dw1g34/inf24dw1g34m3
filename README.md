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
Passo 1: Clone o Repositório
Clone o repositório para sua máquina local:

bash
Copiar código:
git clone https://github.com/yourusername/inf24dw1g34m3-main.git
cd inf24dw1g34m3-main

Passo 2: Instalar Dependências da API
Navegue até o diretório api e instale as dependências do lado da API:

bash
Copiar código
cd api
npm install

Passo 3: Instalar Dependências do Painel de Administração
Navegue até o diretório reactadmin e instale as dependências do painel de administração:

bash
Copiar código
cd ../reactadmin
npm install

## Uso
Iniciar o Servidor da API
Para iniciar o servidor da API, navegue até o diretório api e execute:

bash
Copiar código
cd api
npm start

Isso irá iniciar o servidor da API no endereço padrão, geralmente http://localhost:3000.

Iniciar o Painel de Administração
Para iniciar o painel de administração em React, navegue até o diretório reactadmin e execute:

bash
Copiar código
cd ../reactadmin
npm start

O painel de administração estará disponível em http://localhost:3001 (ou outra porta, dependendo da configuração).

Utilizar o Docker Compose
Caso prefira rodar toda a stack da aplicação (API e painel de administração) em contêineres Docker, utilize o Docker Compose. Para isso, execute o seguinte comando na raiz do projeto:

bash
Copiar código
docker-compose up

Isso irá construir e iniciar os contêineres para a API e o painel de administração simultaneamente. A aplicação estará disponível nas portas configuradas, geralmente http://localhost:3000 para a API e http://localhost:3001 para o painel de administração.

