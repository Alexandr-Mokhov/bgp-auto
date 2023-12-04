import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { resetScroll } from '../../utils/resetScroll';
import './Header.css';

export default function Header({ isInscribed, date, time }) {
  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo-container" to="/" onClick={resetScroll}>
          <div className="header__logo" />
          <div className="header__title-container">
            <p className="header__title">BGP AUTO</p>
            <p className="header__subtitle">AUTOWERKSTATT</p>
          </div>
        </Link>
        <div className="header__info-container">
          <div className="header__info">
            <Link className="header__reception" to="/reception" onClick={resetScroll}>
              <div className="header__reception-container">
                {isInscribed ?
                  <div>
                    <p className="header__reception-text">Вы записаны на сервис</p>
                    <p className="header__reception-text">{date && date.split('-').reverse().join('-')} в {time}</p>
                  </div> :
                  'Записаться на сервис'
                }
                <div className={`header__reception-icon ${isInscribed ? 'header__reception-icon_inscribed' : 'header__reception-icon_not-inscribed'}`} />
              </div>
            </Link>
            <Link className="header__address-container" to="/address" onClick={resetScroll}>
              <div className="header__address-logo" />
              <div>
                <p className="header__address-name">Челябинск, Валдайская 17а</p>
                <p className="header__address-viewing">Посмотреть на карте</p>
              </div>
            </Link>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  )
}