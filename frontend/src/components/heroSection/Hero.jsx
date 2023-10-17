import React from 'react'
import "./hero.css"

const Hero = () => {
    return (
        <div className='main'>
            <div className="left">
                <h1 className='header'>Kerala's Best <br />E - Learning Platform</h1>
                <span className='tagline'>"Any time - Anywhere"</span>
            </div>
            <div className="right">
                <img src="/images/Hero.jpg" alt="Hero" className='imageHero' style={{ width: "75%", height: "75%", marginRight: "200px" }} />
            </div>
        </div>
    )
}

export default Hero