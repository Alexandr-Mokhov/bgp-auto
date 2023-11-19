import './Services.css';
import engine from '../../images/service-engine.png';
import chassis from '../../images/service-chassis.png';
import transmission from '../../images/service-transmission.png';
import to from '../../images/service-to.png';
import diagnostics from '../../images/service-diagnostics.png';

export default function Services() {
  return (
    <main className="services">
      <div className="services__background" />
      <section className="services__grid">
        <div className="services__grid-item">
          <img className="services__grid-img" src={engine} alt="Ремонт двигателя" />
          <div className="services__grid-circel" />
          <h1 className="services__grid-title">Ремонт двигателя</h1>
        </div>
        <div className="services__grid-item">
          <img className="services__grid-img" src={chassis} alt="Ремонт ходовой" />
          <div className="services__grid-circel" />
          <h2 className="services__grid-title">Ремонт ходовой</h2>
        </div>
        <div className="services__grid-item">
          <img className="services__grid-img" src={transmission} alt="Ремонт КПП" />
          <div className="services__grid-circel" />
          <h2 className="services__grid-title">Ремонт КПП</h2>
        </div>
        <div className="services__grid-item">
          <img className="services__grid-img" src={to} alt="Плановое ТО" />
          <div className="services__grid-circel" />
          <h2 className="services__grid-title">Плановое ТО</h2>
        </div>
        <div className="services__grid-item">
          <img className="services__grid-img" src={diagnostics} alt="Диагностика" />
          <div className="services__grid-circel" />
          <h2 className="services__grid-title">Диагностика</h2>
        </div>
      </section>
    </main>
  )
}