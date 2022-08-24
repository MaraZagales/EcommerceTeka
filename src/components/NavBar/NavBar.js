import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.scss";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  const links = [
    { name: "Mesas", url: "/category/Mesas" },
    { name: "Bibliotecas", url: "/category/Bibliotecas" },
    { name: "Racks TV", url: "/category/Racks" },
    { name: "Decoración", url: "/category/Decoracion" },
    { name: "Mesas de luz", url: "/category/MesasDeLuz" },
    { name: "Todos los productos", url: "/productos" },
  ];

  return (
    <div>
      <nav className="navBar">
        <div>
          <Link to="/">
          <img src="/assets/logoTeka.jpg" className="logoNav" alt="logo de Teka" />
        </Link>
        </div>
        <div>
        <ul>
          <Link to="/">
            <li className="navLink">Inicio</li>
          </Link>
          <li className="navLink">
            Productos
            <ul>
              {links.map((l, i) => {
                return (
                  <Link to={l.url}> <li className="navLink" key={i}>{l.name}</li></Link>  
                );
              })}
            </ul>
          </li>
          <Link to="/nosotros">
            <li className="navLink">Sobre Nosotros</li>
          </Link>
          <Link to="/contacto">
            <li className="navLink">Contactanos</li>
          </Link>
        </ul>
        </div>
        <div>
        <CartWidget />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
