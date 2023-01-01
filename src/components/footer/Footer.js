import React from 'react'
import './Footer.css'

import linkedIn from '../../images/linkedinLogo.png'
import youtube from '../../images/ytLogo.png'
import instagram from '../../images/igLogo.png'
import twitter from '../../images/twtLogo.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="logo">
            LOGO
        </div>
        <div className="slogan">
            Here Goes the Slogan!
        </div>
        <ul>
            <li>Home</li>
            <li>Events</li>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Sponsor Us</li>
        </ul>

        <div className="socials">
            <img src={linkedIn} alt="" className="sLogo" />
            <img src={youtube} alt="" className="sLogo" />
            <img src={instagram} alt="" className="sLogo" />
            <img src={twitter} alt="" className="sLogo" />
        </div>

        <div className="copyright">
                Copyright ©️2022. Gandharva. All Rights Reserved.
            </div>
        <div className="madewith">
                Made with ❤️.
        </div>


    </div>
  )
}

export default Footer