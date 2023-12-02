import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Promotions from '../../pages/Promotions/Promotions';
import Reception from '../../pages/Reception/Reception';
import Services from '../../pages/Services/Services';
import Contacts from '../../pages/Contacts/Contacts';
import NotFound from '../../pages/NotFound/NotFound';
import AboutAs from '../../pages/AboutAs/AboutAs';
import Address from '../../pages/Address/Address';
import Prices from '../../pages/Prices/Prices';
import Main from '../../pages/Main/Main';
import Blog from '../../pages/Blog/Blog';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isInscribed, setIsInscribed] = useState(false);
  const [dataFromLocalStorage, setDataFromLocalStorage] = useState({});

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('reception-BGP-AUTO'));
    if (localData) {
      setDataFromLocalStorage(localData);
      const { date, time, registrationDone } = localData;
      setDate(date);
      setTime(time);
      setIsInscribed(registrationDone);
    }
  }, [])

  return (
    <div className="page">
      <Header isInscribed={isInscribed} date={date} time={time} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-as" element={<AboutAs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/prices/:block?" element={<Prices />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/address" element={<Address />} />
        <Route path="/reception" element={<Reception
        setDate={setDate}
        setTime={setTime}
        isInscribed={isInscribed}
        setIsInscribed={setIsInscribed}
        dataFromLocalStorage={dataFromLocalStorage}
        setDataFromLocalStorage={setDataFromLocalStorage}
        />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
