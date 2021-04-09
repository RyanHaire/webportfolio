import React from 'react'
import { Container } from 'react-bootstrap'
import Navibar from '../components/Navibar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const HomeScreen = () => {
    return (
        <>
        <Navibar/>
        <main>
            <Container>
                <div className="center-hv">
                    <h1 className="txt-secondary">Hey, I'm <span className="txt-primary">Ryan Haire</span>.</h1>
                    <h1 className="txt-secondary">I'm a fullstack web developer.</h1>
                    <Link to="/portfolio" className="btn-primary-rh mt-3">View my portfolio</Link>
                </div>
            </Container>
        </main>
        <Footer/>
        </>
    )
}

export default HomeScreen
