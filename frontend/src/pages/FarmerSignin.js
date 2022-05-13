import React from "react";
import {Link,useHistory} from  'react-router-dom'
import { useState} from 'react';
import axois from "axios";
import {Col,Image,Form,Button,Container,Row} from "react-bootstrap";

const FarmerSignin = (props) => {
   
    const [username, setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [phoneno,setPhoneno] = useState("");
    const [password, setPassword] = useState("");
    const [state, setstate] = useState("");
    
    function sendData(e) {
         if(!email || !password){
                alert("Please add email or password");
                return
         }
        else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
                alert("Invalid email");
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
           // alert("Success");

         axois.post("http://localhost:5000/farmer/signin", newFarmer).then(() => {
             alert("Sign in successfully")

             //window.location='/profile/+{email}'

         }).catch((err) =>{
             
            alert("Invalid email or password")
         })
        
    }
     return(
       <div>
           <Container>
  <Row>
    <Col>  <Form className="container" onSubmit={sendData} >
         <div className = "signin1">
           <div className= "signin">
         <Col xs={1} md={12}  >
               <Image  className="im" src="https://res.cloudinary.com/hidl3r/image/upload/v1631611510/itp/ulogin_b64etx.png" roundedCircle />
               
             </Col>
           
               <h1 className="login">Sign In</h1>

               <br/> <br/> 
                
               <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email"  value = {email}
                       onChange={(e) => setEmail (e.target.value)} />
    
                    </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" value = {password}
                 onChange={(e) => setPassword (e.target.value)}/>
              </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="Check me out" />
             </Form.Group>
             <br/> <br/>
      <Button variant="primary" size="lg" type="submit">
          Sign In
     </Button>
      <br/>
      <br/>
      <br/>
      <h5>
      <Link to = "/farmersignup" id="link"> Don't have an account? </Link>
     </h5>

              </div>
          </div>
        </Form></Col>
    <Col> 
    <br/><br/><br/><br/><br/>
    <Image src="https://res.cloudinary.com/hidl3r/image/upload/v1633337384/itp/preview_nrqvph.gif" fluid />
    </Col>
  </Row>
  
</Container>
         
       
     </div>
  )  
}

export default FarmerSignin