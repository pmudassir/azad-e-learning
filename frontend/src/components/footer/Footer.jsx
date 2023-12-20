import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footer">
          <div className="leftFooter">
            <div className="iconFooter">
              <img src="/images/logo1.png" className="logoFooter" alt="logo" />
              <img
                src="/images/logo2.png"
                className="logoText"
                alt="logoIcon2"
              />
            </div>
          </div>
          <div className="contact">
            <div className="socialIcons">
              <div className="socialIcon facebook">
                <img
                  src="https://img.icons8.com/fluency/96/facebook-new.png"
                  width={25}
                  height={25}
                  alt="faceBook"
                />
              </div>
              <div className="socialIcon instagram">
                <img
                  src="https://img.icons8.com/fluency/96/instagram-new.png"
                  width={25}
                  height={25}
                  alt="instagram"
                />
              </div>
              <div className="socialIcon youtube">
                <img
                  src="https://img.icons8.com/color/96/youtube-play.png"
                  width={25}
                  height={25}
                  alt="youtube"
                />
              </div>
              <div className="socialIcon linkedin">
                <img
                  src="https://img.icons8.com/fluency/96/linkedin.png"
                  width={25}
                  height={25}
                  alt="linkedin"
                />
              </div>
              <div className="socialIcon twitter">
                <img
                  src="https://img.icons8.com/ios-filled/100/twitterx--v1.png"
                  width={25}
                  height={25}
                  alt="twitter"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="footerLinks">
          <ul className="link-lists">
            <Link to="/">
              <li className="link">Home</li>
            </Link>
            <a href="#courses">
              {" "}
              <li className="link">Courses</li>
            </a>
            <a href="#about">
              {" "}
              <li className="link">About</li>
            </a>
            <a href="#contact">
              {" "}
              <li className="link">Contact</li>
            </a>
          </ul>
        </div>
      </div>
      <hr className="footer-horizontal" />
      <div className="copyWright">
        <p>© 2023 -24 AZAD E-LEARNING. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
