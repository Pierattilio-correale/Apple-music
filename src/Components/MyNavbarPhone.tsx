import { Container, Navbar, Nav } from "react-bootstrap";

import AppleMusic from "../assets/img/music.svg";
import { Link } from "react-router-dom";
function MyNavbarPhone() {
  return (
    <Navbar
      expand="lg"
      className=" d-lg-none"
      style={{ backgroundColor: "#2E2E2E" }}
    >
      <Container>
        <div className="d-flex flex-row-reverse justify-content-between w-100 align-items-center">
          <a
            href="#"
            className="ms-5  p-0 m-0 text-decoration-none colorerosso"
          >
            Accedi
          </a>
          <Navbar.Brand className="ms-5" href="#home">
            <img src={AppleMusic} className="img-white" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="custom-toggler"
          >
            <div className="icon-lines">
              <span></span>
              <span></span>
            </div>
          </Navbar.Toggle>
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
            <Nav.Link href="#link" className="text-white">
              Novità
            </Nav.Link>
            <Nav.Link href="#link " className="text-white">
              Radio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbarPhone;
