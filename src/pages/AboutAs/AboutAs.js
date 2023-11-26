import photoIvan from '../../images/basalygin-ivan.jpg';
import photoDmitry from '../../images/goncharov-dmitry.jpg';
import photoAlexey from '../../images/plisovskikh-alexey.jpg';
import './AboutAs.css';

export default function AboutAs() {
  return (
    <main className="about-as">
      <div className="about-as__background" />
      <div className="about-as__container">
        <h1 className="about-as__title">Добро пожаловать в автосервис BGP AUTO!</h1>
        <ul className="about-as__masters">
          <li>
            <a href="https://vk.com/ibasalygin" target="_blank" rel="noreferrer" className="about-as__master">
              <img className="about-as__photo" src={photoIvan} alt="Басалыгин Иван, моторист" />
              <h2 className="about-as__name">Басалыгин Иван</h2>
              <h2 className="about-as__job">моторист</h2>
            </a>
          </li>
          <li>
            <a href="https://vk.com/dimagonchrov" target="_blank" rel="noreferrer" className="about-as__master">
              <img className="about-as__photo" src={photoDmitry} alt="Гончаров Дмитрий, механик" />
              <h2 className="about-as__name">Гончаров Дмитрий</h2>
              <h2 className="about-as__job">механик</h2>
            </a>
          </li>
          <li>
            <a href="https://vk.com/shifer96" target="_blank" rel="noreferrer" className="about-as__master">
              <img className="about-as__photo" src={photoAlexey} alt="Плисовских Алексей, диагност" />
              <h2 className="about-as__name">Плисовских Алексей</h2>
              <h2 className="about-as__job">диагност</h2>
            </a>
          </li>
        </ul>
        <ul className="about-as__goals">
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