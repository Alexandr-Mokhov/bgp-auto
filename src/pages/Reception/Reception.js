import { useState } from 'react';
import { useFormWithValidation } from '../../utils/formValidator';
import Registration from '../../components/Registration/Registration';
import Form from '../../components/Form/Form';
import './Reception.css';

export default function Reception() {
  const { values, handleChange, resetForm } = useFormWithValidation();
  const { work, auto, date, time, surname, name, phone, registrationDone } = JSON.parse(localStorage.getItem('reception-BGP-AUTO'));
  const [signedUp, setSignedUp] = useState(registrationDone);
  const currentDate = new Date();

  function getMinData() {
    return `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
  }

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
    setTimeout(() => setSignedUp(!signedUp), 500);
    localStorage.setItem('reception-BGP-AUTO', JSON.stringify(dataReception));
    console.log(dataReception);
  }

  function handleReset() {
    localStorage.setItem('reception-BGP-AUTO', JSON.stringify(''));
    console.log(values)
    console.log(JSON.parse(localStorage.getItem('reception-BGP-AUTO')));
    resetForm();
    setTimeout(() => setSignedUp(!signedUp), 500);
  }

  return (
    <main className="reception">
      <div className="reception__background" />
      <h1 className="reception__title">Запись на ремонт и техническое обслужвание</h1>
      {signedUp ?
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
          getMinData={getMinData}
        />}
      {signedUp &&
        <button className="reception__button-reset" type="button" onClick={handleReset}>Отменить запись</button>}
    </main>
  )
}