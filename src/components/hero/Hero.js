import React from 'react'
import './Hero.css'

import Timer from '../timer/Timer'

function Hero() {
  
  
  return (
    <div className='hero'>


      <div className="wrapper">
          <div className="gandharva">
            GANDHARVA
          </div>
          <div className="party">
              LET'S START THE PARTY!
          </div>
          <div className="slogan">
            Slogan Goes here!
          </div>
          <div className="live">
            LIVE IN PUNE | FROM JAN 26-29, 2023
          </div>
          <div className="register">
            <button className='regbtn'>
              Register
            </button>
          </div>

          <div className="counter">
            <Timer/>
          </div>

      </div>
    </div>
  )
}



export default Hero