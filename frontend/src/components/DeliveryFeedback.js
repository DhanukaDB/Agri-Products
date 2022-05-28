import React ,{useState} from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";
 

export default function DeliveryFeedback(){  //adding function

    //creating states
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [type,setType] = useState("");
  const [contactNumber,setContactNumber] = useState("");
  const [trackingno,setTrackingno] = useState("");
  const [message,setMessage] = useState("");
 

  function sendData(e){  //create event send data
    

    //email Validation
    if(!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))){
      alert("Incorrect Email type");
      return
  }

   
    e.preventDefault(); //execute setData function, when click submit button

      const newFeedback ={
        
        username,
        email,
        type,
        contactNumber,
        trackingno,
        message 

      }

     axios.post(`http://localhost:5000/feedback/addf`, newFeedback).then(() =>{  //route from the backend

        alert("Feedback Added.Mail us for any updates or inqueries- saniagro@gmail.com") //display if adding is successful
        window.location = `/`;  //redirect to adding page
     }).catch((err) =>{   //display error if adding is not successful
        alert(err)
     })
  }

    return(
 
     <div> 
       <br></br>
       <blockquote class="blockquote">
 <center><h1 class="mb-0">Complaints and Feedback of Your Delivery</h1></center> 
</blockquote>
       <br></br>
        <form className="container"  onSubmit={sendData} > 

<div className="form-group">
    <label for="Username">Enter Username</label>
    <input type="text" className="form-control" id="username" aria-describedby="em" placeholder="Enter Username"  required
    onChange={(e)=>{
      setUsername(e.target.value);
     }}   />
     
  </div>
  <div class="form-group">
    <label for="email">Email Address</label>
    <input type="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email Address" required onChange={(e) =>{
      setEmail(e.target.value);
     }}  />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  Type
  <div class="form-check">    
  <input class="form-check-input" type="radio" name="type" id="feedback" value="feedback"  required onChange={(e) =>{
      setType(e.target.value);
     }}  />
  <label class="form-check-label" for="feedback">
    Feedback
  </label>
</div>
<div class="form-check">
  <input class="form-check-input"   type="radio" name="type" id="complaint" value="complint"  required onChange={(e) =>{
      setType(e.target.value);
     }}  />
  <label class="form-check-label" for="complaint">
    Complaint
  </label>
</div>
<br></br>
<div class="form-group">
    <label for="contactNumber">Enter Contact Number</label>
    <input type="text" class="form-control" id="contactNumber" aria-describedby="em" placeholder="Contact Number" required onChange={(e) =>{
      setContactNumber(e.target.value);
     }}  />
     
  </div>

  <br></br>
<div class="form-group">
    <label for="trackingno">Tracking Number</label>
    <input type="text" class="form-control" id="trackingno" aria-describedby="em" placeholder="Tracking Number" required onChange={(e) =>{
     setTrackingno(e.target.value);
     }}  />
     
  </div>
 
  <div class="form-group">
    <label for="message">Description</label>
    <textarea class="form-control" id="message" rows="3" placeholder="Please include your Feedback or Complaint" required onChange={(e) =>{
      setMessage(e.target.value);
     }}></textarea>
  </div>

  <br/>
  <Button type="submit" >Submit</Button>   
   
 
    
        
</form>

 
</div>
    );
}