
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar ({children}) {
  return (
    <Navbar bg="light" expand="lg">
     
      <Container>
        <Navbar.Brand href="#home">Ahimsa Productos Naturales </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"> {children}</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Aceites</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cremas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jabones</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#aboutus"> Quienes Somos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;