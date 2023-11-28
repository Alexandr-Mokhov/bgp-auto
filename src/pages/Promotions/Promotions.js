import useScroll from '../../utils/checkScroll';
import PromotionElement from '../../components/PromotionElement/PromotionElement';
import ButtonUp from '../../components/ButtonUp/ButtonUp';
import { promotions } from '../../constants';
import './Promotions.css';

export default function Promotions() {
  const maxScroll = 300;
  const scroll = useScroll();

  function createPromotionsList() {
    return promotions.map((item, i) => <PromotionElement
      imageClass={item.imageClass}
      title={item.title}
      paragraph={item.paragraph}
      key={i}
    />)
  }

  return (
    <main className="promotions">
      <div className="promotions__background" />
      {scroll > maxScroll && <ButtonUp />}
      <div className="promotions__container" id="start">
        <ul className="promotions__list">
          {createPromotionsList()}
        </ul>
      </div>
    </main>
  )
}
