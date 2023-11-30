import photoAlexey from '../../images/master-plisovskikh.jpg';
import photoDmitry from '../../images/master-goncharov.jpg';
import photoIvan from '../../images/master-basalygin.jpg';
import './AboutAs.css';

export default function AboutAs() {
  return (
    <main className="about-as" aria-label="Наши мастера и ценности">
      <div className="about-as__background" />
      <div className="about-as__container">
        <h1 className="about-as__title">Добро пожаловать в автосервис BGP&nbsp;AUTO!</h1>
        <ul className="about-as__masters">
          <li>
            <a href="https://vk.com/ibasalygin" target="_blank" rel="noreferrer" className="about-as__master">
              <img className="about-as__photo" src={photoIvan} alt="Басалыгин Иван, моторист" />
              <p className="about-as__name">Басалыгин Иван</p>
              <p className="about-as__job">моторист</p>
            </a>
          </li>
          <li>
            <a href="https://vk.com/dimagonchrov" target="_blank" rel="noreferrer" className="about-as__master">
              <img className="about-as__photo" src={photoDmitry} alt="Гончаров Дмитрий, механик" />
              <p className="about-as__name">Гончаров Дмитрий</p>
              <p className="about-as__job">механик</p>
            </a>
          </li>
          <li>
            <a href="https://vk.com/shifer96" target="_blank" rel="noreferrer" className="about-as__master">
              <img className="about-as__photo" src={photoAlexey} alt="Плисовских Алексей, диагност" />
              <p className="about-as__name">Плисовских Алексей</p>
              <p className="about-as__job">диагност</p>
            </a>
          </li>
        </ul>
        <ul className="about-as__tagets">
          <li className="about-as__taget">
            Мы за честность и открытость - любой клиент может увидеть как мы работаем и присутствовать при ремонте.
          </li>
          <li className="about-as__taget">
            Мы несем личную ответственность за качество выполняемого ремонта и это отличная мотивация делать все качественно.
          </li>
          <li className="about-as__taget">
            За вами выбор - установить ваши запчасти или положиться на нас за покупку запчастей и материалов.
          </li>
          <li className="about-as__taget">
            Предложим варианты запчастей от бюджетных до оригинальных по вашему предпочтению.
          </li>
          <li className="about-as__taget">
            Имеем опыт работы в диллерских сервисных центрах VAG группы.
          </li>
        </ul>
      </div>
    </main >
  )
}