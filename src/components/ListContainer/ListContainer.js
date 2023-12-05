import './ListContainer.css';

export default function ListContainer({ list, onCardClick }) {
  function createElementList() {
    return list.map((item, i) => {
      function handleClick() {
        onCardClick(item);
      }

      return <li className="list__item" key={i}>
        <img className="list__item-image" src={item.image} alt={item.title} onClick={handleClick} />
        <h2 className="list__item-title">{item.title}</h2>
        <div className="list__item-description">
          {item.paragraph.map((elem, i) => <p className="list__item-text" key={i}>{elem}</p>)}
        </div>
      </li>
    })
  }

  return (
    <ul className="list">
      {createElementList()}
    </ul>
  )
}