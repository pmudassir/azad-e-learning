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
            <button className="authButtons" onClick={() => setIsSignUP(false)}>
              Sign Up with Google
            </button>
          </div>

          <div className="inputAuthContainer">
            {isSignUp ? (
              <div className="authInputs">
                <form action="#" className="authForm">
                  <h2>Sign In</h2>
                  <input
                    className="authInput"
                    type="email"
                    placeholder="Your Email"
                  />
                  <input
                    className="authInput"
                    type="password"
                    placeholder="Password"
                  />
                  <button className="submitButton" type="submit">
                    Sign In
                  </button>
                </form>
              </div>
            ) : (
              <div className="authInputs">
                <form action="#" className="authForm">
                  <h2>Create Account</h2>
                  <input className="authInput" type="text" placeholder="Name" />
                  <input
                    className="authInput"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="authInput"
                    type="password"
                    placeholder="Password"
                  />
                  <input
                    className="authInput"
                    type="password"
                    placeholder="Repeat-password"
                  />
                  <button className="submitButton" type="submit">
                    Sign Up
                  </button>
                </form>

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
