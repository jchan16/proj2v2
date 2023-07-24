import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap';

function Barf() {
  // changes hrefs later
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <LinkContainer to="/homef">
          <Navbar.Brand>CFA</Navbar.Brand>
        </LinkContainer>

        <LinkContainer to="/">
        <Navbar.Brand>English</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className =" d-flex justify-content-end" id="basic-navbar-nav">
          <Nav className="">

            <LinkContainer to="/location">
              <Nav.Link>Coordonnées/Localisation</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/coaches'>
              <Nav.Link>Entraîneurs</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Ligue" id="basic-nav-dropdown">
              <LinkContainer to='/league'>
                <NavDropdown.Item>Détails</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to='/register'>
                <NavDropdown.Item>Enregistrer</NavDropdown.Item>
              </LinkContainer>

            </NavDropdown>
            <NavDropdown title = "De location" id="basic-nav-dropdown2">
            <LinkContainer to='/balls'>
              <NavDropdown.Item>ballons de football</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer to='/cleats'>
              <NavDropdown.Item>taquets</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer to='/gloves'>
              <NavDropdown.Item>gants de gardien de but</NavDropdown.Item>
            </LinkContainer>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Barf;