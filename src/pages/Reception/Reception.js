import { useEffect, useState } from 'react';
import { useFormWithValidation } from '../../utils/formValidator';
import Registration from '../../components/Registration/Registration';
import Preloader from '../../components/Preloader/Preloader';
import Form from '../../components/Form/Form';
import './Reception.css';

export default function Reception({
  setDate,
  setTime,
  isInscribed,
  setIsInscribed,
  dataFromLocalStorage,
  setDataFromLocalStorage
 }) {
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();
  const [currentDate, setCurrentDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { work, auto, date, time, surname, name, phone } = dataFromLocalStorage;

  useEffect(() => {
    const today = new Date();
    setCurrentDate(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() <= 9 ? `0${ today.getDate()}` : today.getDate()}`);
  }, [])

  function handleSubmit(evt) {
    setIsLoading(true);
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

    localStorage.setItem('reception-BGP-AUTO', JSON.stringify(dataReception));
    console.log(dataReception);

    return new Promise((resolve, reject) => {
      return resolve(setTimeout(() => {
        setDataFromLocalStorage(dataReception);
        setDate(dataReception.date);
        setTime(dataReception.time);
        setIsInscribed(true);
        setIsLoading(false);
      }, 3000));
    })
  }

  function handleEdit() {
    setIsInscribed(!isInscribed);
  }

  function handleReset() {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      return resolve(setTimeout(() => {
        localStorage.removeItem('reception-BGP-AUTO');
        setDataFromLocalStorage({});
        setIsInscribed(false);
        setIsLoading(false);
        resetForm();
        setDate('');
        setTime('');
      }, 2000));
    })
  }

  return (
    <main className="reception">
      <div className="reception__background" />
      {isLoading && <Preloader />}
      <div className="reception__container">
        <h1 className="reception__title">Запись на ремонт и техническое обслуживание</h1>
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
            errors={errors}
            isValid={isValid}
            isLoading={isLoading}
          />}
        {isInscribed &&
          <div className="reception__button-contaiter">
            <button className="reception__button reception__button_editing" type="button" onClick={handleEdit}>Редактировать запись</button>
            <button className="reception__button reception__button_reset" type="button" onClick={handleReset}>Отменить запись</button>
          </div>}
      </div>
    </main>
  )
}