import React, {useState, useEffect} from 'react'
import './Hero.css'

import Timer from '../timer/Timer'

function Hero() {
const [timerDays, setTimerDays] = useState();
const [timerHours, setTimerHours] = useState();
const [timerMinutes, setTimerMinutes] = useState();

let interval;

const startTimer=()=> {
  const countDownDate = new Date("Jan 23, 2023 ").getTime();

  interval = setInterval(()=>{
    const now = new Date().getTime();

    const distance = countDownDate-now;

    const days = Math.floor(distance /(24*60*60*1000));
    const hours = Math.floor(distance % (24*60*60*1000)/(1000*60*60));
    const minutes = Math.floor(distance % (60*60*1000)/(1000*60));

    if (distance<0){
      clearInterval(interval.current);
    }

    else {
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
    }
    
  })
}

  useEffect(()=>{
    startTimer();
  })

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
            <Timer timerDays={timerDays} timerHours={timerHours} 
            timerMinutes={timerMinutes}/>
          </div>

      </div>
    </div>
  )
}



export default Hero