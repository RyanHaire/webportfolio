import React from 'react'
import { Image, Navbar, Nav } from 'react-bootstrap'
import Logo from '../../assets/ryan-haire-logo.png'

const Navibar = () => {
    return (
        <header>
            <Navbar style={{width: '100%'}} bg="light" expand="lg">
                <Navbar.Brand href="/" className="ml-3"><Image src={Logo} className="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-3">
                        <Nav.Link href="/" className="nav-link mr-4">Home</Nav.Link>
                        <Nav.Link href="/portfolio" className="nav-link mr-4">Portfolio</Nav.Link>
                        <Nav.Link href="/about" className="nav-link mr-4">About</Nav.Link>
                        <Nav.Link href="/contact" className="nav-link mr-4">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Navibar
