import './Registration.css';

export default function Registration({ name, date, time, work }) {
  return (
    <main className="registration">
      <div className="registration__img" />
      <h2 className="registration__title">Поздравляем {name}!</h2>
      <h2 className="registration__title">Вы успешно записались на сервис!</h2>
      <p className="registration__text">Дата: <span className="registration__data">{date}</span></p>
      <p className="registration__text">Время: <span className="registration__data">{time}</span></p>
      <p className="registration__text">Вид работ: <span className="registration__data">{work}</span></p>
    </main>
  )
}