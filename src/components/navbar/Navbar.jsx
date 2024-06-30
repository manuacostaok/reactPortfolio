import "./navbar.css";
import logo from "../pictures/logo.jpeg";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DarkMode from "../theme/DarkMode";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../components/switch-language/LanguageSwitcher';


export const Navbar = () => {

  const { t } = useTranslation();
  const location = useLocation();

  return (
    <nav className="navbar" id="top">
      <div className="navbar-div">
        <NavLink to="/">
          <img src={logo} className="logo"  alt="" />
        </NavLink>
        
      </div>
        
      
      {location.pathname === "/" ? (
          <a className="say-hello" href="#contact">
          {t('navbar.contact')}
        </a>
        ) : (
          <NavLink className="say-hello" to="/">
            {t('navbar.home')}
            
          </NavLink>
        )}
        
      
    </nav>
  );
};