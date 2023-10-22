import React from 'react';
import './hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h1>Kerala's Best <br /> E-Learning <br /> Platform</h1>
                <p>Any time, Anywhere</p>
            </div>
            <div className="hero-right">
                <img src="/images/Hero.jpg" alt="Hero" />
            </div>
        </div>
    );
};

export default Hero;