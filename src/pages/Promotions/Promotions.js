import ListContainer from '../../components/ListContainer/ListContainer';
import ButtonUp from '../../components/ButtonUp/ButtonUp';
import { promotions } from '../../constants/promotions';
import useScroll from '../../utils/checkScroll';
import './Promotions.css';

export default function Promotions({ onCardClick }) {
  const scroll = useScroll();
  const maxScroll = 300;

  return (
    <main className="promotions" aria-label="Наши акционные предложения">
      <div className="promotions__background" />
      {scroll > maxScroll && <ButtonUp />}
      <ListContainer list={promotions} onCardClick={onCardClick} />
    </main>
  )
}
