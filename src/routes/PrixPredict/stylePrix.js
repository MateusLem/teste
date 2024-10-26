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
    color: rgba(220, 0, 254);
    text-align: center;
    font-family: "Rajdhani", sans-serif;
    font-size: 3rem;
    margin-top: 2rem;
    letter-spacing: 2px;
    text-shadow: 
        0 0 5px rgba(220, 0, 254,0.18),  
        0 0 10px rgba(220, 0, 254,0.18), 
        0 0 15px rgba(220, 0, 254,0.18),
        0 0 20px rgba(220, 0, 254,0.18), 
        0 0 25px rgba(220, 0, 254,0.18); 
  }

  .como_funciona_container {
    width: 80%; 
    max-width: 1200px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto; 
    margin-top: 3rem;
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5), 
                0 0 10px rgba(220, 0, 254, 0.3),
                0 0 20px rgba(220, 0, 254, 0.3);
    border-radius: 10px;
  }

  .card {
    width: 100%;
    max-width: 800px;
    background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid #00C0F9;
    border-radius: 10px;
    margin: 10px 0;
    padding: 1rem;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); 
  }

  .card:hover {
    transform: scale(1.03);
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5), 
                0 0 10px rgba(0, 192, 249, 0.3),
                0 0 20px rgba(0, 192, 249, 0.3); 
  }

  .cardTitle {
    font-family: "Rajdhani", sans-serif;
    color: #00C0F9;
    font-size: 1.8rem; 
  }

  .cardTitle:hover{
    text-shadow: 
        0 0 5px rgba(0, 192, 249, 0.2),  
        0 0 10px rgba(0, 192, 249, 0.2), 
        0 0 15px rgba(0, 192, 249, 0.2),
        0 0 20px rgba(0, 192, 249, 0.2), 
        0 0 25px rgba(0, 192, 249, 0.2); 
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
    width: 25%;
    height:fit-content;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    font-family: "Rajdhani", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    border-radius: 10px;
    transition: transform 0.3s ease, background-color 0.3s ease;
    cursor: pointer;
    text-align: center;
    position: relative;
    overflow: hidden;
    .points-container {
      display: flex;
      flex-direction:row;
      align-items: center;
      padding: 5px 10px;
      font-size: 20px;
      color: white;
      font-family: "Rajdhani", sans-serif;

      img.pointsIcon {
        width: 20px;
        height: 20px;
        margin-left:5%
      }
    }
  }

  .placement:hover {
    transform: scale(1.05);
    background-color: #35B0B4;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  .placement:active {
    transform: scale(1.05);
    color:black;
    background-color: #B9F6F8;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    div.points-container{
      color:black;
    }
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
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
  }

  .team-card {
    margin-top: 2%;
    margin-bottom: 1%;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    padding: 15px;
    width: 250px;
    display:flex;
    flex-direction:column;
    align-content:center;
    align-items:center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5), 
                0 0 10px rgba(220, 0, 254, 0.5),
                0 0 20px rgba(220, 0, 254, 0.3); 
    transition: transform 0.2s, box-shadow 0.2s ease;
    
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2), 
                  0 0 15px rgba(220, 0, 254, 0.7), 
                  0 0 30px rgba(220, 0, 254, 0.5); 
    }
}

.team-logo{
  margin: 2%;
  width: 50%;
  height:50%
}

.maserati {
    width: 40%;
}

.team-info {
    text-align: center;
}

.bet-amount {
    width: 80%;
    padding: 8px;
    margin-top: 8%;
    margin-bottom: 5%;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.btns{
  display: flex;
}

.yes, .no {
        box-sizing: border-box;
        appearance: none;
        text-align: center;
        background-color: transparent;
        border-radius: 0.6em;
        align-self: center;
        line-height: 1;
        margin: 2%;
        text-decoration: none;
        text-align: center;
        padding: 3%;

        &:hover,
        &:focus {
            color: #00C0F9;
            outline: 0;
        }
}

.yes {
        width: 50%;
        height: 10%;
        cursor: pointer;
        font-family: "Rajdhani", sans-serif;
        font-size: medium;
        font-weight: bold;
        background-color: transparent;
        border-style: none;
        border-color: #4CAF50;
        color: #fff;
        box-shadow: 0 0 40px 40px #4CAF50 inset, 0 0 0 0 #4CAF50;
        transition: all 150ms ease-in-out;
        
        &:hover {
            color: #1B5E20;
            box-shadow: 0 0 10px 0 #4CAF50 inset, 0 0 10px 4px #4CAF50;
        }
}
.no {
        width: 50%;
        height: 10%;
        cursor: pointer;
        font-family: "Rajdhani", sans-serif;
        font-size: medium;
        font-weight: bold;
        background-color: transparent;
        border-style: none;
        border-color: #f44336;
        color: #fff;
        box-shadow: 0 0 40px 40px #f44336 inset, 0 0 0 0 #f44336;
        transition: all 150ms ease-in-out;
        
        &:hover {
            color: #B71C1C;
            box-shadow: 0 0 10px 0 #f44336 inset, 0 0 10px 4px #f44336;
        }
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

  @media (max-width: 500px) {
    .placement {
      width: 80%; /* Largura maior em telas muito pequenas */
    }

    .cardTitle {
      font-size: 1.5rem; /* Tamanho menor para títulos em telas pequenas */
    }
  }
`;
