import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <main className="not-found" aria-label="У нас нет страницы по указанному пути">
      <div className="not-found__background" />
      <section className="not-found__container">
        <div className="not-found__container-text">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__subtitle">Упс, страница не найдена</p>
        </div>
        <Link className="not-found__back" to="/">Назад</Link>
      </section>
    </main>
  )
}