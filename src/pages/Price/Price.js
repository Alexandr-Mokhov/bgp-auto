import './Price.css';

export default function Price() {
  return (
    <main className="price">
      <div className="price__background" />
      <h1 className="price__title">Двигатель</h1>
      <ul className="price__table">
        <li className="price__table-name price__table-name_head">Наименование работ<span className="price__head-price">Стоимость, ₽</span></li>
        <li className="price__table-name">Замена ремня ГРМ<span className="price__table-price">от 1500</span></li>
        <li className="price__table-name">Ремонт ГРМ<span className="price__table-price">от 2500</span></li>
        <li className="price__table-name">Ремонт ЦПГ<span className="price__table-price">от 5500</span></li>
        <li className="price__table-name">Замена помпы<span className="price__table-price">от 2000</span></li>
        <li className="price__table-name">Замена генератора<span className="price__table-price">от 2000</span></li>
        <li className="price__table-name">Замена ролика натяжителя<span className="price__table-price">от 1000</span></li>
        <li className="price__table-name">Ремонт системы охлаждения<span className="price__table-price">от 1000</span></li>
        <li className="price__table-name">Замена радиатора<span className="price__table-price">от 2000</span></li>
        <li className="price__table-name">Ремонт системы питания<span className="price__table-price">от 500</span></li>
        <li className="price__table-name">Ремонт системы зажигания<span className="price__table-price">от 500</span></li>
        <li className="price__table-name">Ремонт выхлопной системы<span className="price__table-price">от 500</span></li>
        <li className="price__table-name">Прочий мелкосрочный ремонт<span className="price__table-price">по договоренности</span></li>
      </ul>
      <h2 className="price__title">Ходовая часть</h2>
      <ul className="price__table">
        <li className="price__table-name price__table-name_head">Наименование работ<span className="price__head-price">Стоимость, ₽</span></li>
        <li className="price__table-name">Замена передних стоек<span className="price__table-price">от 4000</span></li>
        <li className="price__table-name">Замена стоек стабилизатора<span className="price__table-price">от 1500</span></li>
        <li className="price__table-name">Замена задних стоек<span className="price__table-price">от 3000</span></li>
        <li className="price__table-name">Замена ступичного подшипника<span className="price__table-price">от 1500</span></li>
        <li className="price__table-name">Замена сайлент-блоков<span className="price__table-price">от 1000</span></li>
        <li className="price__table-name">Замена рулевой рейки<span className="price__table-price">от 5000</span></li>
        <li className="price__table-name">Замена шаровых<span className="price__table-price">от 1000</span></li>
        <li className="price__table-name">Замена тормозных дисков<span className="price__table-price">от 1000</span></li>
        <li className="price__table-name">Замена тормозных колодок<span className="price__table-price">от 500</span></li>
        <li className="price__table-name">Ремонт задней балки<span className="price__table-price">от 1500</span></li>
        <li className="price__table-name">Прочий мелкосрочный ремонт<span className="price__table-price">по договоренности</span></li>
      </ul>
      <h2 className="price__title">Трансмиссия и КПП</h2>
      <ul className="price__table">
      <li className="price__table-name price__table-name_head">Наименование работ<span className="price__head-price">Стоимость, ₽</span></li>
        <li className="price__table-name">Замена МКПП<span className="price__table-price">от 3000</span></li>
        <li className="price__table-name">Ремонт МКПП<span className="price__table-price">от 5000</span></li>
        <li className="price__table-name">Замена АКПП<span className="price__table-price">от 4000</span></li>
        <li className="price__table-name">Ремонт АКПП<span className="price__table-price">от 7000</span></li>
        <li className="price__table-name">Замена сцепления<span className="price__table-price">от 2500</span></li>
        <li className="price__table-name">Прочий мелкосрочный ремонт<span className="price__table-price">по договоренности</span></li>
      </ul>
      <h2 className="price__title">Плановое ТО</h2>
      <ul className="price__table">
      <li className="price__table-name price__table-name_head">Наименование работ<span className="price__head-price">Стоимость, ₽</span></li>
        <li className="price__table-name">Замена масла и фильтра<span className="price__table-price">от 2000</span></li>
        <li className="price__table-name">Замена воздушных фильтров<span className="price__table-price">от 500</span></li>
        <li className="price__table-name">Замена тормозной жидкости<span className="price__table-price">от 1000</span></li>
        <li className="price__table-name">Замена свечей зажигания<span className="price__table-price">от 500</span></li>
        <li className="price__table-name">Прочий мелкосрочный ремонт<span className="price__table-price">по договоренности</span></li>
      </ul>
      <h2 className="price__title">Диагностика</h2>
      <ul className="price__table">
      <li className="price__table-name price__table-name_head">Наименование работ<span className="price__head-price">Стоимость, ₽</span></li>
        <li className="price__table-name">Просмотр ошибок через OBD<span className="price__table-price">от 500</span></li>
        <li className="price__table-name">Устранение ошибок<span className="price__table-price">от 1000</span></li>
        <li className="price__table-name">Восстановление электрики салона<span className="price__table-price">от 1000</span></li>
        <li className="price__table-name">Восстановление электрики двигателя<span className="price__table-price">от 2000</span></li>
        <li className="price__table-name">Смена прошивки ЭБУ<span className="price__table-price">от 2000</span></li>
        <li className="price__table-name">Прочий мелкосрочный ремонт<span className="price__table-price">по договоренности</span></li>
      </ul>
    </main>
  )
}