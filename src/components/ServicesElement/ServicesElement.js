import { Link } from 'react-router-dom';
import './ServicesElement.css';

export default function ServicesElement({ path, srcImage, elementTitle }) {
  return (
    <Link className="services__grid-item" to={`/prices/${path}`}>
      <img className="services__grid-img" src={srcImage} alt={elementTitle} />
      <div className="services__grid-circel" />
      <h1 className="services__grid-title">{elementTitle}</h1>
    </Link>
  )
}