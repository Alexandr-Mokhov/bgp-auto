import './PromotionElement.css';

export default function PromotionElement({ imageClass, title, paragraph }) {
  return (
    <li className="promotions__list-item">
      <div className={`promotions__image ${imageClass}`} />
      <div className="promotions__description">
        <h1 className="promotions__title">{title}</h1>
        {paragraph.map((item, i) => <p className="promotions__text" key={i}>{item}</p>)}
      </div>
    </li>
  )
}