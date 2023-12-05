import useScroll from '../../utils/checkScroll';
import ButtonUp from '../../components/ButtonUp/ButtonUp';
import ListContainer from '../../components/ListContainer/ListContainer';
import { posts } from '../../constants/posts';
import './Blog.css';

export default function Blog({ onCardClick }) {
  const maxScroll = 300;
  const scroll = useScroll();

  return (
    <main className="blog" aria-label="Фото и описание наших работ">
      <div className="blog__background" />
      {scroll > maxScroll && <ButtonUp />}
      <ListContainer list={posts} onCardClick={onCardClick} />
    </main>
  )
}
