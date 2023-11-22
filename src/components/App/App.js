import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../../pages/Main/Main'
import Footer from '../Footer/Footer';
import AboutAs from '../../pages/AboutAs/AboutAs';
import Services from '../../pages/Services/Services';
import Prices from '../../pages/Prices/Prices';
import Promotions from '../../pages/Promotions/Promotions';
import './App.css';
import Blog from '../../pages/Blog/Blog';

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/about-as" element={<AboutAs />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/prices" element={<Prices />}/>
        <Route path="/promotions" element={<Promotions />}/>
        <Route path="/blog" element={<Blog />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
