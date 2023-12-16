import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Promotions from '../../pages/Promotions/Promotions';
import Reception from '../../pages/Reception/Reception';
import Services from '../../pages/Services/Services';
import Contacts from '../../pages/Contacts/Contacts';
import NotFound from '../../pages/NotFound/NotFound';
import AboutAs from '../../pages/AboutAs/AboutAs';
import Address from '../../pages/Address/Address';
import ImagePopup from '../ImagePopup/ImagePopup';
import Prices from '../../pages/Prices/Prices';
import Main from '../../pages/Main/Main';
import Blog from '../../pages/Blog/Blog';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  const [selectedCard, setSelectedCard] = useState({ isOpen: false, cardData: {} });
  const [dataFromLocalStorage, setDataFromLocalStorage] = useState({});
  const [isInscribed, setIsInscribed] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const isOpen = selectedCard.isOpen;

  function handleCardClick(card) {
    setSelectedCard({ isOpen: true, cardData: card });
  }

  function closeAllPopups() {
    setSelectedCard({ ...selectedCard, isOpen: false });
  }

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
        evt.target.blur();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return
    }
    function handleClickOverlay(evt) {
      if (evt.target.className.indexOf('popup_opened') > 1) {
        closeAllPopups();
      }
    };
    document.addEventListener('mousedown', handleClickOverlay);
    return () => {
      document.removeEventListener('mousedown', handleClickOverlay);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closeAllPopups]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('reception-BGP-AUTO'));
    if (localData) {
      const today = new Date().getTime();
      const { date, time, registrationDone } = localData;
      const registrationYear = Number(date.slice(0, 4));
      const registrationMonth = Number(date.slice(5, 7)) - 1;
      const registrationDay = Number(date.slice(8, 10));
      const registrationHours = Number(time.slice(0, 2));
      const registrationMinutes = Number(time.slice(3, 5));
      const registrationDate = new Date(registrationYear, registrationMonth, registrationDay, registrationHours, registrationMinutes).getTime();

      if (today < registrationDate) {
        setDataFromLocalStorage(localData);
        setDate(date);
        setTime(time);
        setIsInscribed(registrationDone);
      } else {
        localStorage.removeItem('reception-BGP-AUTO');
        setDataFromLocalStorage({});
        setIsInscribed(false);
        setDate('');
        setTime('');
      }
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
        <Route path="/promotions" element={<Promotions onCardClick={handleCardClick} />} />
        <Route path="/blog" element={<Blog onCardClick={handleCardClick} />} />
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
      <ImagePopup
        isOpen={selectedCard.isOpen}
        onClose={closeAllPopups}
        cardName={selectedCard.cardData.title}
        cardLink={selectedCard.cardData.image}
      />
    </div>
  );
}

export default App;
