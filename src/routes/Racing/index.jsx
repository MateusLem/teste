import Card from "../../components/Card";
import { MainRace } from "./styleRace";
import FacebookPageEmbed from "../../components/FacebookPageEmbed";
import countriesData from '../../data/countries.json'
import Parceiro from '../../assets/parceiro.png'

export default function Racing() {
  localStorage.removeItem('gameStarted') 

    return (
      <MainRace>
        <div className="logo">
            <a href="https://www.grandepremio.com.br/#google_vignettehttps://www.grandepremio.com.br/#google_vignette" target="_blank">
              <img src={Parceiro} alt="" />
            </a>
        </div>
        <div className="cards-container">
          {countriesData.map((corrida, index) => (
            <Card
              key={index}
              imageSrc={`/${corrida.imageSrc}.png`}
              title={corrida.title}
              videoUrl={corrida.videoUrl}
            />
          ))}
        </div>



        <div className="parceiro">
            <div className="info">
                <h1>Prepare-se para acelerar! Assista às segundas corridas, treinos livres e qualificações na Grande Prêmio e fique por dentro de tudo que acontece nas pistas!</h1>
                <a href="https://www.youtube.com/watch?v=AbQyzkaSH2I&list=PLULYLQYUzB5o4WA6oqGkMfpXXvMtLoAU6&index=61" target='_blank' className="btn"><button className="neon">ASSISTA</button></a>
            </div>
            <div className="face">
                <FacebookPageEmbed/>
            </div>
        </div>

      </MainRace>
    );
}
  