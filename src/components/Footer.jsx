import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>
            <a href="https://wa.me/254111671926" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp: +254111671926</a><br />
            Email: info@ben-arts.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 BEN-ARTS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;