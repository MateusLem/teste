import styled from "styled-components";
import React, { useEffect, useState } from "react";
import UserImg from "../assets/user.png";
import TV from "../assets/tv.png";


const StyleProfile = styled.section`
  .pCard_card {
    font-family: "Rajdhani", sans-serif;
    width: 30%;
    height: 615px;
    margin: 50px auto;
    border-radius: 30px;
    background-color: #f6fcfe;
    box-shadow: 0px 20px 70px rgba(0, 0, 0, 0.21);
    position: relative;
    overflow: hidden;
    transition: 0.5s ease-in-out;
  }

  .pCard_back {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    margin-top: -139px;
    font-weight: 600;
    z-index: 1;
  }

  .pCard_back a {
    text-decoration: none;
  }

  .pCard_up {
    position: absolute;
    width: 100%;
    height: 437px;
    background-position: 50%;
    background-size: cover;
    z-index: 3;
    text-align: center;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    transition: 0.5s ease-in-out;
  }

  .pCard_on .pCard_up {
    height: 100px;
    box-shadow: 0 0 30px #cfd8dc;
  }

  .pCard_text {
    position: absolute;
    top: 319px;
    left: 0;
    right: 0;
    color: #f1f7f9;
    transition: 0.5s ease-in-out;
  }

  .pCard_on .pCard_text {
    top: 20px;
  }

  .pCard_text h2 {
    margin: 0;
    font-size: 25px;
    font-weight: 600;
  }

  .pCard_text p {
    margin: 0;
    font-size: 16px;
    color: #e3f1f5;
  }

  .pCard_add {
    border-radius: 50%;
    background-color: #00C0F9;
    box-shadow: 0px 5px 24px rgba(0, 0, 0, 0.43);
    position: absolute;
    top: 392px; /* ajuste conforme necessário */
    left: 0;
    right: 0;
    margin: auto;
    width: 88px;
    height: 88px;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    display: flex; /* Para usar flexbox */
    align-items: center; /* Centraliza verticalmente */
    justify-content: center; /* Centraliza horizontalmente */
}

.pCard_add i {
    color: #ffffff; /* Define a cor do ícone como branco */
    font-size: 24px; /* Aumenta o tamanho do ícone */
    margin: 0; /* Remove margem se houver */
    padding: 0; /* Remove padding se houver */
}

  .pCard_on .pCard_add {
    transform: rotate(360deg) scale(0.5);
    top: 470px;
  }

  .pCard_down {
    background-color: #6225E6;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 178px;
    z-index: 2;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    transition: 0.5s ease-in-out;
    display: flex; /* Ativa o flexbox */
    justify-content: space-between; /* Adiciona espaço entre os itens */
    padding: 20px; /* Adiciona um pouco de padding se necessário */
}

.pCard_down div {
    display: flex; /* Para centralizar o conteúdo dentro de cada div */
    align-items: center; /* Alinha verticalmente os itens */
    text-align: center; /* Centraliza o texto */
    font-size: 18px;
    transition: 0.5s ease-in-out;
}

.pCard_down div p:first-of-type {
    color: #ffffff;
    margin-bottom: 5px;
}

.pCard_down div p:last-of-type {
    color: #ffffff;
    font-weight: 700;
    margin-top: 0;
}
  img.pointsIcon {
      width: 27px;
      height: 27px;
      margin-top: 10%;
      margin-right: 2%;
    }

    .detail{
        display: flex;
        flex-direction: column;
        margin-top: 15%;
    }

    .tv{
        width: 30px;
    }
    @media (max-width: 500px) {
    .pCard_card {
        width: 80%;

    }


    }

`;

