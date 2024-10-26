import { useState } from 'react';
import { MainPrix } from './stylePrix';
import Banner from '../PrixPredict/Banner';
import Logo_Jaguar from '../../assets/Logo_da_Jaguar_Racing.png'
import Logo_Mercedes from '../../assets/Logo_Mercedes.png'
import Logo_Audi from '../../assets/Logo_da_Audi.png'
import Logo_BMW from '../../assets/Logotipo_da_BMW.png'
import Logo_Porshe from '../../assets/Porsche_Logo.webp'
import Logo_Maserati from '../../assets/Logotio_Maserati.png'
import Logo_Avalanche from '../../assets/Logotipo_Avalanche.webp'
import Logo_DS from '../../assets/Logotipo_DS.webp'
import Logo_Mahindra from '../../assets/Logotipo_Mahindra_Racing.png'
import Logo_McLaren from '../../assets/Logotipo_McLaren.png'
import Logo_Nio from '../../assets/Logotipo_Nio.png'
import Logo_Nissan from '../../assets/Logotipo_Nissan.png'
import Logo_ABT from '../../assets/Logotipo_da_ABT.png'
import Logo_Envision from '../../assets/Logotipo_Envision.png'

function errorMensage (text){
  alert(`Opa! ${text} indisponível no momento!`)
}

const top = [
  { name: 'Joel Lima', pts: '23.481.508' },
  { name: 'Kenya R. Salinas', pts: '22.278.581' },
  { name: 'Antônio Pinto Correia', pts: '20.084.551' },
  { name: 'Evelyn Cardoso Sousa', pts: '19.945.148' },
  { name: 'Tiago Goncalves Almeida', pts: '19.481.508' },
  { name: 'Thaís Rodrigues Pinto', pts: '19.454.748' },
  { name: 'Mariana Rocha Lima', pts: '19.081.551' },
  { name: 'Kauã Costa Alves', pts: '18.848.959' },
  { name: 'Kauã Costa Alves', pts: '18.065.454' },
  { name: 'Mateus Dias Almeida', pts: '17.764.488' },
]

const teams_data = [
  { name: 'Jaguar', odds: ['3.5', '0.7'], logo: Logo_Jaguar },
  { name: 'Mercedes', odds: ['1.5', '2.7'], logo: Logo_Mercedes },
  { name: 'BMW', odds: ['7.5', '0.2'], logo: Logo_BMW },
  { name: 'Audi', odds: ['5.5', '4.7'], logo: Logo_Audi },
  { name: 'Porshe', odds: ['2.6', '9.8'], logo: Logo_Porshe },
  { name: 'ABT', odds: ['3.5', '8.7'], logo: Logo_ABT },
  { name: 'Avalanche', odds: ['7.6', '0.7'], logo: Logo_Avalanche },
  { name: 'DS', odds: ['3.5', '0.2'], logo: Logo_DS },
  { name: 'Envision', odds: ['3.5', '2.6'], logo: Logo_Envision },
  { name: 'Mahindra', odds: ['9.8', '0.7'], logo: Logo_Mahindra },
  { name: 'Maserati', odds: ['3.5', '4.7'], logo: Logo_Maserati },
  { name: 'McLaren', odds: ['1.5', '2.6'], logo: Logo_McLaren },
  { name: 'Nio', odds: ['3.5', '0.7'], logo: Logo_Nio },
  { name: 'Nissan', odds: ['2.6', '0.7'], logo: Logo_Nissan },
]

const Podio = ({ data }) => {
  return (
    <section className="podio">
      {data.map(({ name, pts }, index) => {
        return (
          <div key={index} className="placement" onClick={()=>{errorMensage('Perfil de usuário')}}>
            <h2>{index + 1}º Lugar</h2>
            <p> {name}</p>
            <div className="points-container">
              <span>{pts}</span>
              <img src="pontos.png" alt="Icone Pontos" className="pointsIcon" />
            </div>
          </div>
        );
      })}
    </section>
  );
}

