import React from 'react'
import { useState } from 'react';
import './EventsSc.css'

import day1img from '../../images/day1.png'
import day2img from '../../images/day2.png'

function EventsSc() {
    const [curImage, setCurImage] = useState(day1img);

  return (
    
    <div className='eventsSc'>
        <div className="eStitle">
            EVENTS AND SCHEDULE
        </div>

        <div className="eBtns">
            <button className="day" onClick={() => setCurImage(day1img)}>Day 1</button>
            <button className="day" onClick={() => setCurImage(day2img)}>Day 2</button>
            <button className="day" onClick={() => setCurImage(day1img)}>Day 3</button>
            <button className="day" onClick={() => setCurImage(day1img)}>Day 4</button>
            <button className="day" onClick={() => setCurImage(day1img)}>Day 5</button>
            <button className="day" onClick={() => setCurImage(day1img)}>Day 6</button>
        </div>

        <div className="eImage">
            <img className='dayImg' src={curImage} alt="" />
        </div>

        <button className="eRegisterBtn">
            Register Now
        </button>

    </div>
  )
}

export default EventsSc