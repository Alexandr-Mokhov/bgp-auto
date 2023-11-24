import { useState } from 'react';
import { useFormWithValidation } from '../../utils/formValidator';
import './Reception.css';

const currentDate = new Date();

function getMinData() {
  return `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
}

export default function Reception() {
  const { values, handleChange, resetForm } = useFormWithValidation();
  const { work, auto, date, time, surname, name, phone, registrationDone } = JSON.parse(localStorage.getItem('reception-BGP-AUTO'));
  const [signedUp, setSignedUp] = useState(registrationDone);

  function handleSubmit(evt) {
    evt.preventDefault();
    const dataReception = {
      work: values['work'] || work,
      auto: values['auto'] || auto,
      date: values['date'].split('-').reverse().join('-') || date,
      time: values['time'] || time,
      surname: values['surname'] || surname,
      name: values['name'] || name,
      phone: values['phone'] || phone,
      registeredDate: currentDate,
      registrationDone: true
    }
    setSignedUp(!signedUp);
    localStorage.setItem('reception-BGP-AUTO', JSON.stringify(dataReception));
    console.log(dataReception);
  }

  function handleReset() {
    localStorage.setItem('reception-BGP-AUTO', JSON.stringify(''));
    console.log(values)
    console.log(JSON.parse(localStorage.getItem('reception-BGP-AUTO')));
    resetForm();
    setSignedUp(!signedUp);
  }

  return (
    <main className="reception">
      <div className="reception__background" />
      <h1 className="reception__title">Запись на ремонт и техническое обслужвание</h1>
      {signedUp ?
        <div className="reception__registration-done">
          <div className="reception__registration-done-img" />
          <h2 className="reception__registration-done-title">Поздравляем {name}, Вы успешно записались на сервис!</h2>
          <p className="reception__registration-done-text">Дата: {date}</p>
          <p className="reception__registration-done-text">Время: {time}</p>
          <p className="reception__registration-done-text">Вид работ - {work}</p>
        </div> :
        <form className="reception__form" onSubmit={handleSubmit}>
          <label className="reception__label" htmlFor="work" name="work">Вид работ</label>
          <select className="reception__input"
            type="text"
            name="work"
            id="work"
            onChange={handleChange}
            value={values['work'] || work || ''}
            required>
            <option value="">-</option>
            <option value="Плановое ТО">Плановое ТО</option>
            <option value="Ремонт двигателя">Ремонт двигателя</option>
            <option value="Ремонт ходовой части">Ремонт ходовой части</option>
            <option value="Ремонт МКПП">Ремонт МКПП</option>
            <option value="Ремонт АКПП">Ремонт АКПП</option>
            <option value="Диагностика">Диагностика</option>
            <option value="Прочее">Прочее</option>
          </select>
          <label className="reception__label" htmlFor="auto" name="auto">Марка автомобиля</label>
          <input className="reception__input"
            type="text"
            name="auto"
            id="auto"
            placeholder="Введите название марки"
            onChange={handleChange}
            value={values['auto'] || auto || ''}
            required />
          <label className="reception__label" htmlFor="date" name="date">Выберите дату</label>
          <input className="reception__input"
            type="date"
            name="date"
            id="date"
            min={getMinData()}
            onChange={handleChange}
            value={values['date'] || date || ''}
            required />
          <label className="reception__label" htmlFor="time" name="time">Выберите время</label>
          <input className="reception__input"
            type="time"
            name="time"
            id="time"
            min="09:00"
            max="18:00"
            onChange={handleChange}
            value={values['time'] || time || ''}
            required />
          <label className="reception__label" htmlFor="surname" name="surname">Ваша фамилия</label>
          <input className="reception__input"
            type="text"
            name="surname"
            id="surname"
            placeholder="Введите вашу фамилию"
            onChange={handleChange}
            value={values['surname'] || surname || ''}
            required />
          <label className="reception__label" htmlFor="name" name="name">Ваше имя</label>
          <input className="reception__input"
            type="text"
            name="name"
            id="name"
            placeholder="Введите ваше имя"
            minLength={2}
            maxLength={50}
            onChange={handleChange}
            value={values['name'] || name || ''}
            required />
          <label className="reception__label" htmlFor="phone" name="phone">Ваш телефон</label>
          <input className="reception__input"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Введите ваш телефон"
            onChange={handleChange}
            value={values['phone'] || phone || ''}
            required />
        </form>
      }
      {signedUp ?
        <button className="reception__button reception__button_reset" type="button" onClick={handleReset}>Отменить запись</button> :
        <button className="reception__button reception__button_register" type="button" onClick={handleSubmit}>Записаться</button>}
    </main>
  )
}