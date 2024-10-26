import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import UserImg from "../assets/user.png"; // Imagem de perfil padrão
import Plus from '../assets/plus.svg'
import User from "../assets/iconUser.png"
import Close from "../assets/close.png"

const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

const fadeInAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const expandAnimation = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.05); }
`;

const StyleProfile = styled.section`
  .pCard_card {
    font-family: "Rajdhani", sans-serif;
    width: 40%;
    height: auto;
    margin: 50px auto;
    border-radius: 30px;
    background-color: #f6fcfe;
    box-shadow: 0px 20px 70px rgba(0, 0, 0, 0.21), 0px 0px 20px #00c0f9;
    position: relative;
    overflow: hidden;
    transition: 0.5s ease-in-out;
    animation: ${floatAnimation} 3s ease-in-out infinite;
  }

  .pCard_back {
    text-align: center;
    padding: 20px;
    font-weight: 600;
    background-color: #f6fcfe;
    animation: ${fadeInAnimation} 0.5s ease-in-out; /* Animação ao exibir o perfil */
  }

  .pCard_up {
    position: relative;
    width: 100%;
    height: 300px;
    background-position: 50%;
    background-size: cover;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    transition: 0.5s ease-in-out;
  }

  .pCard_text {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    color: #f1f7f9;
    padding: 10px;
  }

  .pCard_text h2 {
    margin: 0;
    font-size: 30px;
    font-weight: 600;
  }

  .pCard_text p {
    margin: 0;
    font-size: 18px;
    color: #e3f1f5;
  }

  .pCard_add {
    border-radius: 50%;
    background-color: #00c0f9;
    box-shadow: 0px 5px 24px rgba(0, 0, 0, 0.43);
    position: absolute;
    bottom: 10px; /* Mudou a posição do botão para a parte inferior */
    left: 50%;
    transform: translate(-50%, 0); /* Centraliza o botão */
    width: 60px;
    height: 60px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${floatAnimation} 2s ease-in-out infinite;
  }

  .pCard_down {
    background-color: #6225e6;
    padding: 20px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    display: flex;
    justify-content: space-between;
  }

  .pCard_down div {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 18px;
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

  .detail {
    display: flex;
    flex-direction: column;
    margin-top: 15%;
  }

  .tv {
    width: 30px;
  }

  .comments-section {
    margin-top: 15px;
    text-align: left;
  }

  .comment {
    background-color: #f1f1f1;
    margin: 5px 0;
    padding: 10px;
    border-radius: 10px;
    transition: transform 0.3s; /* Suaviza a animação */
    &:hover {
      animation: ${expandAnimation} 0.3s forwards; /* Animação ao passar o mouse */
    }
  }

  .comment strong {
    color: #333;
  }

  .bio-container {
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: #f0f4f7;
  }

  .curiosities-container {
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    background-color: #f6fcfe;
  }

  @media (max-width: 500px) {
    .pCard_card {
      width: 80%;
    }
  }
`;

const BioInput = styled.textarea`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 5px;
`;

const FollowButton = styled.button`
  background-color: ${(props) => (props.following ? "#5cb85c" : "#5cb85c")};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
`;

export default function UserCard() {
  const [image, setImage] = useState(UserImg);
  const [bio, setBio] = useState("Apaixonado por corridas e tecnologia.");
  const [isFollowing, setIsFollowing] = useState(false);
  const [isCardOn, setIsCardOn] = useState(false);
  const [followers, setFollowers] = useState(1200);
  const [comments] = useState([
    { user: "Pedro", text: "Esse perfil é incrível! Só perde pro meu kkkkkkk" },
    { user: "Ana", text: "Oque você achou sobre a útima corrida? Achei sacanagem a Mahindra nn ter ficado no pódio... :/" },
    { user: "Lucas", text: "Como que você tem tantos pontos? ME ENSINA AAAA" }
  ]);
  const [curiosities] = useState({
    favoritePilot: "De Vries",
    favoriteTrack: "São Paulo"
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
    setFollowers(isFollowing ? followers - 1 : followers + 1);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const toggleCard = () => {
    setIsCardOn(!isCardOn);
  };

  return (
    <StyleProfile>
      <div className="pCard_card">
        <div className="pCard_up" style={{ backgroundImage: `url(${image})` }}>
          <div className="pCard_text">
            <h2>RacerX</h2>
            <p>F1 Enthusiast</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ marginTop: "20px" }}
            />
          </div>
        </div>
        {isCardOn && (
          <div className="pCard_back">
            <h2>Biografia</h2>
            <div className="bio-container">
              <BioInput value={bio} onChange={handleBioChange} />
            </div>
            <div className="curiosities-container">
              <h3>Curiosidades</h3>
              <p><strong>Piloto Favorito:</strong> {curiosities.favoritePilot}</p>
              <p><strong>Pista Favorita:</strong> {curiosities.favoriteTrack}</p>
            </div>
            <div className="comments-section">
              <h3>Comentários</h3>
              {comments.map((comment, index) => (
                <div className="comment" key={index}>
                  <strong>{comment.user}:</strong> {comment.text}
                </div>
              ))}
            </div>
          </div>
          
        )}
        <div className="pCard_down">
          <div>
            <p>{followers} Seguidores</p>
            <img className="pointsIcon" src={User} alt="Ícone de TV" />
          </div>
          <FollowButton onClick={toggleFollow} following={isFollowing}>
            {isFollowing ? "Seguindo" : "Seguir"}
          </FollowButton>
          <div className="pCard_add" onClick={toggleCard}>
            <img src={Plus} alt="Adicionar" style={{height:'50%'}} />
          </div>
        </div>
      </div>
    </StyleProfile>
  );
}