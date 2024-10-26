
import styled from "styled-components";

export const MainHome = styled.main`
    
    display: flex;
    flex-direction: column;
    font-family: "Rajdhani", sans-serif;

    h1{
        color: white;
    }

    .btn{
        position: absolute;
        z-index: 3;
        margin-left: 7%;
        margin-top: 2%;
        width: 220px;
        display: inline-block;
        cursor: pointer;
        text-decoration: none;
        color:#00C0F9;
        border: #00C0F9 4px solid;
        padding: 0.25em 1em;
        border-radius: 0.25em;
        text-shadow: 0 0 0.125em rgba(255, 255, 255, 0.55), 0 0 0.5em currentColor;
        box-shadow: inset 0 0 0.5em 0 #00C0F9, 0 0 0.5em 0 #00C0F9;
    }
    

    .btn::before {
	pointer-events: none;
	content: "";
	position: absolute;
	background: #00C0F9;
	top: 120%;
	left: 0;
	width: 100%;
	height: 100%;

	transform: perspective(1.2em) rotateX(40deg) scale(1.3, 0.5);
	filter: blur(1.15em);
	opacity: 0.7;

	transition: transform 0.5s linear;
}

.btn::after {
	content: "";
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	box-shadow: 0 0 4em 0.6em #00C0F9, 0 0 1em 0.2em white;
	opacity: 0;
	background: #00C0F9;
	z-index: -1;
	transition: opacity 0.5s linear;
}

.btn:hover,
.btn:focus {
	color:#00C0F9;
	text-shadow: none;
}

.btn:hover::before,
.btn:focus::before {
	opacity: 1;
	transform: perspective(1.10em) rotateX(40deg) scale(1.5, 0.6);
	transition: transform 0.5s linear;
}
#chart{
    margin-top:5rem;
    height: 30vh;
}

.btn:hover::after,
.btn:focus::after {
	opacity: 1;
}


    .game{
        display: flex;
        background-color: transparent;
        border-style: none;
        cursor: pointer;
        color: #00C0F9;
        font-family: "Rajdhani", sans-serif;
        font-weight: 500;
        font-size: 40px;
        transition: transform 0.3s ease;
    }

    .game img{
        width: 45px;
        margin-right: 8%;
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
        font-size:large;
        margin-top: 15px;
        background-color: #00C0F9;
        border-style: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
    }
    .btn_sign:hover {
    cursor: pointer;
    animation: moveAcross 1.4s ease forwards;
}

    @keyframes moveAcross {
        0% {
            transform: translateX(0);
            background-color: #8929a2;
        }
        25% {
            transform: translateX(100%);
        }
        26%{
            opacity:0;
            transform: translateX(-30%);
        }
        74% {
            opacity:1;
        }
        100% {
            transform: translateX(0);
            background-color: #8929a2;
        }
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
        width:100%;
    }

    .podioList h1{
        color: #00C0F9;
        font-size: 50px;
        margin-left: 5%;
        margin-top: 2%;
    }
    .podioList p{
        align-self: center;
        color: #DC00FE;
        font-weight: 500;
        font-size: 30px;
        margin-left: 4%;
    }

    .line{
        height: 100%;
        width: 5px;
        background-color: #00C0F9;
        margin-left: 8%;
        margin-right: 1%;
    }

    .racer_podio{
        display: flex;
        align-content: center;
        width: 100%;
        height: 15vh;
        background-color: #312c9f;
        transition: transform 0.3s ease, background-color 0.3s ease;
        margin-top:2%;
    }
    .racer_podio:hover{
        cursor: pointer;
        transform: translateX(+10px);
    }

    .calendar{
        display: flex;
        margin-right: 5%;
    }
    .calendar:hover{
        transform: translateY(-10px);
        transition: transform 0.5s ease;
        button:hover{
            transform:scale(1.1);
        }
        
    }
    .calendar:active{
        transform: translateY(-10px);
        transition: transform 0.5s ease;
        button:hover{
            transform:scale(0.9);
        }
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
            height: 30vh;
        }
        .racer_podio{
            height: 10vh;
        }
        .line{
            width: 5px;
            margin-left: 1%;
        }
        .calendar{
            margin-top: 10%;
            justify-content: center;
            width: 100%;
            margin-right: 0%;
        }
    }
    @media (max-width: 500px) {
        #chart{
            margin-top:2rem;
            margin-right:1rem;
            height: 15vh;
        }
        .btn{
            width: 100px;
        }

        
        .game{
            font-size: small;
        }
        .game img{
            width: 20px;
        }

        .car img{
            width: 55%;
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

        .podioList h1{
            font-size: 40px;
        }

        .line{
            width: 2px;
        }
        .racer_podio{
            height: 30%;
            p{
                font-size:100%;
            }
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
            margin-top: 4%;
            margin-left: 40%;
            font-size: xx-small;
            min-height: 2vh;
        }
    }

`