import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
	return (
		<header className="header">
			<Link className="header__logo-container" to="/">
				<div className="header__logo" />
				<div>
					<p className="header__title">BGP AUTO</p>
					<p className="header__subtitle">АВТОСЕРВИС</p>
				</div>
			</Link>
			<div className="header__container">
				<div className="header__container-addres">
					
				</div>
				1
			</div>
		</header>
	)
}