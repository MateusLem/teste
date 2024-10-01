import styled from "styled-components";

export const MainPrix = styled.main`
  width: 100%;
  font-family: "Rajdhani", sans-serif;
  padding: 1rem; /* Adicionando padding geral */

  .quebra {
    width: 100%; 
    margin: 0; 
    padding: 0; 
  }

  .como_funciona_titulo {
    padding-bottom: 60px;
    color: #00C0F9;
    text-align: center;
    font-family: "Rajdhani", sans-serif;
    font-size: 3rem;
    margin-top: 2rem;
    letter-spacing: 2px;
  }

  .como_funciona_container {
    width: 90%; /* Mudando para 90% para melhor responsividade */
    max-width: 1200px; /* Limite de largura para grandes telas */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto; /* Centralizando o container */
    margin-top: 3rem;
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); /* Aumentando a sombra */
  }

  .card {
    width: 100%;
    max-width: 800px;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid #00C0F9;
    border-radius: 10px;
    margin: 10px 0;
    padding: 1rem;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Adicionando sombra ao card */
  }

  .card:hover {
    transform: scale(1.03);
  }

  .cardTitle {
    font-family: "Rajdhani", sans-serif;
    color: #00C0F9;
    font-size: 1.8rem; /* Aumentando o tamanho do título */
  }

  .cardContent {
    font-family: "Rajdhani", sans-serif;
    color: #00A1D8;
    font-size: 1rem;
    line-height: 1.8rem; /* Aumentando a altura da linha */
    margin-top: 1rem;
    height: 0;
    opacity: 0;
    transition: height 0.3s ease, opacity 0.3s ease;
  }

  .card.expanded .cardContent {
    height: auto;
    opacity: 1;
  }

  .podio_title {
    padding-bottom: 20px;
    color: #00C0F9;
    font-family: "Rajdhani", sans-serif;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .podio {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 2rem;
  }

  .placement {
    width: 20%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    font-family: "Rajdhani", sans-serif;
    font-size: 1.5rem;
    color: white;
    border-radius: 10px;
    transition: transform 0.3s ease, background-color 0.3s ease;
    cursor: pointer;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .placement:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  .view-full-list {
    background-color: #00C0F9;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    margin: 20px auto;
    display: block;
    text-align: center;
  }

  .view-full-list:hover {
    background-color: #0094c4;
    transform: scale(1.05);
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .predictions {
    margin-top: 70px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .team-card {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 15px;
    width: 250px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    
    &:hover {
      transform: scale(1.05);
    }
  }

  .team-logo img {
    max-width: 100%;
    border-radius: 10px;
  }

  .team-info {
    text-align: center;
    margin-top: 10px;
  }

  .bet-amount {
    width: 80%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .yes, .no {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }

  .yes {
    background-color: #4CAF50;
  }

  .no {
    background-color: #f44336;
  }

  .predictions_title {
    margin-top: 80px;
    padding-bottom: 0px;
    color: #00C0F9;
    font-family: "Rajdhani", sans-serif;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: left;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    .como_funciona_container {
      width: 95%; /* Ajuste para dispositivos menores */
    }

    .placement {
      width: 45%; /* Largura reduzida em telas pequenas */
    }

    .predictions {
      flex-direction: column; /* Empilha os cards em telas pequenas */
      align-items: center; /* Centraliza os cards */
    }
  }

  @media (max-width: 480px) {
    .placement {
      width: 80%; /* Largura maior em telas muito pequenas */
    }

    .cardTitle {
      font-size: 1.5rem; /* Tamanho menor para títulos em telas pequenas */
    }
  }
`;
