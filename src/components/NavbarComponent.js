import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
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
          <Nav.Link as={Link} to="/Login"><Button variant="outline-success">LOGIN</Button></Nav.Link>
          </div>
          </Form> 
         </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
