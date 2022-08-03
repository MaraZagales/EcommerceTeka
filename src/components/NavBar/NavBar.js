import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.scss";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="navBar">
        <Container>
          <Link to="/"><Navbar.Brand href="#home" className="logoNav"><img
          src="/assets/logoTeka.jpg"
          alt="logo de Teka"
          
        /> </Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to= "/"><Nav.Link className="navLink" href="#home">Inicio</Nav.Link> </Link>
              <Link to= "/productos"><Nav.Link className="navLink"href="#link">Productos</Nav.Link> </Link>
              <Link to= "/nosotros"><Nav.Link className="navLink"href="#link">Sobre Nosotros</Nav.Link> </Link>
              <Link to= "/contacto"><Nav.Link className="navLink"href="#link">Contactanos</Nav.Link> </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget />
      </Navbar>
    </div>
  );
};

export default NavBar;
