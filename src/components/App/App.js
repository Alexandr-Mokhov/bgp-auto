import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../../pages/Main/Main'
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
