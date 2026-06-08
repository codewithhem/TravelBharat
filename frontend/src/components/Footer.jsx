import { Link } from "react-router-dom";
import "../styless/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-box">
        <h2>TravelBharat</h2>
        <p>India Tourism Information Platform</p>
        <p>State-wise & City-wise Travel Guide</p>
        <p>Culture • Food • Heritage • Places</p>
      </div>

      <div className="footer-box">
        <h3>Quick Links</h3>
        <Link to="/">Home</Link>
        <Link to="/states">States</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="footer-box">
        <h3>Categories</h3>
        <p>Heritage Tourism</p>
        <p>Beach Tourism</p>
        <p>Adventure Tourism</p>
        <p>Nature Tourism</p>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TravelBharat. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;