import React from 'react'
import Navibar from '../components/Navibar'
import Footer from '../components/Footer'

const AboutScreen = () => {
    return (
        <>
         <Navibar/>   
         <main>
             <div className="center-hv h-100 mt-4">
                <h1 className="h1-title mt-4">
                    About Me!
                </h1>
                <p className="p-about mt-3">
                    I am a graduate from Software Development and 
                    Network Engineering, an Advanced Diploma from 
                    Sheridan College. 
                    
                    <p className="pt-50">I learned how to</p> 
                    <ul className="list pb-50">
                        <li>develope software</li>
                        <li>design software</li>
                        <li>manage projects</li>
                        <li>manage and design databases</li>
                    </ul>
                    
                    <p className="pb-50">
                        I am comfortable with Javascript and web development with ReactJS. 
                        As well as SQL and NoSQL specifically MySQL and MongoDB. 
                        I have experience with designing websites and performing SEO services for clients.
                    </p>
                    
                    
                    I am now in a Bachelor 
                    of Computer Science program called Mobile Computing at 
                    Sheridan College.
                </p>
             </div>
         </main>
         <Footer/>
        </>
    )
}

export default AboutScreen
