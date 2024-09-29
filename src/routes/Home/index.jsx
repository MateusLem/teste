
// CSS
import { MainHome } from "./styleHome";
// links
import { Link } from "react-router-dom";
// imagens
import Background from "../../assets/bc_img.png"
import Car from "../../assets/car.png"
import Circuit from "../../assets/circuit.png"
import Controle from "../../assets/controle.png"

export default function Home(){

    
    return(
        <>
            <MainHome>
                <img src={Background} alt="" />
                <Link className="btn" to="/game">
                    <button className="game"><img src={Controle} alt="" />GAME</button>
                </Link>
                <section className="car">
                    <p className="txt_car">Viva a emoção da Fórmula E: onde a velocidade encontra a paixão!
                       <a href="https://www.fiaformulae.com/en" target="blank">
                            <button className="btn_sign">
                                <p>ACOMPANHE</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
                                </svg>
                            </button>
                        </a>
                        </p>
                    <img src={Car} alt="" />
                </section>
                <h1 className="titulo">Última Corrida</h1>
                <section className="raceInfo">
                    <section className="podio">
                        <div className="line"></div>
                        <div className="podioList">
                            <div className="first">
                              <h1>1°</h1>
                            </div>
                            <div className="second"></div>
                            <div className="third"></div>
                        </div>
                    </section>
                    <section className="calendar">
                        <div className="circuito">
                            <img className="circuito_img" src={Circuit} alt="" />
                        </div>
                        <div className="date">
                            <h1>Próxima Corrida</h1>
                            <h2>Circuito de Puebla</h2>
                            <p>dd/mm</p>
                            <p>00:00</p>
                            <button><a href="https://www.fiaformulae.com/en/results?season=84467676-4d5d-4c97-ae07-0b7520bb95ea&race=d1551077-a122-4a70-894c-941345831ec4&tab=qualifying" target="_blank">MAIS INFORMAÇÕES</a></button>
                        </div>
                    </section>
                </section>
            </MainHome>
        </>
    )
}