import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { addEmail } from "../../../store/userSlice";

const EmailVerification = () => {
  const { token } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const verifying = async () => {
      try {
        const res = await axios.post(
          `http://localhost:4000/api/auth/verify/${token}`
        );

        const email = res.data.user.email;

        swal({
          title: " Your Email Verified!",
          text: "You successfully verified your email!",
          icon: "success",
          button: "Done!",
        });

        dispatch(addEmail(email));

        navigate("/");
      } catch (error) {
        if (error.response) {
          setErrorMessage(error.response.data.user.message);
        }
      }
    };
    verifying();
  });

  return (
    <>
      <h1 style={{ textAlign: "center", paddingTop: "100px" }}>
        verifying Your Email
      </h1>
      {errorMessage && (
        <p style={{ color: "red", fontSize: "12px" }}>{errorMessage}</p>
      )}
    </>
  );
};

export default EmailVerification;
