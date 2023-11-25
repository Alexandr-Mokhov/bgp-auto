import { useEffect, useState } from 'react';
import { useFormWithValidation } from '../../utils/formValidator';
import Registration from '../../components/Registration/Registration';
import Form from '../../components/Form/Form';
import './Reception.css';

export default function Reception({ isInscribed, setIsInscribed }) {
  const { values, handleChange, resetForm } = useFormWithValidation();
  const [dataFromLocalStorage, setDataFromLocalStorage] = useState({});
  const [currentDate, setCurrentDate] = useState('');
  const { work, auto, date, time, surname, name, phone } = dataFromLocalStorage;

  useEffect(() => {
    setDataFromLocalStorage(JSON.parse(localStorage.getItem('reception-BGP-AUTO')));
    const today = new Date();
    setCurrentDate(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`);
  }, [])

  function handleSubmit(evt) {
    evt.preventDefault();
    const dataReception = {
      work: values['work'] || work,
      auto: values['auto'] || auto,
      date: values['date'] || date,
      time: values['time'] || time,
      surname: values['surname'] || surname,
      name: values['name'] || name,
      phone: values['phone'] || phone,
      registeredDate: currentDate,
      registrationDone: true
    }
    setIsInscribed(!isInscribed);
    localStorage.setItem('reception-BGP-AUTO', JSON.stringify(dataReception));
    setDataFromLocalStorage(dataReception);
    console.log(dataReception);
  }

  function handleEdit() {
    setIsInscribed(!isInscribed);
  }

  function handleReset() {
    setIsInscribed(!isInscribed);
    localStorage.setItem('reception-BGP-AUTO', JSON.stringify(''));
    resetForm();
    setDataFromLocalStorage({});
  }

  return (
    <main className="reception">
      <div className="reception__background" />
      <h1 className="reception__title">Запись на ремонт и техническое обслужвание</h1>
      {isInscribed ?
        <Registration
          name={name}
          date={date}
          time={time}
          work={work} /> :
        <Form
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          values={values}
          work={work}
          auto={auto}
          date={date}
          time={time}
          surname={surname}
          name={name}
          phone={phone}
          currentDate={currentDate}
        />}
      {isInscribed &&
        <div className="reception__button-contaiter">
          <button className="reception__button reception__button_editing" type="button" onClick={handleEdit}>Редактировать запись</button>
          <button className="reception__button reception__button_reset" type="button" onClick={handleReset}>Отменить запись</button>
        </div>}
    </main>
  )
}