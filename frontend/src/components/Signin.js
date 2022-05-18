import React from "react";
import {Link} from  'react-router-dom'
import { useState} from 'react';
import axois from "axios";
import {Col,Image,Form,Button,Container,Row} from "react-bootstrap";
import Header from "./Header";

const Signin = (props) => {

    //creating states
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username] = useState("")
    const [phoneno] = useState("")
    
    function sendData(e) {
        //Validation
         if(!email || !password){
                alert("Please add email or password");
                return
         }
        else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
                alert("Invalid email");
             return
         }

        e.preventDefault();
        
        const newCustomer ={
            username,
            email,
            phoneno,
            password
        }
         console.log(newCustomer)  
           // alert("Success");

         axois.post("http://localhost:5000/customer/signin", newCustomer).then(() => {
             alert("Sign in successfully")

             //history.push('/home')
             window.location = `/`;


         }).catch((err) =>{
             
            alert("Invalid email or password")
         })
        
    }
     return(
       <div>
           <Header/>
           <Container>
  <Row>
    <Col>  <Form className="container" onSubmit={sendData} >
         <div className = "delivery1">
           <div className= "delivery">

               <center>
         <Col xs={1} md={12}  >
               <Image  className="im" src="https://res.cloudinary.com/dorcq99nr/image/upload/v1652809125/AgriProducts/ulogin_b64etx_s93wyy.png" roundedCircle />
               
             </Col>
           
               <h1 className="login">Sign In</h1>
               </center>
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
             <center>
            
      <Button variant="primary" size="lg" type="submit">
          Sign In
     </Button>
            
     
      <br/>
      <br/>
      <br/>
      <h5>
      <Link to = "/signup" id="link"> Don't have an account? </Link>
     </h5>
     </center>
              </div>
          </div>
        </Form></Col>
    <Col> 
    <br/><br/><br/><br/><br/>
    <Image src="https://res.cloudinary.com/dorcq99nr/image/upload/v1652818711/AgriProducts/love-plants_wkvfbq.gif" fluid />
    </Col>
  </Row>
  
</Container>
         
       
     </div>
  )  
}

export default Signin