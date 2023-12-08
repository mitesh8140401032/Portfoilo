import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <div style={{ position: "fixed", width: "100%", zIndex: "999999" }}>

            <Navbar expand="lg" className="bg-body-tertiary">

                <Container>
                    <Navbar.Brand >
                        <a className='nav' href="#home">
                            AM
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">

                        </Nav>
                        <Nav >
                            <a className='nav' href="#home">
                                Home
                            </a>
                            <a className='nav' href="#about">
                                About
                            </a>
                            <a className='nav' href="#skills">
                                Skills
                            </a>
                            <a className='nav' href="#projects">
                                Project
                            </a>
                            <a className='nav' href="#contact">
                                Contact
                            </a>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
