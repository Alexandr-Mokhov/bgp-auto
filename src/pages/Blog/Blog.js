import { useEffect, useState } from 'react';
import ButtonUp from '../../components/ButtonUp/ButtonUp';
import './Blog.css';

export default function Blog() {
  const maxScroll = 300;
  const [scroll, setScroll] = useState(0);

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

  return (
    <main className="blog">
      <div className="blog__background" />
      {scroll > maxScroll && <ButtonUp />}
      <ul className="blog__container" id="start">
        <li className="blog__item">
          <div className="blog__image blog__image_1" />
          <div className="blog__description">
            <h1 className="blog__title">Volkswagen Polo 1.6</h1>
            <p className="blog__text">Клиент жаловался на то что не срабатывал вентилятор охлаждения двигателя и не было зарядки от генератора, ранее автомобиль попадал в ДТП.</p>
            <p className="blog__text">После диагностики был выявлен участок электропроводки который имел неисправности в виде обрыва проводов. Выполнив ремонт, мы убедились в работоспособности всех узлов, клиент доволен!</p>
          </div>
        </li>
        <li className="blog__item">
          <div className="blog__image blog__image_2" />
          <div className="blog__description">
            <h2 className="blog__title">Volkswagen Polo</h2>
            <p className="blog__text">Частая проблема - люфт в рулевой рейке справа.</p>
            <p className="blog__text">Установили ремкомплект втулок для рулевых реек.</p>
            <p className="blog__text">Заменили задние амортизаторы.</p>
          </div>
        </li>
        <li className="blog__item">
          <div className="blog__image blog__image_3" />
          <div className="blog__description">
            <h2 className="blog__title">Toyota Avensis 1.8</h2>
            <p className="blog__text">Выполнили плановое техническое обслуживание!</p>
            <p className="blog__text">Перед заменой масла выполнили раскосковку двигателя, так как клиент жаловался на небольшой расход масла.</p>
            <p className="blog__text">Заменили масло, фильтра, осмотрели ходовую часть, есть недочеты, будем устранять.</p>
          </div>
        </li>
        <li className="blog__item">
          <div className="blog__image blog__image_5" />
          <div className="blog__description">
            <h2 className="blog__title">Skoda Fabia 1.2</h2>
            <p className="blog__text">Заменили комплект цепи ГРМ.</p>
            <p className="blog__text">Напоминаем вам, что не стоит игнорировать посторонние звуки при запуске двигателя после долгой стоянки, так как чаще всего это признак растянутой цепи.</p>
            <p className="blog__text">Эксплуатация автомобиля с такой неисправностью может привести к дорогостоящему ремонту.</p>
          </div>
        </li>
        <li className="blog__item">
          <div className="blog__image blog__image_6" />
          <div className="blog__description">
            <h2 className="blog__title">Skoda Octavia</h2>
            <p className="blog__text">Диагностика ходовой части с последующей заменой рулевого наконечника.</p>
          </div>
        </li>
        <li className="blog__item">
          <div className="blog__image blog__image_7" />
          <div className="blog__description">
            <h2 className="blog__title">Skoda Octavia</h2>
            <p className="blog__text">Замена насоса ОЖ и его ремня.</p>
          </div>
        </li>
        <li className="blog__item">
          <div className="blog__image blog__image_8" />
          <div className="blog__description">
            <h2 className="blog__title">Audi A4</h2>
            <p className="blog__text">Замена опор двигателя и передних наружных ШРУСов.</p>
          </div>
        </li>
        <li className="blog__item">
          <div className="blog__image blog__image_9" />
          <div className="blog__description">
            <h2 className="blog__title">Mazda CX-7</h2>
            <p className="blog__text">Клиента беспокоит повышенный расход масла и сизый дым из выхлопной трубы.</p>
            <p className="blog__text">Для начала проверили состояние турбокомпрессора, а затем заглянули в цилиндры эндоскопом.</p>
            <p className="blog__text">Множественные задиры на цилиндрах говорят о том что требуется капитальный ремонт двигателя.</p>
          </div>
        </li>
        <li className="blog__item">
          <div className="blog__image blog__image_10" />
          <div className="blog__description">
            <h2 className="blog__title">Audi A5</h2>
            <p className="blog__text">Клиента беспокоил стук в задней части автомобиля в холодную погоду.</p>
            <p className="blog__text">Задефектовали задние амортизаторы.</p>
            <p className="blog__text">Подобрали, заказали и установили новые.</p>
          </div>
        </li>
        <li className="blog__item">
          <div className="blog__image blog__image_11" />
          <div className="blog__description">
            <h2 className="blog__title">Volkswagen Touareg</h2>
            <p className="blog__text">Замена пыльников передних наружных ШРУСов, пыльника шаровой нижнего рычага и передних тормозных колодок.</p>
          </div>
        </li>
        <li className="blog__item">
          <div className="blog__image blog__image_12" />
          <div className="blog__description">
            <h2 className="blog__title">Skoda Fabia</h2>
            <p className="blog__text">Приехала на замену масла ДВС и фильтров.</p>
            <p className="blog__text">После нашего осмотра было решено мыть систему охлаждения и отопитель салона, менять передние амортизаторы с опорами и передний сальник коленвала.</p>
            <p className="blog__text">Подобрали запчасти по выгодным ценам и произвели данные работы.</p>
          </div>
        </li>
        <li className="blog__item">
          <div className="blog__image blog__image_13" />
          <div className="blog__description">
            <h2 className="blog__title">Skoda Octavia</h2>
            <p className="blog__text">Осмотр ходовой и поиск утечки ОЖ.</p>
            <p className="blog__text">В ходе осмотра выявлено: люфт тяг переднего стабилизатора, негерметичность насоса ОЖ.</p>
            <p className="blog__text">Произвели замену тяг переднего стабилизатора, заказали насос ОЖ.</p>
          </div>
        </li>
      </ul>
    </main>
  )
}