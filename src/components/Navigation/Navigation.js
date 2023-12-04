import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { resetScroll } from '../../utils/resetScroll';
import './Navigation.css';

export default function Navigation() {
  const [navMenu, setNavMenu] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!navMenu) return;
    function handleClickOverlay(evt) {
      if (evt.target.className.indexOf('navigation__overlay') === 0) {
        setNavMenu(!navMenu);
      }
    }
    document.addEventListener('mousedown', handleClickOverlay);
    return () => {
      document.removeEventListener('mousedown', handleClickOverlay);
    }
  }, [navMenu])

  useEffect(() => {
    setNavMenu(false);
  }, [pathname]);

  return (
    <div className="navigation">
      <button className={
        `navigation__button-menu
          ${navMenu ? "navigation__button-menu_type_close" : "navigation__button-menu_type_open"}
          `} onClick={() => setNavMenu(!navMenu)} />
      <nav className={`navigation__container ${!navMenu && "navigation__container_type_hide"}`}>
        <ul className="navigation__links">
          <li>
            <NavLink to="/about-as" onClick={resetScroll} className={
              ({ isActive }) => `navigation__link ${isActive && "navigation__link_type_active"}`
            }>О НАС</NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={resetScroll} className={
              ({ isActive }) => `navigation__link ${isActive && "navigation__link_type_active"}`
            }>УСЛУГИ</NavLink>
          </li>
          <li>
            <NavLink to="/prices" onClick={resetScroll} className={
              ({ isActive }) => `navigation__link ${isActive && "navigation__link_type_active"}`
            }>ПРАЙС</NavLink>
          </li>
          <li>
            <NavLink to="/promotions" onClick={resetScroll} className={
              ({ isActive }) => `navigation__link ${isActive && "navigation__link_type_active"}`
            }>АКЦИИ</NavLink>
          </li>
          <li>
            <NavLink to="/blog" onClick={resetScroll} className={
              ({ isActive }) => `navigation__link ${isActive && "navigation__link_type_active"}`
            }>БЛОГ</NavLink>
          </li>
          <li>
            <NavLink to="/contacts" onClick={resetScroll} className={
              ({ isActive }) => `navigation__link ${isActive && "navigation__link_type_active"}`
            }>КОНТАКТЫ</NavLink>
          </li>
          {navMenu &&
            <li>
              <NavLink to="/address" onClick={resetScroll} className={
                ({ isActive }) => `navigation__link ${isActive && "navigation__link_type_active"}`
              }>АДРЕС</NavLink>
            </li>}
        </ul>
      </nav>
      <div className={`${navMenu && "navigation__overlay"}`} />
    </div>
  )
}