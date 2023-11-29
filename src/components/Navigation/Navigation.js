import { NavLink } from 'react-router-dom';
import { resetScroll } from '../../utils/resetScroll';
import './Navigation.css';

export default function Navigation() {
	return (
		<nav className="navigation">
			<ul className="navigation__list">
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
			</ul>
		</nav>
	)
}