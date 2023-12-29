import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
<<<<<<< HEAD
import logo from './Assets/Image/Akbari-1__1___1___1_-removebg-preview.png'
=======
>>>>>>> 1ea700c9e91d930a439a0299e513da7ee7e87539
export default function Header() {
    return (
        <div style={{ position: "fixed", width: "100%", zIndex: "999999999" }}>

            <Navbar expand="lg" className="bg-body-tertiary">

                <Container>
                    <Navbar.Brand >
                        <a className='nav' href="#home">
                            <img src={logo} alt="" height={40} />
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
