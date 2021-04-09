import React from 'react'
import { Image, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/ryan-haire-logo.png'

const Navibar = () => {
    return (
        <header>
            <Navbar style={{width: '100%'}} bg="light" expand="lg">
                <Navbar.Brand href="/" className="ml-3"><Image src={Logo} className="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-3">
                        <Link to="/" className="nav-link mr-4">Home</Link>
                        <Link to="/portfolio" className="nav-link mr-4">Portfolio</Link>
                        <Link to="/about" className="nav-link mr-4">About</Link>
                        <Link to="/contact" className="nav-link mr-4">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Navibar
