import useScroll from '../../utils/checkScroll';
import ButtonUp from '../../components/ButtonUp/ButtonUp';
import ListContainer from '../../components/ListContainer/ListContainer';
import { posts } from '../../constants';
import './Blog.css';

export default function Blog() {
  const maxScroll = 300;
  const scroll = useScroll();

  return (
    <main className="blog">
      <div className="blog__background" />
      {scroll > maxScroll && <ButtonUp />}
      <ListContainer list={posts} />
    </main>
  )
}
