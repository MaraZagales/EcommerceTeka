import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./NavBar.scss";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="navBar">
        
        <Container>
          <Navbar.Brand href="#home"><img
          src="/assets/logoTeka.jpg"
          alt="logo de Teka"
          className="logoNav"
        /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto containerNav">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sillas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Mesas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Rack TV</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Sillones</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">¿Cómo Comprar?</Nav.Link>
              <Nav.Link href="#link">Contactanos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget />
      </Navbar>
    </div>
  );
};

export default NavBar;
