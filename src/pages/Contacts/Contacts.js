import { useState } from 'react';
import photoIvan from '../../images/basalygin-ivan.jpg';
import photoDmitry from '../../images/goncharov-dmitry.jpg';
import photoAlexey from '../../images/plisovskikh-alexey.jpg';
import './Contacts.css';

export default function Contacts() {
  const [visiblePhoneBasalygin, setVisiblePhoneBasalygin] = useState(false);
  const [visiblePhoneGonchrov, setVisiblePhoneGonchrov] = useState(false);
  const [visiblePhonePlisovskikh, setVisiblePhonePlisovskikh] = useState(false);

  function handleClick(evt) {
    switch (evt.target.id) {
      case '1': setVisiblePhoneBasalygin(!visiblePhoneBasalygin);
      break;
      case '2': setVisiblePhoneGonchrov(!visiblePhoneGonchrov);
      break;
      default : setVisiblePhonePlisovskikh(!visiblePhonePlisovskikh);
    }
  }

  return (
    <main className="contacts">
      <div className="contacts__background" />
      <h1 className="contacts__title">Свяжитесь с нами по интересующим Вас вопросам</h1>
      <p className="contacts__work">График работы</p>
      <p className="contacts__work">ПН - ПТ -&gt; 09:00 - 19:00</p>
      <p className="contacts__work">СБ - ВС -&gt; 09:00 - 18:00</p>
      <ul className="contacts__masters">
        <li className="contacts__master">
          <img className="contacts__photo" src={photoIvan} alt="Басалыгин Иван, моторист" />
          <h2 className="contacts__name">Басалыгин Иван</h2>
          <h2 className="contacts__job">моторист</h2>
          <a href="https://vk.com/ibasalygin" target="_blank" rel="noreferrer" className="contacts__connection">Сообщение в VK</a>
          <div className="contacts__connection" id="1" onClick={handleClick}>{visiblePhoneBasalygin ? '+7 (951) 814-96-59' : 'Показать телефон'}</div>
        </li>
        <li className="contacts__master">
          <img className="contacts__photo" src={photoDmitry} alt="Гончаров Дмитрий, механик" />
          <h2 className="contacts__name">Гончаров Дмитрий</h2>
          <h2 className="contacts__job">механик</h2>
          <a href="https://vk.com/dimagonchrov" target="_blank" rel="noreferrer" className="contacts__connection">Сообщение в VK</a>
          <div className="contacts__connection" id="2" onClick={handleClick}>{visiblePhoneGonchrov ? '+7 (982) 114-11-94' : 'Показать телефон'}</div>
        </li>
        <li className="contacts__master">
          <img className="contacts__photo" src={photoAlexey} alt="Плисовских Алексей, диагност" />
          <h2 className="contacts__name">Плисовских Алексей</h2>
          <h2 className="contacts__job">диагност</h2>
          <a href="https://vk.com/shifer96" target="_blank" rel="noreferrer" className="contacts__connection">Сообщение в VK</a>
          <div className="contacts__connection" id="3" onClick={handleClick}>{visiblePhonePlisovskikh ? '+7 (902) 605-47-42' : 'Показать телефон'}</div>
        </li>
      </ul>
    </main>
  )
}