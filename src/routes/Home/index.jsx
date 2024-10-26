import { MainHome } from "./styleHome";
import { Link } from "react-router-dom";
import Background from "../../assets/bc_img.png"
import Car from "../../assets/car.png"
import Chart from "../../assets/chart.png"
import PodioImg from "../../assets/podio.png"
import Controle from "../../assets/controle.png"


const racers_podio = [
    { name: 'Oliver Rowland', team: 'Nissan', ptn: '25' },
    { name: 'Pascal Wehrlein', team: 'Porsche', ptn: '18' },
    { name: 'Mitch Evans', team: 'Jaguar', ptn: '15' },

]

const Podio = ({ racer_data }) => {
    return (
        <div className="podioList">
            {racer_data.map(({ name, team, ptn }, index) => {
                console.log(name, team, ptn)
                return (
                    <div key={index} className="racer_podio">
                        <h1>{index + 1}°</h1>
                        <div style={{ display: 'flex' }}>
                            <p style={{ width: '100%' }}>{name}</p>
                            <p style={{ color: 'cyan' }}>{team}</p>
                            <p style={{ color: 'white', width: '100%' }}>{ptn} pts</p>
                        </div>
                    </div>

                );
            })}
        </div>
    );
}

export default function Home() {
    localStorage.removeItem('gameStarted')

    return (
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
                                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                                </svg>
                            </button>
                        </a>
                    </p>
                    <img src={Car} alt="" />
                </section>
                <h1 className="titulo">Pódio da Última Temporada</h1>
                <section className="raceInfo">
                    <section className="podio">
                        <div className="line"></div>
                        <a href="https://www.fiaformulae.com/en/results" target="blank">
                            <Podio racer_data={racers_podio} />
                        </a>
                    </section>
                    <section className="calendar">
                        <div className="circuito">
                            <img className="circuito_img" src="/circuit.png" alt="" />
                        </div>
                        <div className="date">
                            <h1>Próxima Corrida</h1>
                            <h2>Circuito de Puebla</h2>
                            <p>dd/mm</p>
                            <p>00:00</p>
                            <button>
                                <a href="https://www.fiaformulae.com/en/results?season=84467676-4d5d-4c97-ae07-0b7520bb95ea&race=d1551077-a122-4a70-894c-941345831ec4&tab=qualifying" target="_blank">MAIS INFORMAÇÕES</a>
                            </button>
                        </div>
                    </section>
                </section>
                <section className="car">
                    <p className="txt_car">Acompanhe a posição dos corredores em tempo real!
                        <Link to="/mapa">
                            <button className="btn_sign">
                                <p>VEJA</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                                </svg>
                            </button>
                        </Link>
                    </p>
                    <img src={PodioImg} alt=""  id="chart"/>
                </section>
                <section className="car">
                    <p className="txt_car">Veja estatísticas da pista em ao vivo!
                        <Link to="/graficos">
                            <button className="btn_sign">
                                <p>DESCUBRA</p>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                                </svg>
                            </button>
                        </Link>
                    </p>
                    <img src={Chart} alt="" id="chart"/>
                </section>
            </MainHome>
        </>
    )
}
