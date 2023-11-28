import useScroll from '../../utils/checkScroll';
import ButtonUp from '../../components/ButtonUp/ButtonUp';
import ListElement from '../../components/ListElement/ListElement';
import { posts } from '../../constants';
import './Blog.css';

export default function Blog() {
  const maxScroll = 300;
  const scroll = useScroll();

  function createElementList() {
    return posts.map((item, i) => <ListElement
      imageClass={item.imageClass}
      title={item.title}
      paragraph={item.paragraph}
      key={i}
    />)
  }

  return (
    <main className="blog">
      <div className="blog__background" />
      {scroll > maxScroll && <ButtonUp />}
      <ul className="blog__container" id="start">
        {createElementList()}
      </ul>
    </main>
  )
}
