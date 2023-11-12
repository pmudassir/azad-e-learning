import React from 'react';
import './contactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-left">
        <p>Contact Us</p>
        <h1>Connect with Our Experts</h1>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="4"></textarea>
          <button>Submit</button>
        </form>
      </div>
      <div className="contact-right">
        <img src="/images/contactus.png" alt="Contact" />
      </div>
    </div>
  );
};

export default ContactUs;