import React from 'react'
import './EventsSc.css'
import day1img from '../../images/day1.png'

function EventsSc() {
  return (
    <div className='eventsSc'>
        <div className="eStitle">
            EVENTS AND SCHEDULE
        </div>

        <div className="eBtns">
            <button className="day">Day 1</button>
            <button className="day">Day 2</button>
            <button className="day">Day 3</button>
            <button className="day">Day 4</button>
            <button className="day">Day 5</button>
            <button className="day">Day 6</button>
        </div>

        <div className="eImage">
            <img className='dayImg' src={day1img} alt="" />
        </div>

        <button className="eRegisterBtn">
            Register Now
        </button>

    </div>
  )
}

export default EventsSc