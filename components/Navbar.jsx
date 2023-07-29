import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Routes, Link } from 'react-router-dom';



function BasicExample() {
    return ( 
        <Routes>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/footer"}>Footer</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button className='btn btn-dark'>Submit</Button>
            </Container>
        </Navbar>
        </Routes>
    );
}

export default BasicExample;