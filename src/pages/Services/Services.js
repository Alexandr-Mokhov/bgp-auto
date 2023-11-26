import { Link } from 'react-router-dom';
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
      <div className="services__container">
        <section className="services__grid">
          <Link className="services__grid-item" to="/prices/engine">
            <img className="services__grid-img" src={engine} alt="Ремонт двигателя" />
            <div className="services__grid-circel" />
            <h1 className="services__grid-title">Ремонт двигателя</h1>
          </Link>
          <Link className="services__grid-item" to="/prices/chassis">
            <img className="services__grid-img" src={chassis} alt="Ремонт ходовой" />
            <div className="services__grid-circel" />
            <h2 className="services__grid-title">Ремонт ходовой</h2>
          </Link>
          <Link className="services__grid-item" to="/prices/transmission">
            <img className="services__grid-img" src={transmission} alt="Ремонт КПП" />
            <div className="services__grid-circel" />
            <h2 className="services__grid-title">Ремонт КПП</h2>
          </Link>
          <Link className="services__grid-item" to="/prices/to">
            <img className="services__grid-img" src={to} alt="Плановое ТО" />
            <div className="services__grid-circel" />
            <h2 className="services__grid-title">Плановое ТО</h2>
          </Link>
          <Link className="services__grid-item" to="/prices/diagnostics">
            <img className="services__grid-img" src={diagnostics} alt="Диагностика" />
            <div className="services__grid-circel" />
            <h2 className="services__grid-title">Диагностика</h2>
          </Link>
        </section>
      </div>
    </main>
  )
}