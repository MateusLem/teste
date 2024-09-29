import styled from "styled-components";

export const MainPrix = styled.main`
    width: 100%;

    .titulo {
        color: #00C0F9;
        text-align: center;
        font-family: "Rajdhani", sans-serif;
        font-size: 3rem;
        margin-top: 2rem;
        letter-spacing: 2px;
    }

    .txt_prix {
        color: #00C0F9;
        font-family: "Rajdhani", sans-serif;
        margin: 1rem 10%;
        text-align: center;
    }

    .como_funciona_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3rem;
        padding: 2rem;
        background-color: #00c0f9;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .como_funciona_titulo {
        font-size: 2rem;
        color: #4c0748;
        font-family: "Rajdhani", sans-serif;
        margin-bottom: 1.5rem;
    }

    .como_funciona_texto {
        font-family: "Rajdhani", sans-serif;
        color: #333;
        font-size: 1.2rem;
        line-height: 1.8rem;
        text-align: left;
        width: 80%;
    }
  
    // Estilização Pódio
    
    .podia_titulo {
    color: #00C0F9;
    font-family: "Rajdhani", sans-serif;
    text-align: center;
    font-size: 2rem;
    margin-top: 2rem; /* Espaçamento acima do título */
    margin-bottom: 1rem; /* Espaçamento abaixo do título */
    }
    
    .podio {
        display: flex;
        justify-content: space-evenly; /* Distribui o espaço entre os itens */
        align-items: flex-end; /* Alinha os itens na base */
        position: relative;
        width: 100%; 
        margin-top: 2rem;
    }

    .line {
        position: absolute;
        top: -20px;
        height: 5px; /* Linha horizontal */
        width: 80%;
        background-color: #00C0F9;
        left: 10%;
    }

    .podioList {
        display: flex;
        justify-content: space-between; /* Deixa espaço entre os itens */
        width: 100%;
    }

    .first, .second, .third {
        background-color: #312c9f;
        transition: transform 0.3s ease, background-color 0.3s ease, width 0.3s ease; 
        margin: 0 30px; /* Aumenta o espaço entre os itens */
    }

    .first {
        width: 150px;
        height: 120px;
    }

    .second {
        width: 150px;
        height: 100px;
    }

    .third {
        width: 150px;
        height: 80px;
    }

    .first:hover, .second:hover, .third:hover {
        cursor: pointer;
        transform: translateY(-5px);
        width: 170px; /* Expande em largura */
    }

    /* Media queries para responsividade */
    @media (max-width: 768px) {
        .podio {
            flex-direction: column;
            align-items: center;
        }

        .first, .second, .third {
            width: 100%;
            margin-bottom: 1rem;
        }
    }
`;
