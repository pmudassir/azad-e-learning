import React, { useState } from "react";
import "./auth.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Auth = () => {
  const [isSignUp, setIsSignUP] = useState(true);

  return (
    <>
      <Navbar />
      <div className="authContainer">
        <div className="authBox">
          <div className="buttonsContainer">
            <button className="authButtons" onClick={() => setIsSignUP(true)}>
              Sign In
            </button>
            <button className="authButtons" onClick={() => setIsSignUP(false)}>
              Sign Up
            </button>
          </div>
          {/* <div className='vertical-line'></div> */}
          <div className="inputAuthContainer">
            {isSignUp ? (
              <div className="authInputs">
              <h2>Sign In</h2>
                <div className="authInput">
                  <label htmlFor="text">Email:</label>
                  <input className="" type="email" placeholder="Your Email" />
                </div>
              </div>
            ) : (
              <div className="authInputs">
              <h2>Create Account</h2>
                <div className="authInput">
                  <label htmlFor="text">Name:</label>
                  <input className="" type="" placeholder="" />
                </div>
                <div className="authInput">
                  <label htmlFor="text">Email:</label>
                  <input className="" type="" placeholder="" />
                </div>
                <div className="authInput">
                  <label htmlFor="text">Password:</label>
                  <input className="" type="" placeholder="" />
                </div>
                <div className="authInput">
                  <label htmlFor="text">Repeat Password:</label>
                  <input className="" type="" placeholder="" />
                </div>
                   <button type="submit">Sign Up</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Auth;
