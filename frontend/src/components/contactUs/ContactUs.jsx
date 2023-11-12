import React from "react";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1 className="contact-header">Contact Us</h1>
      <div className="contact-container">
        <div className="contact-element">
          <div className="contact-icon">
            <img
              width="30"
              height="30"
              className="contact-icon-img"
              src="https://img.icons8.com/material-outlined/192/1A1A1A/new-post.png"
              alt="new-post"
            />
          </div>
          <h3>Send Email</h3>
          <span className="contact-content">azadelearning@gmail.com</span>
        </div>
        <div className="contact-element">
          <div className="contact-icon">
            <img
              width="30"
              height="30"
              className="contact-icon-img"
              src="https://img.icons8.com/fluency-systems-regular/144/1A1A1A/phone.png"
              alt="phone"
            />
          </div>
          <h3>Call Us</h3>
          <span className="contact-content">+91 8891405893</span>
        </div>
        <div className="contact-element">
          <div className="contact-icon">
            <img
              width="30"
              height="30"
              className="contact-icon-img"
              src="https://img.icons8.com/fluency-systems-regular/96/marker--v1.png"
              alt="marker--v1"
            />
          </div>
          <h3>Address</h3>
          <span className="contact-content">Malappuram,kerala</span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
