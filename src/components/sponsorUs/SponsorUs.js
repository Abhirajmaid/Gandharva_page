import React from 'react'
import './SponsorUs.css'

function SponsorUs() {
  return (
    <div className='sponsorUs'>
        <div className="sUwrap">
            <div className="left">
                If you would like to sponsor this event, please reach out to us at <u>gandharva@viit.ac.in</u>
            </div>
            <div className="right">
                <button className="sponsorUsBtn">
                    Sponsor Us
                </button>
            </div>
        </div>
    </div>
  )
}

export default SponsorUs