import './ImagePopup.css';

export default function ImagePopup({ isOpen, onClose, cardName, cardLink }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`} >
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={onClose} />
        <img className="popup__image" src={cardLink} alt={cardName} />
        <h3 className="popup__title">{cardName}</h3>
      </div>
    </div>
  )
}

