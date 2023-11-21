import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
	return (
		<nav className="navigation">
			<ul className="navigation__list">
				<li>
					<NavLink to="/about-as" className={
            ({ isActive }) => `navigation__link ${isActive && "navigation__link_type_active"}`
					}>О НАС</NavLink>
				</li>
				<li>
					<NavLink to="/services" className={
            ({ isActive }) => `navigation__link ${isActive && "navigation__link_type_active"}`
					}>УСЛУГИ</NavLink>
				</li>
				<li>
					<NavLink to="/prices" className={
            ({ isActive }) => `navigation__link ${isActive && "navigation__link_type_active"}`
					}>ПРАЙС</NavLink>
				</li>
				<li>
					<NavLink to="/promotions" className={
            ({ isActive }) => `navigation__link ${isActive && "navigation__link_type_active"}`
					}>АКЦИИ</NavLink>
				</li>
				<li>
					<NavLink to="/photos" className={
            ({ isActive }) => `navigation__link ${isActive && "navigation__link_type_active"}`
					}>ФОТО</NavLink>
				</li>
				<li>
					<NavLink to="/contacts" className={
            ({ isActive }) => `navigation__link ${isActive && "navigation__link_type_active"}`
					}>КОНТАКТЫ</NavLink>
				</li>
			</ul>
		</nav>
	)
}