import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function Dashboard() {
  return (
    <div>
     
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home" style={{ color: "blue" }}>Varahi_softTech</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link style={{ color: "blue" }}>Dashboard</Nav.Link>
                <Nav.Link style={{ color: "blue" }}>Product</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <Button variant="outline-success" style={{ marginRight: "20px" }}>SigOut</Button>
        </Navbar>
        <div>
        
        
        </div>
      
    </div>
  )
}

export default Dashboard