<img src="https://github.com/mareasea/gs-web/assets/136378912/0b0af4a1-55d6-415a-ba3a-4194c90dc2a7"  width="220px"> 

# VISÃO GERAL
<p> Site informativo dedicado ao mundo das corridas, com um foco especial em destacar eventos e corredores de destaque. Este site oferece uma plataforma onde os entusiastas de corridas podem encontrar informações sobre as próximas corridas, visualizar pódios e acessar conteúdos relacionados a competições e jogos. Através de uma interface intuitiva e visualmente atraente, o site visa proporcionar uma experiência envolvente e informativa para seus usuários. </p>

## Funcionalidades
- Página Inicial: Apresenta as informações gerais sobre a Fórmula E.
- Palpites: Área onde os usuários podem fazer previsões sobre as corridas.
- Corridas: Seção com informações sobre corridas passadas e futuras.
- Game: Um jogo interativo relacionado à Fórmula E.
- Login/Cadastro: Permite o cadastro de novos usuários e login para acesso a funcionalidades restritas.

### pré-requisitos
- Node.js
- npm ou yarn


### Dependências
```
  "dependencies": {
      "json-server": "^1.0.0-beta.2", //Simula uma API RESTful para gerenciamento de dados locais durante o desenvolvimento.
      "react": "^18.3.1",  //Biblioteca JavaScript para a criação de interfaces de usuário.
      "react-dom": "^18.3.1",
      "react-icons": "^5.3.0",
      "react-router-dom": "^6.26.2",//Gerenciamento de rotas no front-end para navegação no site.
      "styled-components": "^6.1.13"//Para estilização dos componentes de forma dinâmica e moderna.
  }
```

### Passos para executar
1. Clone o repositório:
```
git clone https://github.com/seu-usuario/seu-repositorio.git
```
2. Instale as dependências:
```
npm install
```
3. Inicie o projeto:
```
npm run dev
```

### Simulação API
1. Adicione um arquivo db.json na raiz do projeto com os dados que deseja simular.
2. Inicie o json-server:
```
npx json-server --watch db.json --port 5000
```
# Estrutura
```
src/
│
├── assets/
│   └── imagens, ícones e outros arquivos estáticos
│
├── components/
│   └── Componentes reutilizáveis para a aplicação
│
├── data/
│
├── routes/
│   ├── Error/
│   │   └── index.jsx
│   ├── Game/
│   │   └── index.jsx
│   ├── Home/
│   │   ├── index.jsx
│   │   └── styleHome.js
│   ├── Login/
│   │   ├── CadastroUsuario.jsx
│   │   ├── Login.jsx
│   │   └── styleLogon.js
│   ├── PrixPredict/
│   │   ├── Banner.jsx
│   │   ├── index.jsx
│   │   ├── stylePrix.js
│   │   └── tag.jsx
│   └── Racing/
│       ├── index.jsx
│       └── styleRace.js
│
├── App.jsx
├── global-style.js
├── main.jsx
└── styleComponents.js
```


#### Próximas atualizacões
**1.** Atualizações em Tempo Real: Informações ao vivo durante os eventos de corrida.<br>
**2.** Melhora no game idle
<br> <br>

##### Tecnologias
<a href="https://www.google.com/search?q=html" target="_blank" style="margin-right:10px"><img src="https://img.shields.io/badge/HTML-orange?style=for-the-badge&logo=HTML5&logoColor=orange&labelColor=black"></a>
<a href="https://www.google.com/search?q=css" target="_blank" style="margin-right:10px"><img src="https://img.shields.io/badge/CSS-61DBFB?style=for-the-badge&logo=CSS3&logoColor=61DBFB&labelColor=black"></a>
<a href="https://www.google.com/search?q=javascript" target="_blank" style="margin-right:10px"><img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=JavaScript&logoColor=yellow&labelColor=black"></a>
<a href="https://www.google.com/search?q=Node.js" target="_blank" style="margin-right:10px"><img src="https://img.shields.io/badge/Node.js-green?style=for-the-badge&logo=node.js&labelColor=black"></a>
<a href="https://www.google.com/search?q=React" target="_blank" style="margin-right:10px"><img src="https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react&labelColor=black"></a>+
<a href="https://www.google.com/search?q=Vite" target="_blank" style="margin-right:10px"><img src="https://img.shields.io/badge/Vite-purple?style=for-the-badge&logo=vite&labelColor=black"></a>


### PARCEIROS
<div style="display: flex; justify-content: space-between; align-items: center;">
<a href="https://www.grandepremio.com.br/" target="_blank" style="text-align: center; margin-right: 10px;">
<img loading="lazy" src=https://github.com/mareasea/gs-web/assets/136378912/87836721-5822-49e5-aaea-0414226b7c6c width="100px"
</a><br>
<br>
<div style="display: flex; justify-content: space-between; align-items: center;">
<a href="https://www.fiap.com.br" target="_blank" style="text-align: center; margin-right: 10px;">
<img loading="lazy" src=https://github.com/mareasea/.github/assets/136378912/8eca5082-4fc2-417d-a5c6-2160af8069f3 width="150px"
</a>
<br>
<div style="display: flex; justify-content: space-between; align-items: center;">
<a href="https://www.mahindraracing.com/" target="_blank" style="text-align: center; margin-right: 10px;">
<img loading="lazy" src=https://github.com/mareasea/gs-web/assets/136378912/2a83e492-76ac-4717-8e2b-ff4eebaec570 width="150px"
</a><br> <br>



## Colaboradores do Projeto
<div style="display: flex; justify-content: space-between; align-items: center;">
<a href="https://github.com/AnaTorresLoureiro" target="_blank" style="text-align: center; margin-right: 10px;">
<img loading="lazy" src="https://avatars.githubusercontent.com/AnaTorresLoureiro" width=120>
<p style="font-size:min(2vh, 36px); margin-top: 10px;">Ana Laura Torres Loureiro - RM 554375</p>
</a>
<a href="https://github.com/MuriloCngp" target="_blank" style="text-align: center; margin-right: 10px;">
<img loading="lazy" src="https://avatars.githubusercontent.com/MuriloCngp" width=120>
<p style="font-size:min(2vh, 36px); margin-top: 10px;">Murilo Cordeiro Ferreira - RM 556727</p>
</a>
<a href="https://github.com/MateusLem" target="_blank" style="text-align: center; margin-right: 10px;">
<img loading="lazy" src="https://avatars.githubusercontent.com/MateusLem" width=120>
<p style="font-size:min(2vh, 36px); margin-top: 10px;">Mateus da Costa Leme - RM 557803</p>
</a>
<a href="https://github.com/Geronimo-augusto" target="_blank" style="text-align: center; margin-right: 10px;">
<img loading="lazy" src="https://avatars.githubusercontent.com/Geronimo-augusto" width=120>
<p style="font-size:min(2vh, 36px); margin-top: 10px;">	Geronimo Augusto Nascimento Santos - RM 557170</p>
</a>
<a href="https://github.com/Vitorr-AF" target="_blank" style="text-align: center; margin-right: 10px;">
<img loading="lazy" src="https://avatars.githubusercontent.com/Vitorr-AF" width=120>
<p style="font-size:min(2vh, 36px); margin-top: 10px;">Vitor Augusto França de Oliveira - RM 555469</p>
</a>
</div>
