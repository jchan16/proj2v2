import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap';

function Bar() {
  
  // changes hrefs later
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container >
        <LinkContainer to="/" aria-description="Link to Homepage">
          <Navbar.Brand>ASC</Navbar.Brand>
        </LinkContainer>

        <LinkContainer to="/homef" aria-description=" Link to French Homepage">
        <Navbar.Brand>French</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className =" d-flex justify-content-end" id="basic-navbar-nav">
          <Nav className="">

            <LinkContainer to="/location" aria-description=" Link to Contact/Location Page">
              <Nav.Link>Contact/Location</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/coaches' aria-description=" Link to Coaches Page">
              <Nav.Link>Coaches</Nav.Link>
            </LinkContainer>

            <NavDropdown title="League" id="basic-nav-dropdown" aria-description="Link that opens dropdown menu for league options">
              <LinkContainer to='/league' aria-description=" 1st option under league drop down, link to league details page" aria>
                <NavDropdown.Item>Details</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to='/register' aria-description=" 1st option under league drop down, link to league register page">
                <NavDropdown.Item>Register</NavDropdown.Item>
              </LinkContainer>

            </NavDropdown>
            <NavDropdown title = "Rental" id="basic-nav-dropdown2" aria-description="link that opens drop down menu for rental options">
            <LinkContainer to='/balls'aria-description=" 1st option under rental drop down, link to soccer balls rental  page">
              <NavDropdown.Item>Soccer Balls</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer to='/cleats'aria-description=" 1st option under league drop down, link to soccer cleats rental page">
              <NavDropdown.Item>Cleats</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer to='/gloves'aria-description=" 1st option under league drop down, link to goalie gloves rental page">
              <NavDropdown.Item>Goalie Gloves</NavDropdown.Item>
            </LinkContainer>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Bar;