
import styled from "styled-components";

export const MainHome = styled.main`
    
    display: flex;
    flex-direction: column;
    font-family: "Rajdhani", sans-serif;

    .btn{
        position: absolute;
        z-index: 3;
        margin-left: 2%;
        margin-top: 2%;
        width: 110px;
    }

    .game{
        background-color: transparent;
        border-style: none;
        cursor: pointer;
        color: #00C0F9;
        font-family: "Rajdhani", sans-serif;
        font-weight: 700;
        font-size: large;
        transition: transform 0.3s ease;
    }

    .game:hover{
        border-radius: 20px;
        transform: translateX(10px);
        background-color: #DC00FE;
        color: white;
    }

    .game img{
        width: 35px;
        margin-right: 5%;
    }

    a{
        text-decoration: none;
    }


    .car{
        display: flex;
        color: #00C0F9;
        font-weight: 300;
        font-size: 35px;
    }

    .txt_car{
        width: 30%;
        margin-top: 10%;
        margin-left: 15%;
    }

    .btn_sign{
        width: 150px;
        height: 40px;
        font-family: "Rajdhani", sans-serif;
        font-weight: bold;
        color: white;
        margin-top: 15px;
        background-color: #00C0F9;
        border-style: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
    }
    .btn_sign:hover{
        cursor: pointer;
        background-color: #8929a2;
    }

    .btn_sign p{
        margin-top: 7%;
    }
    .btn_sign svg{
        margin-top: 5%;
    }

    .raceInfo{
        display: flex;
        justify-content:space-between;
    }

    .titulo{
        color: #00C0F9;
        margin-left: 3%;
        margin-bottom: 1%;
    }
    
    .podio{
        display: flex;
        width: 45%;
    }

    .podioList{
        flex-direction: column;
    }

    .line{
        height: 300px;
        width: 5px;
        background-color: #00C0F9;
        margin-left: 8%;
        margin-right: 1%;
    }

    .first{
        width: 350px;
        height: 80px;
        background-color: #312c9f;
        transition: transform 0.3s ease, background-color 0.3s ease;
    }

    .first:hover{
        cursor: pointer;
        transform: translateX(-10px);
    }

    .second{
        width: 350px;
        height: 80px;
        background-color: #312c9f;
        margin-top: 8%;
        margin-bottom: 8%;
        transition: transform 0.3s ease, background-color 0.3s ease;
    }

    .second:hover{
        cursor: pointer;
        transform: translateX(-10px);
    }

    .third{
        width: 350px;
        height: 80px;
        background-color: #312c9f;
        transition: transform 0.3s ease, background-color 0.3s ease;
        
    }

    .third:hover{
        cursor: pointer;
        transform: translateX(-10px);
    }

    .calendar{
        display: flex;
        margin-right: 5%;
    }

    .circuito_img{
        width: 400px;
    }

    .date{
        background-color: #66187a;
        height: 225px;
        border-radius: 0px 10px 10px 0px;
        padding: 10px;
        color: white;
    }

    .date button{
        margin-top: 40%;
        margin-left: 40%;
        font-family: "Rajdhani", sans-serif;
        border-radius: 5px;
        border-style: none;
        min-height: 10%;
        width: 60%;
        cursor: pointer;
        background-color: #00C0F9;
        color: white;
        font-weight: bold;
        text-decoration: none;
    }

    .date button a{
       color: white;
    }
    /* breakpoint tablet */
    @media (max-width: 850px) {
        .txt_car{
            width: 60%;
            margin-left: 10%;
            font-size: xx-large;
        }
        .raceInfo{
            display: flex;
            flex-direction: column;
        }
        .titulo{
            margin-left: 17%;
            margin-bottom: 2%;
        }
        .podio{
            display: flex;
            justify-content: center;
            width: 100%;
        }
        .line{
            height: 330px;
            width: 5px;
            background-color: #00C0F9;
            margin-left: 1%;
        }
        .first{
            width: 65vw;
        }
        .second{
            width: 65vw;
        }
        .third{
            width: 65vw;
        }
        .calendar{
            margin-top: 10%;
            justify-content: center;
            width: 100%;
            margin-right: 0%;
        }
    }
    /* breakpoint celular */
    @media (max-width: 480px) {
        .game{
            font-size: small;
        }
        .game img{
            width: 20px;
        }
        .txt_car{
            width: 100%;
            font-size: medium;
            margin-left: 8%;
        }
        .btn_sign{
            width: 90px;
            height: 30px;
            font-size: x-small;
        }
        .btn_sign p{
            margin-top: 8%;
        }
        .btn_sign svg{
            margin-top: 2%;
            width: 15px;
        }
        .titulo{
            font-size: medium;
            margin-left: 8%;
        }
        .podio{
            width: 100%;
        }
        .line{
            height: 31vh;
            width: 2px;
        }
        .first{
            width: 75vw;
            height: 8vh;
        }
        .second{
            width: 75vw;
            height: 8vh;
        }
        .third{
            width: 75vw;
            height: 8vh;
            margin-bottom: 10%;
        }
        .raceInfo{
            display: flex;
            flex-direction: column;
        }
        .calendar{
            display: flex;
            margin-right: 0%;
            padding: 2%;
        }
        .circuito_img{
            width: 250px;
        }
        .date{
            background-color: #66187a;
            height: 140px;
            font-size: small;
            border-radius: 0px 10px 10px 0px;
            padding: 5px;
        }
        .date button{
            margin-top: 7%;
            margin-left: 40%;
            font-size: x-small;
            height: 2vh;
        }
    }

`