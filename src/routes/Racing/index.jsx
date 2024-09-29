import Card from "../../components/Card";
import { MainRace } from "./styleRace";
import FacebookPageEmbed from "../../components/Embed";

import Japan from '../../assets/japao.png'
import Brasil from '../../assets/brasil.png'
import Alemanha from '../../assets/alemanha.png'
import China from '../../assets/china.png'
import Eua from '../../assets/eua.png'
import Diriyah from '../../assets/diriyah.png'
import Inglaterra from '../../assets/inglaterra.png'
import Italia from '../../assets/italia.png'
import Mexico from '../../assets/mexico.png'
import Monaco from '../../assets/monaco.png'
import Parceiro from '../../assets/parceiro.png'

export default function Racing() {

    const corridaData = [
      {
        imageSrc: Mexico,
        title: "CDMX",
        videoUrl: "https://www.youtube.com/embed/XBQOog9QugI?si=X1JjryMedsgjt8Xd",
      },
      {
        imageSrc: Diriyah,
        title: "Diriyah",
        videoUrl: "https://www.youtube.com/embed/_jNgALMfYFc?si=GqBvT5LDr4hdvk3P",
      },
      {
        imageSrc: Brasil,
        title: "SP",
        videoUrl: "https://www.youtube.com/embed/XFY6OaAE-zg?si=5phINE_GPRyIrmkL",
      },
      {
        imageSrc: Japan,
        title: "Tóquio",
        videoUrl: "https://www.youtube.com/embed/FLMLjZyTeZ8?si=tPj02BY-tpcRGj-T",
      },
      {
        imageSrc: Italia,
        title: "Misano",
        videoUrl: "https://www.youtube.com/embed/UNLyFKQyAME?si=6W60IN-TgA2wqDKl",
      },
      {
        imageSrc: Monaco,
        title: "Mônaco",
        videoUrl: "https://www.youtube.com/embed/wPtoSGoDGG0?si=oMAzxVhA3vZrK2ua",
      },
      {
        imageSrc: Alemanha,
        title: "Berlim",
        videoUrl: "https://www.youtube.com/embed/ZUTiqPcJMj8?si=yxnbkP6R-TkXcQI4",
      },
      {
        imageSrc: China,
        title: "Xangai",
        videoUrl: "https://www.youtube.com/embed/MEh7TfKuSrc?si=18qYKt428VEJyfRY",
      },
      {
        imageSrc: Eua,
        title: "Portland",
        videoUrl: "https://www.youtube.com/embed/c429s2OhOPk?si=_-0rTplWA-KvjDT7",
      },
      {
        imageSrc: Inglaterra,
        title: "Londres",
        videoUrl: "https://www.youtube.com/embed/D18kgT_I58g?si=rbd_6sR3TZIndcfR",
      },
      
    ];

    return (
      <MainRace>
        <div className="logo">
            <a href="https://www.grandepremio.com.br/#google_vignettehttps://www.grandepremio.com.br/#google_vignette" target="_blank"><img src={Parceiro} alt="" /></a>
        </div>
        <div className="cards-container">
          {corridaData.map((corrida, index) => (
            <Card
              key={index}
              imageSrc={corrida.imageSrc}
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
  