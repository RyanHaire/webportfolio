import React from 'react'
import Navibar from '../components/Navibar'
import Footer from '../components/Footer'
import HomePageImg from '../assets/heian-homepage.png'
import MachinePage from '../assets/machinepage.png'
import ContactPage from '../assets/contactpage.png'
import AdminHomePage from '../assets/adminhomepage.png'
import CreateMachinePage from '../assets/createmachinepage.png'

const HeianProjectScreen = () => {
  return (

    <>
    <Navibar/>   
    <main className="center-hv h-100 mb-5">
        <h1>Heian Canada CNC Machinery Store</h1>
        <p className="w-50">This is a CNC machinery store for Heian Canada. Owner of the website can use CRUD operations to 
            manage machines which will be pulled by the frontend and displayed for customers to send a contact form
            if they are interested.
        </p>
        <div className="mt-5">
            <h1>Home Page</h1>
            <img className="portfolio-img" src={HomePageImg}/>
        </div>
        <div className="mt-5">
            <h1>Used Machine Page</h1>
            <img className="portfolio-img" src={MachinePage}/>
        </div>

        <div className="mt-5">
            <h1>Contact Page</h1>
            <img className="portfolio-img" src={ContactPage}/>
        </div>

        <div className="mt-5">
            <h1>Admin Page</h1>
            <img className="portfolio-img" src={AdminHomePage}/>
        </div>

        <div className="mt-5">
            <h1>Create Machine Admin Page</h1>
            <img className="portfolio-img" src={CreateMachinePage}/>
        </div>
    </main>
    <Footer/>
   </>
  )
}


export default HeianProjectScreen