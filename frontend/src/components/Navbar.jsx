import { Link } from "react-router-dom";
import "../styless/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">TravelBharat</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/states">States</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;