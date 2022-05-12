import React from "react";
import {Link} from 'react-router-dom'
import {Col,Image} from "react-bootstrap";
import { useState} from 'react';
import axois from "axios";
import{Form,Button,Container,Row} from "react-bootstrap";


const FarmerSignup = () => {
   
    const [username, setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [phoneno,setPhoneno] = useState("");
    const [password, setPassword] = useState("");
    const [state, setstate] = useState("");
    
    function sendData(e) {
        if(!username || !email || !phoneno || !password){
            alert("Please fill  in all  fields");
            return
        } 

        
        else  if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            alert("Invalid email");
             return
         }

        else if(phoneno.trim().length !=10){
            alert("Invalid phoneno");
            return
        }

        e.preventDefault();
        
        const newFarmer ={
            username,
            email,
            phoneno,
            password,
            state
        }
         console.log(newFarmer)  
         //alert("Success");


         axois.post("http://localhost:5000/farmer/create", newFarmer).then(() => {
             alert("Registration Success");

             setUsername("");
             setEmail("");
             setPhoneno("");
             setPassword("");
             setstate("");


         }).catch((err) =>{
             alert(err)
         })
    }


    return(
        <div> 
            <Container>
  <Row>
    <Col>  <br/><br/><br/><br/><br/><br/><br/><br/><br/>
     <Image src="https://res.cloudinary.com/hidl3r/image/upload/v1652381357/AgriManagement/1b34759c948ebfa256c9c05aee8fee11_ofe1yx.gif" fluid /></Col>
    <Col>  <Form className="container" onSubmit={sendData} >
          <div className = "signin1">
            <div className= "signin">
          <Col xs={1} md={12}  >
                <Image  className="im" src="https://res.cloudinary.com/hidl3r/image/upload/v1631611510/itp/ulogin_b64etx.png" roundedCircle />
                <br/> <br/>
              </Col>
 
                <h1 className="login">Sign Up</h1>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                     <Form.Control type="text" placeholder="Enter Username"  value = {username}
                        onChange={(e) => setUsername (e.target.value)} />
               </Form.Group>
                <br/>
               
                <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Control type="email" placeholder="Enter email"  value = {email}
                        onChange={(e) => setEmail (e.target.value)} />
     
                </Form.Group>

                <br/>
               <Form.Group className="mb-3" controlId="formBasicPhoneno">
                     <Form.Control type="Number" placeholder="Enter Phone number"  value = {phoneno}
                        onChange={(e) => setPhoneno (e.target.value)} />
     
                     </Form.Group>
                <br/>
               <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Control type="password" placeholder="Password" value = {password}
                  onChange={(e) => setPassword (e.target.value)}/>
               </Form.Group>
 
              <br/>
              <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Control type="text" placeholder="State" value = {state}
                  onChange={(e) => setstate (e.target.value)}/>
               </Form.Group><br/>
       <Button variant="primary" size="lg" type="submit">
           Sign Up
      </Button>
      <br/><br/>
       <h5>
       <Link to = "/signin">Already have an account?  </Link>
      </h5>
      <br/>
               </div>
           </div>
         </Form></Col>
  </Row>
 
</Container>
        
      </div>
   )  
 
}

export default FarmerSignup