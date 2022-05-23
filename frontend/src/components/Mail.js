import React from "react";
import emailjs from "emailjs-com";

function Mail() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_74pp69a",
        "template_motceg4",
        e.target,
        "fy8SgBtOKzkGQmN-T"
      )
      .then((res) => {
        console.log(res);
        alert("Check Your Inbox");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" />
        <br />
        <label>Email</label>
        <input type="email" name="user_email" />
        <br />
        <br />
        <input type="submit" className="btn btn-info" value="Send" />
      </form>
    </div>
  );
}

export default Mail;
