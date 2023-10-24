import React from 'react';
import './about.css';

const About = () => {
    return (
        <div class="responsive-container-block bigContainer">
            <div class="responsive-container-block Container">
                <p class="text-blk heading">
                    About Us
                </p>
                <p class="text-blk subHeading">
                    We are Kerala's premier E-Learning Platform, dedicated to providing high-quality education
                    anytime, anywhere. Our mission is to empower learners through innovative and accessible
                    online courses. With a team of expert educators and cutting-edge technology, we strive for
                    excellence and a bright future for all our students.
                </p>
                {/* <div class="social-icons-container">
                    <a class="social-icon">
                        <img class="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb33.png" />
                    </a>
                    <a class="social-icon">
                        <img class="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb34.png" />
                    </a>
                    <a class="social-icon">
                        <img class="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb35.png" />
                    </a>
                    <a class="social-icon">
                        <img class="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb36.png" />
                    </a>
                </div> */}
            </div>
        </div>
    );
};

export default About;