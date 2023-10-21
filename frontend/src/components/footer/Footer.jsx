import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footer">
          <div className="left">
            <div className="logo">
              <img src="/images/logo1.png" className="logoIcon" alt="logo" />
              <img src="/images/logo2.png" className="logoText" alt="logoIcon2" />
            </div>
            <div className="contact">
              <div className="socialIcons">
                <div className="socialIcon facebook"><img src="https://img.icons8.com/fluency/96/facebook-new.png" width={25} height={25} alt="faceBook" /></div>
                <div className="socialIcon instagram"><img src="https://img.icons8.com/fluency/96/instagram-new.png" width={25} height={25} alt="" /></div>
                <div className="socialIcon youtube"><img src="https://img.icons8.com/color/96/youtube-play.png" width={25} height={25} alt="" /></div>
                <div className="socialIcon linkedin"><img src="https://img.icons8.com/fluency/96/linkedin.png" width={25} height={25} alt="" /></div>
                <div className="socialIcon twitter"><img src="https://img.icons8.com/ios-filled/100/twitterx--v1.png" width={25} height={25} alt="" /></div>
              </div>
            </div>
          </div>
          <div className="right">
            <ul className="list">
              <li>Our Team</li>
              <li>Blog</li>
              <li>All Courses</li>
              <li>App Login</li>
              <li>About us</li>
              <li>Refund Policy</li>
              <li>Contact Us</li>
              <li>Privacy policy</li>
              <li>Shipping Policy</li>
              <li>Terms of service</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
        <div className="copyWright">
          <p>© 2023 -24 AZAD E-LEARNING. All Rights Reserved</p>
        </div>
    </footer>
  );
};

export default Footer;
