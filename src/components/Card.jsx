import React, { useState } from "react";
import styled from "styled-components";
import Play from "../assets/play.png"
import Close from "../assets/close.png"

// Estilização do Modal
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.733);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }

  .close-btn {
    background-color: transparent;
    padding: 10px 20px;
    border: none;
    margin-bottom: 30%;
    cursor: pointer;
  }

  .close-btn img{
    width: 30px;
    height: 30px;
  }

  .close-btn img:hover {
    border-radius: 50%;
    background-color: #180f57;
  }
`;



// Estilização do Card
const Carta = styled.div`
 .size{
    background-color: #190f57;
    transition: transform 0.3s ease;
 }

 .size:hover{
    transform: translateY(-10px);
 }

 img{
    width: 100%;
 }

  .card__title{
    font-family: "Rajdhani", sans-serif;
    color: #DC00FE;
    align-self: center;
    margin-left: 2%;
  }

  .card__btn{
    cursor: pointer;
    background-color: transparent;
    border-style: none;
    margin: 1%;
  }

  .card__btn img{
    width: 35px;
    height: 35px;
  }

  .card__content{
    display: flex;
    justify-content: space-between;
  }

`;

// Componente Card
export default function Card({ imageSrc, title, videoUrl }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Carta>
        <div className="size">
            <img src={imageSrc} alt={title} />
            <div className="card__content">
            <h2 className="card__title">{title}</h2>
            <button className="card__btn" onClick={handleOpenModal}>
                <img src= {Play} alt="" />
            </button>
            </div>
        </div>
      </Carta>
    
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button className="close-btn" onClick={handleCloseModal}>
            <img src={Close} alt="" />
          </button>
        </Modal>
      )}
    </>
  );
}

