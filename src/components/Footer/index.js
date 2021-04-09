import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <footer>
            <div className="social-icons">
                <SocialIcon network="twitter" url="http://twitter.com/ryanhairedev"/>   
                <SocialIcon network="linkedin" url="https://www.linkedin.com/in/ryanwilliamhaire/"/>   
            </div>
        </footer>
    )
}

export default Footer
