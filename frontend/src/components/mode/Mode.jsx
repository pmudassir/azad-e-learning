import React from 'react'
import "./mode.css"

const Mode = () => {
  return (
    <section className='modeSection'>
      <div className='modeContainer'>
        <div className="mode">
          <div className="modeLeft">
            <img src="/images/online-meet1.svg" alt="icon" className='modeIcon' />
          </div>
          <div className="modeRight">
            <h2 className='modeHeader'>Mode of Coaching</h2>
            <span className='modeDesc'>"We are conducting Online live classes via Google Meet."</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mode