export default function UserCard() {
  const getUsuario = localStorage.getItem("usuario")
  const getUsuarioId = localStorage.getItem("id")
  const [image, setImage] = useState(UserImg);
  const [loading, setLoading] = useState(true);


  function formatNumber(value) {
    if (value >= 1e9) {
        return (value / 1e9).toFixed(1) + 'B';  // Bilhões
    } else if (value >= 1e6) {
        return (value / 1e6).toFixed(1) + 'M';  // Milhões
    } else if (value >= 1e3) {
        return (value / 1e3).toFixed(1) + 'K';  // Milhares
    } else {
        return value.toFixed(2);  // Mantém o número como está
      }
    }
    

  function calcularTempoDeConta(username) {
  fetch('/dados.json')
  .then((response) => {
      if (!response.ok) {
          throw new Error('Erro na requisição: ' + response.status);
      }
      return response.json();
  })
  .then((data) => {
      const usuario = data.usuarios.find(user => user.usuario === getUsuario)
      const dataAtual = new Date();
    
      // Data de criação da conta
      const dataCriacao = new Date(usuario.createTime);
  
      // Diferença em milissegundos
      const diferencaEmMs = dataAtual - dataCriacao;
  
      // Converter para dias, horas, minutos
      const dias = Math.floor(diferencaEmMs / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencaEmMs / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferencaEmMs / (1000 * 60)) % 60);
  
      console.log(`Usuário ${username} possui a conta há: ${dias} dias, ${horas} horas e ${minutos} minutos.`);
      
      if(dias){document.getElementById("tempo").innerText = `${dias} d` }
      if(horas){document.getElementById("tempo").innerText = `${horas} hrs`}
      if(minutos){document.getElementById("tempo").innerText = `${minutos} min` }
      else{document.getElementById("tempo").innerText = "..."}
        
             
    })

    // Data atual

  }
  useEffect(() => {
    // Faz a requisição para carregar os dados do usuário
    fetch(`http://localhost:5000/usuarios/${getUsuarioId}`)
      .then((response) => response.json())
      .then((data) => {
        // Verifica se existe uma imagem salva e a atualiza no estado
        if (data.imagem) {
          setImage(data.imagem); // Atualiza a imagem com a versão salva
        }
      })
      .catch((error) => {
        console.error("Erro ao carregar dados do usuário:", error);
      })
      .finally(() => {
        // Desativa o estado de carregamento após completar o fetch
        setLoading(false);
      });
  }, [getUsuarioId]);
  
  fetch('/dados.json')
  .then((response) => {
      if (!response.ok) {
          throw new Error('Erro na requisição: ' + response.status);
      }
      return response.json();
  })
  .then((data) => {
      const usuario = data.usuarios.find(user => user.usuario === getUsuario)
      const tempo = calcularTempoDeConta(usuario.usuario)
      document.getElementById("points").innerText = formatNumber(usuario.points)
      document.getElementById("tempo").innerText = formatNumber(tempo)
    
    })
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        fetch(`http://localhost:5000/usuarios/${getUsuarioId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ imagem: base64Image }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Imagem atualizada com sucesso!", data);
            setImage(base64Image); // Atualiza a imagem no estado do componente
          })
          .catch((error) => {
            console.error("Erro ao atualizar a imagem:", error);
          });
      };
      reader.readAsDataURL(file);
    }
  };
    

  const [isCardOn, setIsCardOn] = useState(false);

  const toggleCard = () => {
    setIsCardOn(!isCardOn);
  };

  if (loading) {
    return <div>Carregando...</div>; // Placeholder enquanto a imagem é carregada
  }

  return (
    <StyleProfile>
      <div
            className={`pCard_card ${isCardOn ? "pCard_on" : ""}`}
            onClick={toggleCard}
        >
            <div className="pCard_up" style={{ backgroundImage: `url(${image})` }}>
                <div className="pCard_text">
                    <h2>{getUsuario}</h2>
                    <p>RACE LOVER</p>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        placeholder="imagem"/>
                </div>
                <div className="pCard_add" onClick={toggleCard}>
                    <i className={`fas ${isCardOn ? "fa-minus" : "fa-plus"}`}></i>
                </div>
            </div>
            <div className="pCard_down">
                <div className="detail">
                    <img src="pontos.png" alt="Icone Pontos" className="pointsIcon" />
                    <p id= "points">2.000</p>
                </div>
                <div className="detail">
                    <img  className="tv" src={TV} alt="" />
                    <p id="tempo">5 hrs</p>
                </div>
            </div>
            <div className="pCard_back">
                <p>See My Latest Work Here</p>
                <p>Follow Me!</p>
            </div>
                                                
        </div>
    </StyleProfile>
  );
}
