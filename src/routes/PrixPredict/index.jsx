import React, { useState } from 'react';  // Importando useState
import { MainPrix } from './stylePrix';  // Importando o arquivo de estilo
import Banner from '../PrixPredict/Banner';  // Importando o Banner
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

export default function PrixPredict() {
  const [expandedCard, setExpandedCard] = useState(null);  // Estado para controlar qual card está expandido

  // Função para expandir ou contrair o card ao clicar
  const toggleCard = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);  // Alterna entre expandido e contraído
  };

  return (
    <>
      <Banner />
      <MainPrix>
        {/* <img className='quebra' src={Quebra} alt="" /> */}

        <h1 className="podio_title">Conheça os melhores Players da Temporada:</h1>

        <section className="podio">
          <div className="placement first">1º Lugar: Player A</div>
          <div className="placement second">2º Lugar: Player B</div>
          <div className="placement third">3º Lugar: Player C</div>
          <div className="placement fourth">4º Lugar: Player D</div>
          <div className="placement fifth">5º Lugar: Player E</div>
          <div className="placement sixth">6º Lugar: Player F</div>
          <div className="placement seventh">7º Lugar: Player G</div>
          <div className="placement eighth">8º Lugar: Player H</div>
          <div className="placement ninth">9º Lugar: Player I</div>
          <div className="placement tenth">10º Lugar: Player J</div>
        </section>

        <button className="view-full-list">Ver lista completa</button>


          {/* Cards das equipes */}
          <h1 className="predictions_title">Faça seus predicts:</h1>
          <section className="predictions">
            
  <div className="team-card" data-team="Jaguar">
    <div className="team-logo">
    <img className='quebra' src={Logo_Jaguar} alt="" />
    </div>
    <div className="team-info">
      <h3>PREDICTS Jaguar</h3>
      <p>Jaguar<br />para vencer a corrida:</p>
      <input type="number" placeholder="Quantos ePoints?" className="bet-amount" />
      <button className="yes">sim 3.50x</button>
      <button className="no">não 2.00x</button>
    </div>
  </div>

  <div className="team-card" data-team="Mercedes">
    <div className="team-logo">
    <img className='quebra' src={Logo_Mercedes} alt="" />
    </div>
    <div className="team-info">
      <h3>PREDICTS Mercedes</h3>
      <p>Mercedes<br />para vencer a corrida:</p>
      <input type="number" placeholder="Quantos ePoints?" className="bet-amount" />
      <button className="yes">sim 4.00x</button>
      <button className="no">não 1.90x</button>
    </div>
  </div>

  <div className="team-card" data-team="BMW">
    <div className="team-logo">
    <img className='quebra' src={Logo_BMW} alt="" />
    </div>
    <div className="team-info">
      <h3>PREDICTS BMW</h3>
      <p>BMW<br />para vencer a corrida:</p>
      <input type="number" placeholder="Quantos ePoints?" className="bet-amount" />
      <button className="yes">sim 3.80x</button>
      <button className="no">não 2.10x</button>
    </div>
  </div>

  <div className="team-card" data-team="Audi">
    <div className="team-logo">
    <img className='quebra' src={Logo_Audi} alt="" />
    </div>
    <div className="team-info">
      <h3>PREDICTS Audi</h3>
      <p>Audi<br />para vencer a corrida:</p>
      <input type="number" placeholder="Quantos ePoints?" className="bet-amount" />
      <button className="yes">sim 4.50x</button>
      <button className="no">não 1.70x</button>
    </div>
  </div>

  <div className="team-card" data-team="Porsche">
    <div className="team-logo">
    <img className='quebra' src={Logo_Porshe} alt="" />
    </div>
    <div className="team-info">
      <h3>PREDICTS Porsche</h3>
      <p>Porsche<br />para vencer a corrida:</p>
      <input type="number" placeholder="Quantos ePoints?" className="bet-amount" />
      <button className="yes">sim 3.90x</button>
      <button className="no">não 1.80x</button>
    </div>
  </div>
  <div className="team-card" data-team="Abt Cupra">
    <div className="team-logo">
      <img src={Logo_ABT} alt="" />
    </div>
    <div className="team-info">
      <h3>PREDICTS ABT CUPRA</h3>
      <p>Porsche<br />para vencer a corrida:</p>
      <input type="number" placeholder="Quantos ePoints?" className="bet-amount" />
      <button className="yes">sim 3.90x</button>
      <button className="no">não 1.80x</button>
    </div>
  </div>
  <div className="team-card" data-team="Avalanche Andretti">
    <div className="team-logo">
    <img className='quebra' src={Logo_Avalanche} alt="" />
    </div>
    <div className="team-info">
      <h3>PREDICTS Avalanche Andretti</h3>
      <p>Porsche<br />para vencer a corrida:</p>
      <input type="number" placeholder="Quantos ePoints?" className="bet-amount" />
      <button className="yes">sim 3.90x</button>
      <button className="no">não 1.80x</button>
    </div>
  </div>
  <div className="team-card" data-team="Penske">
    <div className="team-logo">
    <img className='quebra' src={Logo_DS} alt="" />
    </div>
    <div className="team-info">
      <h3>PREDICTS DS Penske</h3>
      <p>Porsche<br />para vencer a corrida:</p>
      <input type="number" placeholder="Quantos ePoints?" className="bet-amount" />
      <button className="yes">sim 3.90x</button>
      <button className="no">não 1.80x</button>
    </div>
  </div>
  <div className="team-card" data-team="Envision Racing">
    <div className="team-logo">
    <img className='quebra' src={Logo_Envision} alt="" />
    </div>
    <div className="team-info">
      <h3>PREDICTS Envision Racing</h3>
      <p>Porsche<br />para vencer a corrida:</p>
      <input type="number" placeholder="Quantos ePoints?" className="bet-amount" />
      <button className="yes">sim 3.90x</button>
      <button className="no">não 1.80x</button>
    </div>
  </div>
  <div className="team-card" data-team="Mahindra Racing">
    <div className="team-logo">
    <img className='quebra' src={Logo_Mahindra} alt="" />
    </div>
    <div className="team-info">
      <h3>PREDICTS Mahindra Racing</h3>
      <p>Porsche<br />para vencer a corrida:</p>
      <input type="number" placeholder="Quantos ePoints?" className="bet-amount" />
      <button className="yes">sim 3.90x</button>
      <button className="no">não 1.80x</button>
    </div>
  </div>
  <div className="team-card" data-team="Msg Racing">
    <div className="team-logo">
    <img className='quebra' src={Logo_Maserati} alt="" />
    </div>
    <div className="team-info">
      <h3>PREDICTS Maserati MSG Racing</h3>
      <p>Porsche<br />para vencer a corrida:</p>
      <input type="number" placeholder="Quantos ePoints?" className="bet-amount" />
      <button className="yes">sim 3.90x</button>
      <button className="no">não 1.80x</button>
    </div>
  </div>
  <div className="team-card" data-team="McLaren">
    <div className="team-logo">
    <img className='quebra' src={Logo_McLaren} alt="" />
    </div>
    <div className="team-info">
      <h3>PREDICTS Neom McLaren</h3>
      <p>Porsche<br />para vencer a corrida:</p>
      <input type="number" placeholder="Quantos ePoints?" className="bet-amount" />
      <button className="yes">sim 3.90x</button>
      <button className="no">não 1.80x</button>
    </div>
  </div>
  <div className="team-card" data-team="Nio">
    <div className="team-logo">
    <img className='quebra' src={Logo_Nio} alt="" />
    </div>
    <div className="team-info">
      <h3>PREDICTS NIO 333</h3>
      <p>Porsche<br />para vencer a corrida:</p>
      <input type="number" placeholder="Quantos ePoints?" className="bet-amount" />
      <button className="yes">sim 3.90x</button>
      <button className="no">não 1.80x</button>
    </div>
  </div>
  <div className="team-card" data-team="Nissan">
    <div className="team-logo">
    <img className='quebra' src={Logo_Nissan} alt="" />
    </div>
    <div className="team-info">
      <h3>PREDICTS Nissan</h3>
      <p>Porsche<br />para vencer a corrida:</p>
      <input type="number" placeholder="Quantos ePoints?" className="bet-amount" />
      <button className="yes">sim 3.90x</button>
      <button className="no">não 1.80x</button>
    </div>
  </div>


  
</section>

        <section className="como_funciona_container">

          <h2 className="como_funciona_titulo">Tem dúvidas de como funciona o PrixPredict:</h2>

          {/* Card 1 */}
          <div className={`card transparent-card ${expandedCard === 1 ? 'expanded' : ''}`} onClick={() => toggleCard(1)}>
            <div className="cardTitle"><strong>Escolha quanto quer apostar:</strong></div>
            {expandedCard === 1 && (
              <div className="cardContent">
                Decida quantos ePoints deseja apostar. Esses pontos funcionam como sua moeda dentro do PrixPredict.
              </div>
            )}
          </div>

          {/* Card 2 */}
          <div className={`card transparent-card ${expandedCard === 2 ? 'expanded' : ''}`} onClick={() => toggleCard(2)}>
            <div className="cardTitle"><strong>Selecione uma categoria de aposta:</strong></div>
            {expandedCard === 2 && (
              <div className="cardContent">
                <ul>
                  <li><strong>Pódio:</strong> Aposte em quem terminará no pódio (top 3).</li>
                  <li><strong>Ultrapassagem:</strong> Tente prever se um piloto específico fará mais ultrapassagens.</li>
                  <li><strong>Vencedor:</strong> Aponte quem você acha que vai vencer a corrida.</li>
                  <li><strong>Pit Stop:</strong> Tente acertar quem fará o pit stop mais rápido ou quantos pit stops um piloto fará.</li>
                </ul>
              </div>
            )}
          </div>

          {/* Card 3 */}
          <div className={`card transparent-card ${expandedCard === 3 ? 'expanded' : ''}`} onClick={() => toggleCard(3)}>
            <div className="cardTitle"><strong>Entenda as odds:</strong></div>
            {expandedCard === 3 && (
              <div className="cardContent">
                As odds são calculadas com base nas chances de determinado evento acontecer. Quanto maior o risco, maior o possível retorno dos seus ePoints.
              </div>
            )}
          </div>

          {/* Card 4 */}
          <div className={`card transparent-card ${expandedCard === 4 ? 'expanded' : ''}`} onClick={() => toggleCard(4)}>
            <div className="cardTitle"><strong>Aposte sem combinações:</strong></div>
            {expandedCard === 4 && (
              <div className="cardContent">
                No PrixPredict, você só pode fazer uma aposta por vez.
              </div>
            )}
          </div>

          {/* Card 5 */}
          <div className={`card transparent-card ${expandedCard === 5 ? 'expanded' : ''}`} onClick={() => toggleCard(5)}>
            <div className="cardTitle"><strong>Exemplo:</strong></div>
            {expandedCard === 5 && (
              <div className="cardContent">
                Se você tem 1000 ePoints e aposta 200 ePoints que o piloto "X" vai vencer, e as odds estão em 2.5, você receberá 500 ePoints se acertar (200 x 2.5).
              </div>
            )}
          </div>
        </section>
      </MainPrix>
    </>
  );
}
