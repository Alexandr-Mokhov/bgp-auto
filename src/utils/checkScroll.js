import { useState, useEffect } from 'react';

export default function useScroll() {
  const [scroll, setScroll] = useState(0);

  function debounce(func, timeout = 100) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    }
    window.addEventListener("scroll", debounce(handleScroll, 50));
    return () => window.removeEventListener("scroll", debounce(handleScroll, 50));
  }, []);

  return scroll;
}