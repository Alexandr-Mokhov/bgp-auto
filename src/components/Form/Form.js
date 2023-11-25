import './Form.css';

export default function Form({
  handleSubmit,
  handleChange,
  values,
  work,
  auto,
  date,
  time,
  surname,
  name,
  phone,
  currentDate
}) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="work" name="work">Вид работ</label>
      <select className="form__input"
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
      <label className="form__label" htmlFor="auto" name="auto">Марка автомобиля</label>
      <input className="form__input"
        type="text"
        name="auto"
        id="auto"
        placeholder="Введите название марки"
        onChange={handleChange}
        value={values['auto'] || auto || ''}
        required />
      <label className="form__label" htmlFor="date" name="date">Выберите дату</label>
      <input className="form__input"
        type="date"
        name="date"
        id="date"
        min={currentDate}
        onChange={handleChange}
        value={values['date'] || date || ''}
        required />
      <label className="form__label" htmlFor="time" name="time">Выберите время</label>
      <input className="form__input"
        type="time"
        name="time"
        id="time"
        min="09:00"
        max="18:00"
        onChange={handleChange}
        value={values['time'] || time || ''}
        required />
      <label className="form__label" htmlFor="surname" name="surname">Ваша фамилия</label>
      <input className="form__input"
        type="text"
        name="surname"
        id="surname"
        placeholder="Введите вашу фамилию"
        onChange={handleChange}
        value={values['surname'] || surname || ''}
        required />
      <label className="form__label" htmlFor="name" name="name">Ваше имя</label>
      <input className="form__input"
        type="text"
        name="name"
        id="name"
        placeholder="Введите ваше имя"
        minLength={2}
        maxLength={50}
        onChange={handleChange}
        value={values['name'] || name || ''}
        required />
      <label className="form__label" htmlFor="phone" name="phone">Ваш телефон</label>
      <input className="form__input"
        type="phone"
        name="phone"
        id="phone"
        placeholder="Введите ваш телефон"
        onChange={handleChange}
        value={values['phone'] || phone || ''}
        required />
      <button className="form__button" type="submit">Записаться</button>
    </form>
  )
}