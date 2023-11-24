import React, { useState } from "react";
import "./auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmail, verifyAdmin } from "../../store/userSlice";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Auth = () => {
  const [isSignUp, setIsSignUP] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords does not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:4000/api/auth/register", {
        email,
        username,
        password,
      });

      const accessToken = res.data.accessToken;
      axios.defaults.headers.common["Authorization"] = accessToken;
      dispatch(addEmail(email));
      navigate("/");
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", {
        email,
        password,
      });

      const admin = res.data.user.isAdmin;
      console.log(admin);
      if (admin) {
        console.log("admin is Here!");
        dispatch(verifyAdmin("true"));
      }

      const accessToken = res.data.accessToken;
      axios.defaults.headers.common["Authorization"] = accessToken;

      dispatch(addEmail(email));
      navigate("/");
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
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
                  required
                />
                <div className="password-input">
                  <input
                    className="authInput authInput-pass"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="toggle-password"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </button>
                </div>
                <button
                  className="submitButton"
                  type="submit"
                  onClick={handleSignIn}
                >
                  Sign In
                </button>
              </form>
              {errorMessage && (
                <p style={{ color: "red", fontSize: "12px" }}>{errorMessage}</p>
              )}
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
                <div className="password-input">
                  <input
                    className="authInput authInput-pass"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="toggle-password"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </button>
                </div>
                <div className="password-input">
                  <input
                    className="authInput"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <button
                    className="toggle-password"
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </button>
                </div>
                <button
                  className="submitButton"
                  type="submit"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
                {errorMessage && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {errorMessage}
                  </p>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
