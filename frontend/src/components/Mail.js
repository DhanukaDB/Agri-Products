import React from "react";
import emailjs from "emailjs-com";

function Mail() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7yavpge",
        "template_motceg4",
        e.target,
        "fy8SgBtOKzkGQmN-T"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <input type="Send Email" value="send" />
      </form>
    </div>
  );
}

export default Mail;
