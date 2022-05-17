import React from "react";
import {Link} from 'react-router-dom'
import { useState} from 'react';
import axois from "axios";
import{Form,Button,Container,Row,Col,Image} from "react-bootstrap";
import Header from "./Header";


const Signup = () => {
   // const history = useHistory()
    const [username , setUsername] = useState("")
    const [email , setEmail] = useState("")
    const [phoneno, setPhoneno] = useState("")
    const [password, setPassword] = useState("")

   
    //Validation
    function sendData(e) {
        if(!username || !email || !phoneno || !password){
            alert("Please fill  in all  fields");
            return
        } 

        else  if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            alert("Invalid email");
             return
         }

         else if(phoneno.trim().length !==10){
            alert("Invalid phoneno");
            return
        }

        e.preventDefault();

        const newCustomer ={
            username,
            email,
            phoneno,
            password,
        }


        console.log(newCustomer)  
        //alert("Success");

        axois.post("http://localhost:5000/customer/add", newCustomer).then(() => {
             alert("Registration Success")
            // history.push('/')
            window.location = `/signin`;

         }).catch((err) =>{
             alert(err)
         })
    }


     return(
         <div>
              <Header/> 
             <Container>
  <Row>
    <Col>  <br/><br/><br/><br/><br/><br/><br/><br/><br/>
     <Image src="https://res.cloudinary.com/dorcq99nr/image/upload/v1652809168/AgriProducts/sign_up_t2t08q.gif" fluid /></Col>
    <Col>  <Form className="container" onSubmit={sendData} >
          <div className = "delivery1">
            <div className= "delivery">
            <center>
          <Col xs={1} md={12}  >
                <Image  className="im" src="https://res.cloudinary.com/dorcq99nr/image/upload/v1652809125/AgriProducts/ulogin_b64etx_s93wyy.png" roundedCircle />
                <br/> <br/>
              </Col>
             <h1 className="login">Sign Up</h1>
             </center>
               <br/>
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
 
              <br/><br/>
              <center>
       <Button variant="primary" size="lg" type="submit">
           Sign Up
      </Button>
      <br/><br/>
       <h5>
       <Link to = "/signin">Already have an account?  </Link>
      </h5>
      <br/>
      </center>
               </div>
           </div>
         </Form></Col>
  </Row>
 
</Container>
        

         </div>
     )
        
        
}

export default Signup
