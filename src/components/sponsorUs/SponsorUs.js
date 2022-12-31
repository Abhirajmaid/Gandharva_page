import React from 'react'
import './SponsorUs.css'

function SponsorUs() {
  return (
    <div className='sponsorUs'>
        <div className="sUwrap">
            <div className="sLeft">
                If you would like to sponsor this event, please reach out to us at <u>gandharva@viit.ac.in</u>
            </div>
            <div className="sLright">
                <button className="sponsorUsBtn">
                    Sponsor Us
                </button>
            </div>
        </div>
    </div>
  )
}

export default SponsorUs