import { MainPrix } from './stylePrix';
import Banner from '../PrixPredict/Banner'

export default function PrixPredict() {

    return (
        <>
            <Banner />
            <MainPrix>

            <h2 className="podia_titulo">Melhores players da temporada:</h2>
            <section className="podio">
                        <div className="line"></div>
                        <div className="podioList">
                            <div className="first">
                                <p>teste</p>
                            </div>
                            <div className="second"></div>
                            <div className="third"></div>
                            
                        </div>
                    </section>
        
        <h1 className="titulo">Tem dúvidas sobre o PrixPredict?</h1>

        <section className="como_funciona_container">
          <h2 className="como_funciona_titulo">Como Funciona o PrixPredict</h2>
          <div className="como_funciona_texto">
            
            O PrixPredict é uma plataforma de apostas exclusiva para o universo da Fórmula E, onde você pode usar seus ePoints para prever diferentes resultados das corridas. Aqui está como funciona:
            <br /><br />
            
            <strong>Escolha quanto quer apostar:</strong> Decida quantos ePoints deseja apostar. Esses pontos funcionam como sua moeda dentro do PrixPredict.
            <br /><br />
            
            <strong>Selecione uma categoria de aposta:</strong>
            <ul>
              <li><strong>Pódio:</strong> Aposte em quem terminará no pódio (top 3).</li>
              <li><strong>Ultrapassagem:</strong> Tente prever se um piloto específico fará mais ultrapassagens.</li>
              <li><strong>Vencedor:</strong> Aponte quem você acha que vai vencer a corrida.</li>
              <li><strong>Pit Stop:</strong> Tente acertar quem fará o pit stop mais rápido ou quantos pit stops um piloto fará.</li>
            </ul>
            
            <strong>Entenda as odds:</strong> As odds são calculadas com base nas chances de determinado evento acontecer. Quanto maior o risco, maior o possível retorno dos seus ePoints.
            <br /><br />
            <strong>Aposte sem combinações:</strong> No PrixPredict, você só pode fazer uma aposta por vez.
            <br /><br />
            <strong>Exemplo:</strong> Se você tem 1000 ePoints e aposta 200 ePoints que o piloto "X" vai vencer, e as odds estão em 2.5, você receberá 500 ePoints se acertar (200 x 2.5).
          </div>
        </section>
            </MainPrix>
        </>
    );
}
