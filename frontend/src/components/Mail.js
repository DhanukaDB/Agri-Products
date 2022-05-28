import React from "react";
import emailjs from "emailjs-com";
import { Form } from 'react-bootstrap';

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
      <Form onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" />
        </Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="user_email" />
        <br />
        <input type="submit" className="btn btn-success" value="Send Mail" />
        <br /> <br />
      </Form>
    </div>
  );
}

export default Mail;
