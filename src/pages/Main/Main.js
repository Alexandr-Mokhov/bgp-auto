import './Main.css';

export default function Main() {
  return (
    <main className="main" aria-label="Автосервис БГП авто, главная страница">
      <div className="main__background" />
      <div className="main__container">
        <div className="main__title-container">
          <div className="main__title-icon main__title-icon_red" />
          <h2 className="main__title-text">Ремонт и обслуживание<br />автомобилей VAG группы более 5 лет</h2>
        </div>
        <div className="main__title-container">
          <div className="main__title-icon main__title-icon_black" />
          <h2 className="main__title-text">Использование официальной технической<br />документации и специнструмента</h2>
        </div>
        <div className="main__title-container">
          <div className="main__title-icon main__title-icon_black" />
          <h2 className="main__title-text">Обслуживание автомобилей других марок</h2>
        </div>
      </div>
    </main>
  )
}