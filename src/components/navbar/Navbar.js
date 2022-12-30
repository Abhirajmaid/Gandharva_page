import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <nav>
        <div className="left">
          LOGO
        </div>

        <div className="center">
            <ul>
              <li>Home</li>
              <li>Events</li>
              <li>About Us</li>
              <li>FAQs</li>
            </ul>
        </div>
        <div className="right">
          <button className='ContactBtn'>Contact Us</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar