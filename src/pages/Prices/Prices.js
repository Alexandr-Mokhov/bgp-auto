/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import ButtonUp from '../../components/ButtonUp/ButtonUp';
import './Prices.css';

export default function Prices() {
  let params = useParams();
  const maxScroll = 300;
  const [scroll, setScroll] = useState(0);

  const blocks = {
    transmission: useRef(null),
    diagnostics: useRef(null),
    chassis: useRef(null),
    engine: useRef(null),
    to: useRef(null),
  }

  const scrollToBlock = (block = "") => {
    if (block in blocks) {
      blocks[block].current.scrollIntoView({
        behavior: "smooth"
      });
    }
  }

  function debounce(func, timeout = 100) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    }
    window.addEventListener("scroll", debounce(handleScroll, 100));
    return () => window.removeEventListener("scroll", debounce(handleScroll, 100));
  }, []);

  useEffect(() => {
    scrollToBlock(params.block);
  }, [params]);

  return (
    <main className="prices">
      <div className="prices__background" />
      {scroll > maxScroll && <ButtonUp />}
      <div className="prices__container" id="start">
        <h1 className="prices__title" ref={blocks.engine}>Двигатель</h1>
        <ul className="prices__table">
          <li className="prices__table-name prices__table-name_head">Наименование работ<span className="prices__head-price">Стоимость, ₽</span></li>
          <li className="prices__table-name">Замена ремня ГРМ<span className="prices__table-price">от 1500</span></li>
          <li className="prices__table-name">Ремонт ГРМ<span className="prices__table-price">от 2500</span></li>
          <li className="prices__table-name">Ремонт ЦПГ<span className="prices__table-price">от 5500</span></li>
          <li className="prices__table-name">Замена помпы<span className="prices__table-price">от 2000</span></li>
          <li className="prices__table-name">Замена генератора<span className="prices__table-price">от 2000</span></li>
          <li className="prices__table-name">Замена ролика натяжителя<span className="prices__table-price">от 1000</span></li>
          <li className="prices__table-name">Ремонт системы охлаждения<span className="prices__table-price">от 1000</span></li>
          <li className="prices__table-name">Замена радиатора<span className="prices__table-price">от 2000</span></li>
          <li className="prices__table-name">Ремонт системы питания<span className="prices__table-price">от 500</span></li>
          <li className="prices__table-name">Ремонт системы зажигания<span className="prices__table-price">от 500</span></li>
          <li className="prices__table-name">Ремонт выхлопной системы<span className="prices__table-price">от 500</span></li>
          <li className="prices__table-name">Прочий мелкосрочный ремонт<span className="prices__table-price">по договоренности</span></li>
        </ul>
        <h2 className="prices__title" ref={blocks.chassis}>Ходовая часть</h2>
        <ul className="prices__table">
          <li className="prices__table-name prices__table-name_head">Наименование работ<span className="prices__head-price">Стоимость, ₽</span></li>
          <li className="prices__table-name">Замена передних стоек<span className="prices__table-price">от 4000</span></li>
          <li className="prices__table-name">Замена стоек стабилизатора<span className="prices__table-price">от 1500</span></li>
          <li className="prices__table-name">Замена задних стоек<span className="prices__table-price">от 3000</span></li>
          <li className="prices__table-name">Замена ступичного подшипника<span className="prices__table-price">от 1500</span></li>
          <li className="prices__table-name">Замена сайлент-блоков<span className="prices__table-price">от 1000</span></li>
          <li className="prices__table-name">Замена рулевой рейки<span className="prices__table-price">от 5000</span></li>
          <li className="prices__table-name">Замена шаровых<span className="prices__table-price">от 1000</span></li>
          <li className="prices__table-name">Замена тормозных дисков<span className="prices__table-price">от 1000</span></li>
          <li className="prices__table-name">Замена тормозных колодок<span className="prices__table-price">от 500</span></li>
          <li className="prices__table-name">Ремонт задней балки<span className="prices__table-price">от 1500</span></li>
          <li className="prices__table-name">Прочий мелкосрочный ремонт<span className="prices__table-price">по договоренности</span></li>
        </ul>
        <h2 className="prices__title" ref={blocks.transmission}>Трансмиссия и КПП</h2>
        <ul className="prices__table">
          <li className="prices__table-name prices__table-name_head">Наименование работ<span className="prices__head-price">Стоимость, ₽</span></li>
          <li className="prices__table-name">Замена МКПП<span className="prices__table-price">от 3000</span></li>
          <li className="prices__table-name">Ремонт МКПП<span className="prices__table-price">от 5000</span></li>
          <li className="prices__table-name">Замена АКПП<span className="prices__table-price">от 4000</span></li>
          <li className="prices__table-name">Ремонт АКПП<span className="prices__table-price">от 7000</span></li>
          <li className="prices__table-name">Замена сцепления<span className="prices__table-price">от 2500</span></li>
          <li className="prices__table-name">Прочий мелкосрочный ремонт<span className="prices__table-price">по договоренности</span></li>
        </ul>
        <h2 className="prices__title" ref={blocks.to}>Плановое ТО</h2>
        <ul className="prices__table">
          <li className="prices__table-name prices__table-name_head">Наименование работ<span className="prices__head-price">Стоимость, ₽</span></li>
          <li className="prices__table-name">Замена масла и фильтра<span className="prices__table-price">от 2000</span></li>
          <li className="prices__table-name">Замена воздушных фильтров<span className="prices__table-price">от 500</span></li>
          <li className="prices__table-name">Замена тормозной жидкости<span className="prices__table-price">от 1000</span></li>
          <li className="prices__table-name">Замена свечей зажигания<span className="prices__table-price">от 500</span></li>
          <li className="prices__table-name">Прочий мелкосрочный ремонт<span className="prices__table-price">по договоренности</span></li>
        </ul>
        <h2 className="prices__title" ref={blocks.diagnostics}>Диагностика</h2>
        <ul className="prices__table">
          <li className="prices__table-name prices__table-name_head">Наименование работ<span className="prices__head-price">Стоимость, ₽</span></li>
          <li className="prices__table-name">Просмотр ошибок через OBD<span className="prices__table-price">от 500</span></li>
          <li className="prices__table-name">Устранение ошибок<span className="prices__table-price">от 1000</span></li>
          <li className="prices__table-name">Восстановление электрики салона<span className="prices__table-price">от 1000</span></li>
          <li className="prices__table-name">Восстановление электрики двигателя<span className="prices__table-price">от 2000</span></li>
          <li className="prices__table-name">Смена прошивки ЭБУ<span className="prices__table-price">от 2000</span></li>
          <li className="prices__table-name">Прочий мелкосрочный ремонт<span className="prices__table-price">по договоренности</span></li>
        </ul>
      </div>
    </main>
  )
}