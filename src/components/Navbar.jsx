import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/logo.png";
import IEM from "../assets/logo_white.png";

const Navbar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <>
      <div>
        <div
          className={click ? "main-container" : ""}
          onClick={() => Close()}
        />
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container">
            <Link exact to="/" className="nav-logo">
              <img src={IEM} alt="logo" />
              <img src={Logo} className="mx-3" alt="logo" />
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a
                  
                  href="#about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                 
                  href="#contact"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#games"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Games
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/teams"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Teams
                </a>
              </li>
              <li className="nav-item">
                <Link
                  
                  to="/profile"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Profile
                </Link>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "bi bi-x-octagon" : "bi bi-list"}></i>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
