import { Link } from "react-router-dom";

import "./header.css";
import logo from "../../assets/images/logo-bookmark.svg";

function Header() {
  const navbaritems = ["features", "extension", "contact", "login"];

  return (
    <header className="py-4">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a href="#" className="navbar-brand">
          <img src={logo} alt="Bookmark" />
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#menu"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ml-auto main-menu">
            {navbaritems.map((item, value) => (
              <li key={value} className="nav-item">
                {item !== "login" ? (
                  <a href={`#${item}`} className="nav-link ease">
                    {item}
                  </a>
                ) : (
                  <Link to="/login" className="nav-link ease active">
                    {item}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
