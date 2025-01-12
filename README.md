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
Passo 1:, criar o clone do projeto do github para o computador:
```
git clone https://github.com/inf24dw1g34/inf24dw1g34m3-main.git (...)
```

> Passo 2: Instalar Dependências da API
Navegue até o diretório api e instale as dependências do lado da API:
```
cd api
npm install (...)
```

> Passo 3: Instalar Dependências do Painel de Administração
Navegue até o diretório reactadmin e instale as dependências do painel de administração:
```
cd ../reactadmin
npm install
```

## Uso
Iniciar o Servidor da API
Para iniciar o servidor da API, navegue até o diretório api e execute:

```
cd api
npm start
```


Iniciar o Painel de Administração
Para iniciar o painel de administração em React, navegue até o diretório reactadmin e execute:

```
cd ../reactadmin
npm start
```

Utilizar o Docker Compose:
```
docker-compose up
```


