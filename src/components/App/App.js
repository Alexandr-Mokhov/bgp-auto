import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../../pages/Main/Main';
import Footer from '../Footer/Footer';
import AboutAs from '../../pages/AboutAs/AboutAs';
import Services from '../../pages/Services/Services';
import Prices from '../../pages/Prices/Prices';
import Promotions from '../../pages/Promotions/Promotions';
import Blog from '../../pages/Blog/Blog';
import Contacts from '../../pages/Contacts/Contacts';
import Address from '../../pages/Address/Address';
import Reception from '../../pages/Reception/Reception';
import NotFound from '../../pages/NotFound/NotFound';
import './App.css';

function App() {
  const { date, time, registrationDone } = JSON.parse(localStorage.getItem('reception-BGP-AUTO'));
  const [isInscribed, setIsInscribed] = useState(registrationDone);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }, [pathname]);

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
        <Route path="/reception" element={<Reception isInscribed={isInscribed} setIsInscribed={setIsInscribed} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
