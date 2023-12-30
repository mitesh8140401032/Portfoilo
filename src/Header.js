import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './Assets/Image/Akbari-1__1___1___1_-removebg-preview.png';
import Resume from './Assets/Image/Mitesh_resume-1.png';

export default function Header() {
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = Resume; // Assuming Resume is the path to your resume image
        link.download = 'Mitesh_resume.png'; // Set the desired download filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div style={{ position: 'fixed', width: '100%', zIndex: '999999999' }}>
            <Navbar expand="lg" className="bg-body-tertiary text-center">
                <Container>
                    <Navbar.Brand>
                        <a className='nav' href="#home">
                            <img src={logo} alt="" height={40} />
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
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
                            <a className='nav' onClick={downloadResume} style={{ cursor: 'pointer' }}>
                                <b> Resume</b>
                            </a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
