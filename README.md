# BEXS Full Stack Exam
Esse projeto foi feito como parte do processo seletivo para o banco Bexs

## Get started

Para executar esse projeto você deve

### Installing

* Baixar este repositório [aqui](https://github.com/Luborges/bexs-full-stack-exam/archive/master.zip)

* Executar ```npm install``` para instalar os pacotes na pasta `frontend` e `backend`.
* Executar ```npm start``` na pasta `frontend`.
* Executar ```npm run dev``` na pasta `backend`.

### Running migrations

* Pode ser necessário executar o comando ```npm install -g knex```.
* Executar ```npm run knex:migrate``` na pasta do backend para executar as migrations e criar as tabelas do banco de dados.

### Environment variables

Você deve criar um arquivo .env na pasta `backend` com as seguintes variaveis:

* SESSION_KEY - Hash com um valor aleatório para a sessão do express.
* PORT - Porta onde a aplicação deve rodar (Testado na porta: 3333)
* SECRET - Hash com valor aleatório para a geração de token.
* NODE_ENV - `development` para executar a aplicação `test` para executar os testes.

### Test execution

* Backend: Executar o comando ```npm run test``` na pasta `backend` com a variavel de ambiente NODE_ENV=test.
* Frontend: Executar ```npm run dev``` na pasta `backend` e executar o comando ```npm test``` na pasta `frontend`.


### API

#### Create user
* URL:
/user

* METHOD:
`POST`

* BODY:
`email=[string]`
`password=[string]`

#### Login
* URL:
/login

* METHOD:
`POST`

* BODY:
`email=[string]`
`password=[string]`

#### Question

#### Get all questions
* URL:
/questions

* METHOD:
`GET`

* HEADERS:
`Authorization=[Bearer token]`

#### Count answers from question

* URL:
/questions-count

* METHOD:
`GET`

* PARAMS:
`id=[integer]`

* HEADERS:
`Authorization=[Bearer token]`

#### Create question

* URL:
/questions

* METHOD:
`POST`

* BODY:
`text=[string]`

* HEADERS:
`Authorization=[Bearer token]`

#### Get all answers from question

* URL:
/answers

* METHOD:
`GET`

* PARAMS:
`id=[integer]`

* HEADERS:
`Authorization=[Bearer token]`

#### Create answer for question

* URL:
/answers

* METHOD:
`POST`

* BODY:
`id=[integer]`
`text=[string]`

* HEADERS:
`Authorization=[Bearer token]`

## Built With

* [ReactJS](https://reactjs.org/) - A biblioteca JavaScript utilizada para criar os componentes.
* [NodeJS](https://nodejs.org/) - A biblioteca JavaScript utilizada para criar o backend.
* [Sqlite](https://www.sqlite.org/index.html/) - O banco de dados utilizado para persistir os dados.
* [NPM](https://www.npmjs.com/) - Gerenciador de pacotes.

## Authors

* **Lucas Borges** - [Luborges](https://github.com/Luborges)