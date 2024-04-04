<a name="readme-top"></a>
<br />

<div align="center">
  <a href="https://squadup-livid.vercel.app/">
    <img align="center" width="270" height="80" src="./src/assets/logo-claro.webp">
  </a>
  <h1>SquadUp</h1>
</div>

<p align="center">Code with Confidence, SquadUp with Excellence.</p>
<p align="justify">Precisando escalar seu time de TI de forma rápida e eficiente? Conectamos empresas aos melhores talentos de TI. Encontre o Seu Futuro Profissional aqui!</p>
<p align="center">Acesse o site da <a href="https://squadup-livid.vercel.app/">SquadUp</a>.</p>

<p align="center">
 <a href="#Descrição">Descrição</a> •
 <a href="#Funcionalidades">Funcionalidades</a> •
 <a href="#Tecnologias">Tecnologias utilizadas</a> •
 <a href="#start">Getting Start</a> •
 <a href="#autor">Autor</a>
</p>

---

<br>

<h1 align="center">  
    <p align="center">
        <img width="200" height="400" src="./src/assets/squadup-mobile.gif"><br><br>
        <img width="800" height="400" src="./src/assets/squadup.gif">
    </p>
</h1>

<a id="Descrição"></a>

### Descrição

#### **SquadUp**

SquadUp é uma plataforma que tem como objetivo conectar empresas aos melhores profissionais do mercado. De uma forma rápida, você consegue montar a Squad ideal para o seu projeto. Por meio desta plataforma, é possível encontrar talentos qualificados e especializados em diversas áreas para impulsionar o sucesso dos seus empreendimentos.

Por trás do SquadUp está a empresa fictícia SquadUp S/A., criada com o propósito de demonstrar meus conhecimentos e habilidades em desenvolvimento de software e gestão de projetos.

#### **Motivação e Planejamento**

A motivação para criar o SquadUP foi desenvolver um projeto MERN (MongoDB, Express, React e Node) concebido desde suas bases. Isso inclui a elaboração do documento de requisitos do sistema, o branding completo (nome fantasia, slogan, missão, etc.), o design, e as fases de planejamento e pré-desenvolvimento utilizando metodologias ágeis como Scrum e Kanban. O objetivo foi criar uma plataforma robusta e eficiente que atendesse às necessidades tanto das empresas quanto dos profissionais.

#### **Fase Atual e Futuras Atualizações**

Atualmente, a aplicação SquadUp está em sua primeira fase, que consiste principalmente no desenvolvimento do CRUD (Create, Read, Update, Delete) de talentos. Esta é uma etapa crucial para fornecer um Mínimo Produto Viável (MVP) que demonstre a funcionalidade básica da plataforma. Nas próximas atualizações, planejo implementar recursos adicionais, como autenticação de usuários e outros CRUDs, incluindo gestão de usuários e de squads. Estou comprometido em evoluir continuamente meus conhecimentos e complementar a plataforma com novas features.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a id="Funcionalidades"></a>

### Funcionalidades

As funcionalidades da v1.0 são:

- Sistemas responsivos para várias telas
- CRUD de talentos: listagem, cadastro, atualização e deleção
- Filtragem de talentos por e-mail
- Filtragem de talentos por stack
- Controle de formulário com Hook-Form e validação com Yup
- Requisições realizadas com Axios
- Gerenciamento de estados com Redux Toolkit
- Utilização do middleware Redux Thunk para funções assíncronas
- Utilização de modal para sinalizar mensagens de erro e sucesso das requisições para o usuário


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a id="Tecnologias"></a>

### Tecnologias utilizadas (Frontend)

As seguintes ferramentas foram usadas na construção do projeto:

- React JS
- Typescript
- Redux toolkit
- Redux Thunk
- Axios
- Styled Components
- Material UI
- React Router Dom
- Input Mask
- Hook-Form
- Yup
- React Scroll
- Swiper-js

Backend desenvolvido com **NodeJs**, **Express** e **MongoDB**. Para mais informações sobre o backend SquadUp [clique aqui](https://github.com/RenCsar/API-SquadUp).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a id="start"></a>

## Getting Started

Este guia tem como objetivo fornecer instruções sobre como configurar e iniciar o projeto localmente. O projeto é desenvolvido em React com TypeScript e consome uma API cujo link está definido no arquivo .env.

### Pré-requisitos

- Node.js instalado
- npm ou yarn instalado
- Conta no GitHub (para clonar o repositório, se necessário)


### Installation

_Siga os passos abaixo para configurar e iniciar o projeto_

1. Clone o repositório:
   ```sh
   git clone https://github.com/RenCsar/squadup.git
   ```
2. Instale as dependências do projeto:
   ```sh
   cd squadup
   npm install
   ```
3. Configure a URL da API:

- Renomeie o arquivo `.env.example` para `.env`.
- Abra o arquivo .env em um editor de texto.
- Substitua "INSIRA A URL DA SUA API" pela URL real da sua API.

   ```js
   REACT_APP_API_URL = "INSIRA A URL DA SUA API";
   ```

#### Executando o Projeto
Após seguir os passos de instalação, você pode iniciar o projeto localmente:
  ```sh
    npm start
  ```
O projeto será executado no seu navegador padrão. Se não abrir automaticamente, você pode acessá-lo manualmente em http://localhost:3000.

#### Detalhes das Variáveis de Ambiente
- REACT_APP_API_URL: A URL da API que o projeto irá consumir.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

### Autor

Made with 💜 by Renan Cesar 👋

[![LinkedIn Badge](https://img.shields.io/badge/-Renan_Cesar-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/renan-cesar/)](https://www.linkedin.com/in/renan-cesar/)
