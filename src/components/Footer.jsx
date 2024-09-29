import React, { useState } from "react";
// CSS
import { FootFooter } from "../styleComponents"
import { Modal } from "../styleComponents"
// imagens
import Close from "../assets/close.png"
import LogoFiap from "../assets/fiap.png"
import LogoMahindra from "../assets/LogoMahindra2.png"
import LogoParceiro from "../assets/parceiro.png"
import imgFooter from "../assets/imgFooter.png"
import IconInsta from "../assets/instagram.png"
import IconGit from "../assets/github.png"

export default function Footer(){
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleOpenModal = (content) => {
        setModalContent(content);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleLinkClick = (e, content) => {
        e.preventDefault(); 
        handleOpenModal(content);
    };

    return(
        <>
            <FootFooter>
                <img className="background" src={imgFooter} alt="" />
                <h1 className="txtFoot">PARCEIROS</h1>
                <div className="footer">
                    <div className="logosFooter">
                        <div className="linha"></div>
                        <a href="https://www.grandepremio.com.br/#:~:text=Explore%20no%20Grande%20Pr%C3%AAmio%20as%20not%C3%ADcias%20mais%20recentes%20e" target="blank">
                            <img src={LogoParceiro} alt="grande prêmio" />
                        </a>
                        <a href="https://www.mahindraracing.com/" target="blank">
                            <img className="mahindra" src={LogoMahindra} alt="mahindra" />
                        </a>
                        <a href="https://www.fiap.com.br/" target="blank">
                            <img src={LogoFiap} alt="fiap" />
                        </a>
                    </div>
                    <div className="contato">
                        <a href="#" onClick={(e) => handleLinkClick(e,
                            <>
                                <p>A Next Future é uma empresa dedicada à inovação e ao futuro da tecnologia. Atualmente, estamos desenvolvendo um projeto em parceria com a Mahindra, focado em criar um site dinâmico e interativo para atrair mais fãs para a Fórmula E. Com essa plataforma, buscamos aproximar o público desse emocionante esporte, proporcionando informações e conteúdos exclusivos para a comunidade de fãs.</p>
                                <p>Nosso time é composto por profissionais talentosos, cada um trazendo uma expertise única:</p>
                                <ul>
                                    <li><strong>554375-Ana Laura:</strong> Líder e designer com criatividade e visão.</li>
                                    <li><strong> 556727-Murilo Cordeiro:</strong> Responsável pelo desenvolvimento front-end, garantindo uma experiência visual moderna.</li>
                                    <li><strong>(555469)Vitor Augusto e (557170)Geronimo Augusto:</strong> Comandam o back-end, assegurando que tudo funcione perfeitamente.</li>
                                    <li><strong>557803-Mateus Leme:</strong> Oferece suporte técnico, garantindo o bom funcionamento da plataforma.</li>
                                </ul>
                                <p>Juntos, estamos construindo o futuro dos esportes eletrizantes!</p>
                             </>)}>
                            SOBRE NÓS
                        </a>
                        <a href="#" onClick={(e) => handleLinkClick(e, <>
                            <h1>CONVERSE COM NOSSA EQUIPE</h1>
                            <ul>
                                <li><a href="https://www.linkedin.com/in/ana-laura-torres-loureiro-b85ba1298/" target="_blank">Líder e designer</a></li>
                                <li><a href="https://www.linkedin.com/in/murilocordeirof/" target="_blank">Dev Front-End</a></li>
                                <li><a href="https://www.linkedin.com/in/vitor-augusto-4bb6a72b7/" target="_blank">Dev IoT</a></li>
                                <li><a href="https://www.linkedin.com/in/geronimo-augusto-99643a2b8/" target="_blank">Dev Back-End</a></li>
                                <li><a href="https://www.linkedin.com/in/mateus-da-costa-leme-35a5ab235/" target="_blank">Suport</a></li>
                            </ul>
                        
                        
                        
                        
                        </>)}>
                            FALE CONOSCO
                        </a>
                        {showModal && (
                            <Modal className="Modal" onClose={handleCloseModal}>
                                <p>{modalContent}</p>
                                <button className="close-btn" onClick={handleCloseModal}>
                                    <img src={Close} alt="close modal" />
                                </button>
                            </Modal>
                        )}
                    </div>
                </div>
                <hr />
                <div className="base">
                    <div className="icons">
                        <a href="https://www.instagram.com/nxtftres?igsh=MWEzcXFxdHFkNHhvMA==" target="blank">
                            <img src={IconInsta} alt="Instagram" />
                        </a>
                        <a href="https://github.com/NEXT-FUTURE-FIAP" target="blank">
                            <img src={IconGit} alt="GitHub" />
                        </a>
                    </div>
                    <p>@Site apenas para fins acadêmicos</p>
                </div>
            </FootFooter>
        </>
    );
}
