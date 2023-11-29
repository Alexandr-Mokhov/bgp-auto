/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import useScroll from '../../utils/checkScroll';
import ButtonUp from '../../components/ButtonUp/ButtonUp';
import PriceTable from '../../components/PriceTable/PriceTable';
import { prices } from '../../constants/prices';
import './Prices.css';

export default function Prices() {
  const scroll = useScroll();
  const params = useParams();
  const maxScroll = 300;
  const blocks = {
    'transmission': useRef(null),
    'diagnostics': useRef(null),
    'chassis': useRef(null),
    'engine': useRef(null),
    'to': useRef(null),
  }

  const scrollToBlock = (block = "") => {
    if (block in blocks) {
      blocks[block].current.scrollIntoView({
        behavior: "smooth"
      });
    }
  }

  useEffect(() => {
    scrollToBlock(params.block);
  }, [params]);

  function createPriceTable() {
    return prices.map((item, i) => <PriceTable
      blocks={blocks}
      blockName={item.blockName}
      title={item.title}
      listItems={item.listItems}
      key={i}
    />)
  }

  return (
    <main className="prices">
      <div className="prices__background" />
      {scroll > maxScroll && <ButtonUp />}
      <div className="prices__container" id="start">
        {createPriceTable()}
      </div>
    </main>
  )
}
