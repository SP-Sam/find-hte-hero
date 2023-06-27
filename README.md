# Find the Hero

O Find the Hero é uma aplicação Front-end que te mostra todos os personagens da Marvel Comics e suas HQs.
## [Link do projeto](https://findthehero.vercel.app)

## ⚙️ Funcionalidades
* Listar todos os personagens
  <img src="public/assets/home.png" alt="Home page">
* Ver os detalhes de um personagem e suas HQs
  <img src="public/assets/details.png" alt="Details page">
* Pesquisar personagens pelo nome
  <img src="public/assets/search.png" alt="Search page">

## 🛠️ Tecnologias utilizadas
* [TypeScript](https://www.typescriptlang.org/) (Superset de JavaScript)
* [React](https://react.dev) (Framework de JavaScript)
* [Next.js](https://nextjs.org/) (Framework SSR para React)
* [styled-components](https://styled-components.com/) (CSS-in-JS)
* [Axios](https://axios-http.com/ptbr/) (Requisições à API)
* [react-hook-form](https://react-hook-form.com/) (Manipulação de formulários)
* [Lucide](https://lucide.dev/) (Ícones)
* [Ant Design](https://ant.design/) (Componente de paginação)

## 🌱 Pré-requisitos
* Instale a última versão do [Node](https://nodejs.org/en/);
* Para garantir o funcionamento de todas as funcionalidades da aplicação é recomendado o uso do [Google Chrome](https://www.google.com/intl/pt-BR/chrome/);
* Para clonar o repositório instale e configure o [git](https://git-scm.com/).

## ▶️ Executando o projeto localmente
#### 1º Abra um terminal e faça o clone do projeto em sua máquina
```bash
git clone https://github.com/SP-Sam/find-the-hero.git

# Se você tem uma chave SSH configurada
git clone git@github.com:SP-Sam/find-the-hero.git
```
#### 2º Navegue até o diretório do projeto clonado e o abra em um editor de código
```bash
cd find-the-hero && code .
```
#### 3º Renomeie o arquivo `.env.example` para `.env`
<img src="public/assets/env-file.png" alt=".env">

#### 4º Cole os seguintes valores nas variáveis
```bash
NEXT_PUBLIC_MARVEL_API_BASE_URL="https://gateway.marvel.com:443/v1/public"
NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY="bf62a4b5f9a73e73bfb14891e713d3ae"
NEXT_PUBLIC_MARVEL_API_HASH="bfb86c864e00be87b26d14429d9aacb5"
NEXT_PUBLIC_MARVEL_API_TIMESTAMPS="1"
```

#### 5º Instale as dependências do projeto
```bash
# npm
npm install

# yarn
yarn
```
#### 6º Inicie o processo de build do projeto e aguarde até estar finalizado
```bash
# npm
npm run build

# yarn
yarn build
```
#### Você verá algo parecido com isso no terminal
<img src="public/assets/build.png" alt="build">

#### 7º Inicie o projeto
```bash
# npm
npm start

# yarn
yarn start
```
#### Você verá algo parecido com isso no terminal
<img src="public/assets/npm-start.png" alt="npm start">

#### É só dar um `Ctrl+Click` no link ou colar `http://localhost:3000` no seu navegador e começar a usar!

## 🧪 Executando os testes do projeto
O Find the Hero possui testes unitários. Para executa-los abra um terminal na raiz do projeto e rode o seguinte comando:
```bash
# npm
npm test

# yarn
yarn test
```
#### Você verá algo parecido com isso no terminal
<img src="public/assets/tests.png" alt="">

#### Os testes serão executados no `watch mode` do Jest. Para sair do `watch mode` basta apertar a tecla `q` ou `Ctrl+C`.

## 👨‍💻 Desenvolvedor
<a href="https://www.linkedin.com/in/spsam/">
  <img src="https://avatars.githubusercontent.com/u/72403810?v=4" width="100px" alt="Imagem de Samuel Pereira">
  <br>
  <b>Samuel Pereira</b>
</a>

## 🖋️ Licença
Este projeto é um desafio técnico para um processo seletivo da empresa [Fpass](https://www.fpass.com.br/), não possui fins lucrativos e não está licenciado.

[⬆️ Voltar ao topo](#find-the-hero)
<br>
