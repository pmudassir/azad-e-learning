import React, { useState } from "react";
import "./form.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const Form = () => {
  const [sessionType, setSessionType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [district, setDistrict] = useState("");
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.email);

  const location = useLocation();

  const handleType = (option) => {
    setSessionType(option);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:4000/api/forms${location.pathname}`, {
        user,
        sessionType,
        name,
        email,
        mobileNumber,
        district,
      });
      swal({
        title: "Submitted!",
        text: "You successfully submitted the form!",
        icon: "success",
        button: "Done!",
      });
    } catch (error) {
      console.log(error);
    }
    setSessionType("");
    setName("");
    setEmail("");
    setMobileNumber("");
    setDistrict("");
  };

  return (
    <div className="formContainer">
      <div className="formItem">
        <form onSubmit={user ? handleSubmit : navigate("/auth")}>
          <div className="sessionType">
            <input
              type="button"
              id="inputSubmitForm"
              value="Online"
              onClick={() => handleType("online")}
              className={sessionType === "online" ? "selectedType" : ""}
            />
            <input
              type="button"
              id="inputSubmitForm"
              value="Offline"
              onClick={() => handleType("offline")}
              className={sessionType === "offline" ? "selectedType" : ""}
            />
          </div>
          <h4>Enter your details</h4>
          <div className="detailItems">
            <div className="detailsItem">
              <label htmlFor="text">
                Name<span>*</span>
              </label>
              <input
                className="inputTextForm"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="detailsItem">
              <label htmlFor="email">
                Email<span>*</span>
              </label>
              <input
                className="inputEmailForm"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="detailsItem">
              <label htmlFor="tel">
                Mobile Number<span>*</span>
              </label>
              <input
                className="inputTelForm"
                type="tel"
                placeholder="Mobile Number"
                pattern="[0-9]{10}"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className="detailsItem">
              <label htmlFor="text">
                District<span>*</span>
              </label>
              <select
                name="district"
                id="district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                required
              >
                <option autoFocus>Select District</option>
                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                <option value="Kollam">Kollam</option>
                <option value="Pathanamthitta">Pathanamthitta</option>
                <option value="Alappuzha">Alappuzha</option>
                <option value="Kottayam">Kottayam</option>
                <option value="Idukki">Idukki</option>
                <option value="Ernakulam">Ernakulam</option>
                <option value="Thrissur">Thrissur</option>
                <option value="Palakkad">Palakkad</option>
                <option value="Malappuram">Malappuram</option>
                <option value="Kozhikode">Kozhikode</option>
                <option value="Wayanad">Wayanad</option>
                <option value="Kannur">Kannur</option>
                <option value="Kasaragod">Kasaragod</option>
              </select>
            </div>
          </div>
          <input className="" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Form;
