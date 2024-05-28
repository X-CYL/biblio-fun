import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  return (
    <>
        <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link className="fs-1 me-3 header-style" style={{color:"#175ABF"}} href="#home">Acceuil</Nav.Link>
            <Nav.Link className="fs-1 me-3 header-style" style={{color:"#175ABF"}} href="#link">Qui suis-je ?</Nav.Link>
            <NavDropdown className="fs-1 me-3 header-style" style={{color:"#175ABF"}} title="Gérer mes livres" id="basic-nav-dropdown">
              <NavDropdown.Item className="fs-1 me-3 header-style" style={{color:"#175ABF"}} href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item className="fs-1 me-3 header-style" style={{color:"#175ABF"}} href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item className="fs-1 me-3 header-style" style={{color:"#175ABF"}} href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="fs-1 me-3 header-style" style={{color:"#175ABF"}} href='#connexion'>Se connecter</Nav.Link>
            <Nav.Link className="fs-1 me-3 header-style" style={{color:"#175ABF"}} href='#inscription'>S'inscrire</Nav.Link>
            <Nav.Link className="fs-1 me-3 header-style" style={{color:"#175ABF"}} href='#compte'>Compte</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    
  )
}
