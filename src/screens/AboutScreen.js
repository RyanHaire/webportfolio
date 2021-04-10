import React from 'react'
import Navibar from '../components/Navibar'
import Footer from '../components/Footer'

const AboutScreen = () => {
    return (
        <>
         <Navibar/>   
         <main>
             <div className="center-hv mt-4">
                <h1 className="h1-title text-center mt-4">
                    About Ryan Haire
                </h1>
                <p className="p-about mt-3">
                    I am a graduate from Software Development and 
                    Network Engineering, an Advanced Diploma from 
                    Sheridan College. I learned how to program, 
                    how to design software, how to manage projects, 
                    how to design databases, how to mangage 
                    databases, and networking in wired and wireless systems. 
                    I taught myself web development on my 
                    free time, I mainly use Javascript and I am 
                    specializing in MERN stack. I am now in a Bachelor 
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
