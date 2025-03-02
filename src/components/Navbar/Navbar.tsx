import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="logo" />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="php">PHP</option>
        </select>
        <button>
          Sign up <img src={arrow_icon} alt="arrow-icon" />
        </button>
      </div>
    </div>
  );
}
