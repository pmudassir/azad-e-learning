import React, { useState } from "react";
import "./auth.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addEmail } from '../../store/userSlice';

const Auth = () => {
  const [isSignUp, setIsSignUP] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/auth/register", { email, username, password })
<<<<<<< HEAD
      dispatch(addEmail(email));
=======
>>>>>>> 1698468 (auth err msgs done)
      navigate("/");
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    }
  }

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/auth/login", { email, password })
<<<<<<< HEAD
      dispatch(addEmail(email));
=======
>>>>>>> 1698468 (auth err msgs done)
      navigate("/");
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
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
            {/* <button className="authButtons" onClick={() => setIsSignUP(false)}>
              Sign Up with Google
            </button> */}
          </div>

          <div className="inputAuthContainer">
            {isSignUp ? (
              <div className="authInputs">
                <form action="#" className="authForm">
                  <h2>Sign In</h2>
                  <input
                    className="authInput"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="authInput"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="submitButton" type="submit" onClick={handleSignIn}>
                    Sign In
                  </button>
                </form>
                {errorMessage && <p style={{ color: 'red', fontSize: '12px' }}>{errorMessage}</p>}
              </div>
            ) : (
              <div className="authInputs">
                <form action="#" className="authForm">
                  <h2>Create an Account</h2>
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
                  <button className="submitButton" type="submit" onClick={handleSignUp}>
                    Sign Up
                  </button>
                  {errorMessage && <p style={{ color: 'red', fontSize: '12px' }}>{errorMessage}</p>}
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