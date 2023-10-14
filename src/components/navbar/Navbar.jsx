import "./navbar.css";
import logo from "../pictures/logo.jpeg";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar" id="top">
      <div className="navbar-div">
        <NavLink to="/">
          <img src={logo} className="logo" />
        </NavLink>
        {location.pathname === "/" ? (
          <a className="say-hello" href="#contact">
            Contact
          </a>
        ) : (
          <NavLink className="say-hello" to="/">
            Home
          </NavLink>
        )}
      </div>
    </nav>
  );
};