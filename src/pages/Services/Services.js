import ServicesElement from '../../components/ServicesElement/ServicesElement';
import { services } from '../../constants';
import './Services.css';

export default function Services() {
  
  function createServicesList() {
    return services.map((item, i) => <ServicesElement
      path={item.path}
      srcImage={item.srcImage}
      elementTitle={item.elementTitle}
      key={i}
    />)
  }

  return (
    <main className="services">
      <div className="services__background" />
      <div className="services__container">
        <section className="services__grid">
          {createServicesList()}
        </section>
      </div>
    </main>
  )
}
