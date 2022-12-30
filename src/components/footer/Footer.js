import React from 'react'
import './Footer.css'

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