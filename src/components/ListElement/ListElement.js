import './ListElement.css';

export default function ListElement({ imageClass, title, paragraph }) {
  return (
    <li className="list-element__list-item">
      <div className={`list-element__image ${imageClass}`} />
      <div className="list-element__description">
        <h2 className="list-element__title">{title}</h2>
        {paragraph.map((item, i) => <p className="list-element__text" key={i}>{item}</p>)}
      </div>
    </li>
  )
}