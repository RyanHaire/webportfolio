import React from 'react'
import Navibar from '../components/Navibar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
const PortfolioScreen = () => {
    return (
        <>
         <Navibar/>   
         <main className="center-hv">
            {/* <h1 className="text-center txt-primary mt-10 font-italic fw-bold fs-large">Coming soon!</h1> */}
            <Link to="/heian-canada" className="center btn-primary-rh mt-3">View Heian Canada Website</Link>
         </main>
         <Footer/>
        </>
    )
}

export default PortfolioScreen
