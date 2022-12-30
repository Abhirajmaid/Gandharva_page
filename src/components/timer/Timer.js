import React from 'react'
import './Timer.css'
import {useState, useEffect} from 'react'

const defaultRemainingTime = {
    minutes:'00',
    hours:'00',
    days:'00',
}

function Timer() {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(()=>{
            updateRemainingTime();
        }, 1000);
        return () => clearInterval(intervalId);
      }, [])

    function updateRemainingTime() {
        console.log("hello world")
    }

  return (
    <div className='timer'>
        <div className='days'>
            <p className='dnum'>{remainingTime.days}</p>
            <div className='dfoot'>Days</div>
        </div>

        <div className='hours'>
            <p className='hnum'>{remainingTime.hours}</p>
            <div className='hfoot'>Hours</div>
        </div>

        <div className='minutes'>
            <p className='mnum'>{remainingTime.minutes}</p>
            <div className='mfoot'>Minutes</div>
        </div>
    </div>
  )
}

export default Timer