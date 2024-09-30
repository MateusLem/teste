import styled from "styled-components";

export const SecLogin = styled.section`

    font-family: 'Rajdhani', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    color: white;

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .container-login {
        background: rgba(24, 15, 87, 0.8); 
        border-radius: 15px;
        padding: 40px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        width: 350px;
    }

    .titulo-login {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        color: #00C0F9;
        margin-bottom: 30px;
    }

    .w-input {
        position: relative;
        margin-bottom: 20px;
    }

    .input-form {
        font-family: 'Rajdhani', sans-serif;
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: white;
        color: #DC00FE;
        outline: none;
        font-size: 16px;
        box-shadow: 0 0 10px rgba(0, 192, 249, 0.3);
        transition: box-shadow 0.3s ease;
    }

    .input-form:focus {
        box-shadow: 0 0 15px rgba(0, 192, 249, 0.7);
    }

    input::placeholder {
        color: rgba(255, 255, 255, 0.6);
    }

    .login-btn {
        display: flex;
        justify-content: center;
    }

    .login-form-btn {
        font-family: 'Rajdhani', sans-serif;
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        border-color: #DC00FE;
        color: #fff;
        box-shadow: 0 0 40px 40px #DC00FE inset, 0 0 0 0 #DC00FE;
        transition: all 150ms ease-in-out;
        background-color: transparent;
        border-style: none;
        
        &:hover {
            color: #DC00FE;
            box-shadow: 0 0 9px 0 #DC00FE inset, 0 0 8px 2px #DC00FE;
        }

    }

    .uteis {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        list-style: none;
        padding: 0;
    }

    .uteis li {
        color: #00C0F9;
    }

    .uteis li a {
        color: #DC00FE;
        text-decoration: none;
    }

    .uteis li a:hover {
        color: #8929a2;
    }
`;

export const SecCad = styled.section`
    
    font-family: 'Rajdhani', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;


.usuario {
    background: rgba(24, 15, 87, 0.8); /* Fundo translúcido */
    border-radius: 15px;
    padding: 40px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    width: 400px;
    text-align: center;
}

.usuario h1 {
    color: #00C0F9;
    font-size: 28px;
    margin-bottom: 20px;
    font-weight: 600;
}

.usuario form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

input {
    background-color: transparent;
    border: none;
    border-radius: 10px;
    padding: 10px;
    color: white;
    font-size: 16px;
    box-shadow: 0 0 9px 0 #DC00FE inset, 0 0 8px 2px #DC00FE; /* Sombra neon */
    outline: none;
    transition: box-shadow 0.3s ease;
}

input::placeholder {
    color: rgba(255, 255, 255, 0.6);
}

input:focus {
    box-shadow: 0 0 15px 0 #DC00FE inset, 0 0 10px 2px #DC00FE;
}

button {
    font-family: 'Rajdhani', sans-serif;
    background-color: #00C0F9;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 12px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    color: #00C0F9;
    background-color: white;
}

a {
    color: #DC00FE;
    text-decoration: none;
    font-size: 20px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

a:hover {
    color: #8929a2;
}

a svg {
    margin-left: 5px;
    font-size: 24px;
}

@media (max-width: 480px) {
    .usuario {
        width: 90%;
    }

}

`;