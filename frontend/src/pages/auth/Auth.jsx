import React, { useState } from "react";
import "./auth.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import axios from "axios";

const Auth = () => {
  const [isSignUp, setIsSignUP] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", { email, username, password })
    } catch (error) {
      console.log(error);
    }
  }

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/login", { username, password })
    } catch (error) {
      console.log(error);
    }
  }

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
                    type="username"
                    placeholder="Username"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="authInput"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="submitButton" type="submit" onClick={handleSignin}>
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="authInput"
                    type="username"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    className="authInput"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="submitButton" type="submit" onClick={handleSignup}>
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