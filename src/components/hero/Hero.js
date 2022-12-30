import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>

      <div className="wrapper">
        <div className="left">
          <div className="gandharva">
            Gandharva
          </div>
          <div className="party">
              Let's Start The Party
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
        </div>

        <div className="right">
          Spinning thing lmao
        </div>
      </div>

      

    </div>
  )
}

export default Hero