import React from 'react';
import './hero.css';

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className="hero-left">
                <h1 className='header'>Kerala's Best<br />E - Learning Platform</h1>
                <span className='tagline'>"Any time - Anywhere"</span>
            </div>
            <div className="hero-right">
                <img
                    src="/images/Hero.jpg"
                    alt="Hero"
                    className='imageHero'
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
        </div>
    );
};

export default Hero;