import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { authentication } from "../../firabaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import "./mobilepay.css";

function MobilePayModal() {
  //country code
  const countryCode = "+94";
  //OTP
  const [mobileNumber, setMobileNumber] = useState(countryCode);
  const [formExpand, setFormExpand] = useState(false);
  const [otp, setOtp] = useState("");

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      authentication
    );
  };

  const requestOtp = (e) => {
    e.preventDefault();

    if (mobileNumber.length >= 12) {
      setFormExpand(true);
      console.log("request");
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;

      signInWithPhoneNumber(authentication, mobileNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          // Error; SMS not sent
          console.log(error);
        });
    }
  };

  const verifyOTP = (e) => {
    e.preventDefault();
    let otp = e.target.value;
    setOtp(otp);
    //if user enter six digit only it should verify
    if (otp.length === 6) {

      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user);
          alert("Payment sucessfull!");
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
        });
    }
  };

  return (
    <div className="form-container">
      <Form onSubmit={requestOtp}>
        <h1>Pay Via Mobile Phone</h1>
        <div className="mb-3">
          <label>Phone Number</label>
          <input
            type="tel"
            className="form-control telInput"
            id="phoneNumberInput"
            aria-describedby="emailHelp"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <div className="form-text">Please enter your phone number</div>
        </div>
        {formExpand === true ? (
          <>
            <div className="mb-3">
              <label htmlFor="otpInput" className="form-label">
                OTP
              </label>
              <input
                type="number"
                className="form-control"
                id="otpInput"
                value={otp}
                onChange={verifyOTP}
              />
              <div id="otp-help" className="form-text">
                Please enter otp
              </div>
            </div>
          </>
        ) : null}
        {formExpand === false ? (
          <Button type="submit" className="btn btn-primary">
            Request OTP
          </Button>
        ) : null}
        <div id="recaptcha-container"></div>
      </Form>
    </div>
  );
}

export default MobilePayModal;
