import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.scss";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  const links = [{name:"Mesas", url:"/category/Mesas" },
  {name:"Bibliotecas", url:"/category/Bibliotecas" },
  {name:"Racks TV", url:"/category/Racks" },
  {name:"Decoración", url:"/category/Decoración" },
  {name:"Mesas de luz", url:"/category/MesasDeLuz" },
  {name: "Todos los productos", url:"/productos" }
];

  return (
    
    <div>
      <Navbar expand="lg" className="navBar">
        <Container>
          <Link to="/"><Navbar.Brand className="logoNav"><img
          src="/assets/logoTeka.jpg"
          alt="logo de Teka"
          
        /> </Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to= "/"><Nav.Link className="navLink">Inicio</Nav.Link> </Link>
              <NavDropdown title="Productos" className="navLink" id="basic-nav-dropdown">
              {links.map((l,i) =>{
                         return(
                          <Link to ={l.url}><NavDropdown.Item className="navLinkItem" key= {i}>{l.name}</NavDropdown.Item></Link>
             );
             })}
            </NavDropdown>
              <Link to= "/nosotros"><Nav.Link className="navLink">Sobre Nosotros</Nav.Link> </Link>
              <Link to= "/contacto"><Nav.Link className="navLink">Contactanos</Nav.Link> </Link>
            </Nav>
          </Navbar.Collapse>
          
          <CartWidget />
        </Container>
        
      </Navbar>
    </div>
  );
};

export default NavBar;