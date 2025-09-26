// src/components/Footer.jsx
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>🧿 Pokemon</h2>
          <p>Temukan, kenali, dan koleksi semua Pokémon favoritmu!</p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#types">Types</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" alt="Instagram" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png" alt="Facebook" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="Twitter" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 PokeDex App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