const Predicts = ({ teams }) => {

  function oddConfirmation(value, reward) {
    alert(`
      Predict concluído!

      Serão descontados ${value} pontos da sua carteira até o resultado!

      Caso vença, você receberá ${reward} pontos!!!!`);
  }

  return (
    <section className="predictions">
      {teams.map(({ name, odds, logo }, index) => {
        return (
          <div key={index} className="team-card" data-team={name}>
            <div className="team-logo">
              <img className="quebra" src={logo} alt="" />
            </div>
            <div className="team-info">
              <h3>PREDICTS {name}</h3>
              <input
                type="number"
                placeholder="Quantos ePoints?"
                className="bet-amount"
                id={`bet-value-${index}`}
              />
              <div className="btns">
                <button
                  onClick={() => {
                    const betValue = parseFloat(document.getElementById(`bet-value-${index}`).value);
                    if (!isNaN(betValue)) {
                      oddConfirmation(betValue,((odds[0] * betValue)).toFixed(2));
                    }
                  }}
                  className="yes"
                >
                  sim {odds[0]}x
                </button>
                <button
                  onClick={() => {
                    const betValue = parseFloat(document.getElementById(`bet-value-${index}`).value);
                    if (!isNaN(betValue)) {
                      oddConfirmation(betValue,((odds[1] * betValue)).toFixed(2));
                    }
                  }}
                  className="no"
                >
                  não {odds[1]}x
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

const Faq = ({ data }) => {
  const [expandedCard, setExpandedCard] = useState(null);
  const toggleCard = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };
  return (
    <section className="como_funciona_container">
      <h2 className="como_funciona_titulo">FAQ</h2>

      {data.map(({title, content },index) => (
        <div key={index} className={`card transparent-card ${expandedCard === index ? 'expanded' : ''}`} onClick={() => toggleCard(index)}>
          <div className="cardTitle"><strong>{title}</strong></div>
          {expandedCard === index && (
            <div className="cardContent">{content}</div>
          )}
        </div>
      ))}
    </section>
  );
}

export default function PrixPredict() {
  localStorage.removeItem('gameStarted')

  const faq = [
    {
      title: "Escolha quanto quer apostar",
      content: "Decida quantos ePoints deseja apostar. Esses pontos funcionam como sua moeda dentro do PrixPredict."
    },
    {
      title: "Selecione uma categoria de aposta",
      content: (
        <ul style={{listStyle:'none'}}>
          <li><strong>Pódio:</strong> Aposte em quem terminará no pódio (top 3).</li>
          <li><strong>Ultrapassagem:</strong> Tente prever se um piloto específico fará mais ultrapassagens.</li>
          <li><strong>Vencedor:</strong> Aponte quem você acha que vai vencer a corrida.</li>
          <li><strong>Pit Stop:</strong> Tente acertar quem fará o pit stop mais rápido ou quantos pit stops um piloto fará.</li>
        </ul>
      )
    },
    {
      title: "Entenda as odds",
      content: "As odds são calculadas com base nas chances de determinado evento acontecer. Quanto maior o risco, maior o possível retorno dos seus ePoints."
    },
    {
      title: "Aposte sem combinações",
      content: "No PrixPredict, você só pode fazer uma aposta por vez."
    },
    {
      title: "Exemplo",
      content: "Se você tem 1000 ePoints e aposta 200 ePoints que o piloto 'X' vai vencer, e as odds estão em 2.5, você receberá 500 ePoints se acertar (200 x 2.5)."
    }
  ]

  return (
    <>
      <Banner />
      <MainPrix>
        <h1 className="podio_title">Conheça os melhores Players da Temporada</h1>
        <Podio data={top} />
        <button className="view-full-list" onClick={()=>{errorMensage('Lista')}}>Ver lista completa</button>
        <h2 className="predictions_title" style={{ textAlign: 'center' }}>Faça seus predicts</h2>
        <Predicts teams={teams_data} />
        <Faq data={faq}/>
      </MainPrix>
    </>
  );
}
