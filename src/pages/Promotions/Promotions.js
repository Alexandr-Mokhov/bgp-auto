import './Promotions.css';

export default function Promotions() {
  return (
    <main className="promotions">
      <div className="promotions__background" />
      <div className="promotions__container">
        <ul className="promotions__list">
          <li className="promotions__list-item">
            <div className="promotions__image promotions__image_car" />
            <div className="promotions__description">
              <h1 className="promotions__title">Бесплатный подменный автомобиль на время ремонта</h1>
              <p className="promotions__text">В случае длительного ремонта выходящего за оговоренный ранее срок, мы предоставим подменный авто.</p>
              <p className="promotions__text">Увеличение срока по причине клиента, задержке запасных частей и других форс-мажоров не входит в акцию.</p>
              <p className="promotions__text">Заправка, мойка и другие сопутствующие расходы связанные с подменным авто, на период эксплуатации возлагаются на клиента.</p>
            </div>
          </li>
          <li className="promotions__list-item">
            <div className="promotions__image promotions__image_car-bottom" />
            <div className="promotions__description">
              <h2 className="promotions__title">Бесплатный осмотр днища и ходовой части</h2>
              <p className="promotions__text">При комплексном периодическом обслуживании с заменой масла и фильтров - осмотр днища и ходовой части бесплатно.</p>
              <p className="promotions__text">В осмотр днища входит визуальный осмотр на наличие серьезных повреждений, сильной коррозии, нарушение целостности сварных швов.</p>
              <p className="promotions__text">В осмотр ходовой части входит визульный осмотр целостности пыльников, наличие люфтов, подтёков тормозной системы и системы питания.</p>
            </div>
          </li>
          <li className="promotions__list-item">
            <div className="promotions__image promotions__image_oil" />
            <div className="promotions__description">
              <h2 className="promotions__title">Масло на 10% дешевле</h2>
              <p className="promotions__text">Мы работаем напрямую с крупными дистрибьюторами моторных масел, поэтому можем предложить нашим клиентам дополнительную выгоду.</p>
              <p className="promotions__text">Скидка на масло предоставляется при прохождении комплексного планового обслуживания.</p>
              <p className="promotions__text">Уточняйте текущее наличие марок масел и стоимость по телефону.</p>
            </div>
          </li>
        </ul>
      </div>
    </main>
  )
}