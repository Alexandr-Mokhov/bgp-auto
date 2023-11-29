import { useState } from 'react';
import photoAlexey from '../../images/master-plisovskikh.jpg';
import photoDmitry from '../../images/master-goncharov.jpg';
import photoIvan from '../../images/master-basalygin.jpg';
import './Contacts.css';

export default function Contacts() {
  const [visiblePhonePlisovskikh, setVisiblePhonePlisovskikh] = useState(false);
  const [visiblePhoneBasalygin, setVisiblePhoneBasalygin] = useState(false);
  const [visiblePhoneGonchrov, setVisiblePhoneGonchrov] = useState(false);

  function handleClick(evt) {
    switch (evt.target.id) {
      case '1': setVisiblePhoneBasalygin(!visiblePhoneBasalygin);
        break;
      case '2': setVisiblePhoneGonchrov(!visiblePhoneGonchrov);
        break;
      default: setVisiblePhonePlisovskikh(!visiblePhonePlisovskikh);
    }
  }

  return (
    <main className="contacts" aria-label="Наши контакты">
      <div className="contacts__background" />
      <div className="contacts__container">
        <h1 className="contacts__title">Свяжитесь с нами по интересующим Вас вопросам</h1>
        <p className="contacts__work">График работы</p>
        <p className="contacts__work">ПН - ПТ -&gt; 09:00 - 19:00</p>
        <p className="contacts__work">СБ - ВС -&gt; 09:00 - 18:00</p>
        <ul className="contacts__masters">
          <li className="contacts__master">
            <img className="contacts__photo" src={photoIvan} alt="Басалыгин Иван, моторист" />
            <p className="contacts__name">Басалыгин Иван</p>
            <p className="contacts__job">моторист</p>
            <a href="https://vk.com/ibasalygin" target="_blank" rel="noreferrer" className="contacts__connection">Сообщение в VK</a>
            <div className="contacts__connection" id="1" onClick={handleClick}>{visiblePhoneBasalygin ? '+7 (951) 814-96-59' : 'Показать телефон'}</div>
          </li>
          <li className="contacts__master">
            <img className="contacts__photo" src={photoDmitry} alt="Гончаров Дмитрий, механик" />
            <p className="contacts__name">Гончаров Дмитрий</p>
            <p className="contacts__job">механик</p>
            <a href="https://vk.com/dimagonchrov" target="_blank" rel="noreferrer" className="contacts__connection">Сообщение в VK</a>
            <div className="contacts__connection" id="2" onClick={handleClick}>{visiblePhoneGonchrov ? '+7 (982) 114-11-94' : 'Показать телефон'}</div>
          </li>
          <li className="contacts__master">
            <img className="contacts__photo" src={photoAlexey} alt="Плисовских Алексей, диагност" />
            <p className="contacts__name">Плисовских Алексей</p>
            <p className="contacts__job">диагност</p>
            <a href="https://vk.com/shifer96" target="_blank" rel="noreferrer" className="contacts__connection">Сообщение в VK</a>
            <div className="contacts__connection" id="3" onClick={handleClick}>{visiblePhonePlisovskikh ? '+7 (902) 605-47-42' : 'Показать телефон'}</div>
          </li>
        </ul>
      </div>
    </main>
  )
}