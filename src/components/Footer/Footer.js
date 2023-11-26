import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__copywriting">&copy; {new Date().getFullYear()} BGP AUTO. Александр Мохов</h2>
        <div className="footer__social">
          <a href="https://vk.com/bgp.auto" target="_blank" rel="noreferrer"><div className="footer__social-icon" /></a>
        </div>
      </div>
    </footer>
  )
}