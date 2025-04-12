import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Button, Container, Form } from 'react-bootstrap';
import { useAuth } from '../AuthContext';

const NavbarComponent = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">sheRide</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/BookRide">Book A Ride</Nav.Link>
            <Nav.Link as={Link} to="/Pricing">Pricing</Nav.Link>
            <Nav.Link as={Link} to="/DriverRegistration">Driver Registration</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <div style={{ display: 'flex', gap: '9px' }}>
              {currentUser ? (
                <NavDropdown
                  title={
                    <span>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2922/2922561.png"
                        alt="Profile"
                        style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }}
                      />
                      {currentUser.email}
                    </span>
                  }
                  id="user-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/EditProfile">Edit Profile</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Favorites">Favorites</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/History">History</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Wallet">Wallet</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link as={Link} to="/Login">
                  <Button variant="outline-success">LOGIN</Button>
                </Nav.Link>
              )}
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
