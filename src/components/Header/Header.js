import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

export default function Header() {
	return (
		<header className="header">
			<Link className="header__logo-container" to="/">
				<div className="header__logo" />
				<div>
					<p className="header__title">BGP&nbsp;AUTO</p>
					<p className="header__subtitle">АВТОСЕРВИС</p>
				</div>
			</Link>
			<div className="header__container">
				<div className="header__info">
					<Link className="header__reception" to="/reception">
						Записаться
						<div className="header__reception-icon" />
					</Link>
					<Link className="header__address-container" to="/address">
						<div className="header__address-logo" />
						<div>
							<p className="header__address-name">Челябинск, Валдайская 17а</p>
							<p className="header__address-viewing">Посмотреть на карте</p>
						</div>
					</Link>
				</div>
				<Navigation />
			</div>
		</header>
	)
}