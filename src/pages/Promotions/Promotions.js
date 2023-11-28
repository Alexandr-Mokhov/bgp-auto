import useScroll from '../../utils/checkScroll';
import ListElement from '../../components/ListElement/ListElement';
import ButtonUp from '../../components/ButtonUp/ButtonUp';
import { promotions } from '../../constants';
import './Promotions.css';

export default function Promotions() {
  const maxScroll = 300;
  const scroll = useScroll();

  function createElementList() {
    return promotions.map((item, i) => <ListElement
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
      <ul className="promotions__container" id="start">
        {createElementList()}
      </ul>
    </main>
  )
}
