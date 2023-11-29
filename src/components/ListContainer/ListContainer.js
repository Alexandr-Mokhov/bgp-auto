import './ListContainer.css';

export default function ListContainer({ list }) {

  function createElementList() {
    return list.map((item, i) => {
      return <li className="list__item" key={i}>
        <img className="list__item-image" src={item.image} alt={item.title} />
        <div className="list__item-description">
          <h2 className="list__item-title">{item.title}</h2>
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