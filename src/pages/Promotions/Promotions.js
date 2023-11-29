import useScroll from '../../utils/checkScroll';
import ListContainer from '../../components/ListContainer/ListContainer';
import ButtonUp from '../../components/ButtonUp/ButtonUp';
import { promotions } from '../../constants/promotions';
import './Promotions.css';

export default function Promotions() {
  const maxScroll = 300;
  const scroll = useScroll();

  return (
    <main className="promotions">
      <div className="promotions__background" />
      {scroll > maxScroll && <ButtonUp />}
      <ListContainer list={promotions} />
    </main>
  )
}
