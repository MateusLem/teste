import styled from "styled-components"

export const MainRace = styled.main`

    .logo{
        display: flex;
        width: 100%;
        justify-content: end;
        padding: 25px;
        margin-top: 1%;
    }

    .cards-container {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(5, 18%); 
        margin-top: 2%;
        gap: 20px;
    }
    .card {
        min-height: 250px; 
        min-width: 200px;  
    }

    .parceiro{
        display: flex;
        justify-content: space-around;
    }

    .info{
        position: absolute;
    }

    h1{
        margin-top: 15%;
        width: 30%;
        font-family: "Rajdhani", sans-serif;
        color: #00C0F9;
        font-size: x-large;
        font-weight: 400;
    }
    .face{
        margin-top: 6%;
        margin-left: 50%;
    }

    .btn {
        box-sizing: border-box;
        appearance: none;
        background-color: transparent;
        border-radius: 0.6em;
        display: flex;
        align-self: center;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1;
        margin: 20px;
        padding: 1.2em 2.8em;
        text-decoration: none;
        text-align: center;

        &:hover,
        &:focus {
            color: #00C0F9;
            outline: 0;
        }
    }

    .neon{
        width: 15%;
        height: 40px;
        cursor: pointer;
        font-family: "Rajdhani", sans-serif;
        font-size: large;
        font-weight: bold;
        background-color: transparent;
        border-style: none;
        border-color: #00C0F9;
        color: #fff;
        box-shadow: 0 0 40px 40px #00C0F9 inset, 0 0 0 0 #00C0F9;
        transition: all 150ms ease-in-out;
        
        &:hover {
            color: #00C0F9;
            box-shadow: 0 0 10px 0 #00C0F9 inset, 0 0 10px 4px #00C0F9;
        }
    }

    @media (max-width: 850px) {

        .cards-container {
            gap: 10px;
         }

         h1{
            width: 40%;
            font-size: large;
            font-weight: 400;
            margin-top: 20%;
            margin-left: 5%;
        }

        .neon{
            width: 20%;
            height: 40px;
            font-size: medium;
        }

    }


    @media (max-width: 480px) {

        .logo img{
            width: 50px;
        }

        .cards-container {
            grid-template-columns: repeat(2, 45%); 
            gap: 10px;
         }

        .parceiro{
            display: flex;
            flex-direction: column-reverse;
        }

        .info{
            position: static;
        }

        h1{
            width: 70%;
            font-size: small;
            font-weight: 400;
            margin-left: 15%;
            margin-top: 10%;
        }

        .btn{
            font-size: 30px;
        }

        .neon{
            width: 50%;
            height: 30px;
            margin-left: 60%;
            font-size: small;
        }

        .face{
            display: none;
        }


    }


    
`

