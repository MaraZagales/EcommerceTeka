import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.scss";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  
  return (
    <div>
      <nav className="navBar">
        <div>
          <Link to="/" className="logoNav">
          <h1>TEKA LIVINGS</h1>
        </Link>
        </div>
        <div className="divMenu">
        <ul className="navMenu">
        <Link to="/" className="navLink"><li>Inicio</li></Link>
        <Link to="/category/Mesas" className="navLink"><li>Mesas</li></Link> 
        <Link to="/category/Bibliotecas" className="navLink"><li>Bibliotecas</li></Link> 
        <Link to="/category/Racks" className="navLink"><li>Racks</li></Link> 
        <Link to="/category/Decoracion" className="navLink"><li>Decoracion</li></Link> 
        <Link to="/contacto" className="navLink"><li> Contactanos </li> </Link>   
        </ul>
        <CartWidget />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
