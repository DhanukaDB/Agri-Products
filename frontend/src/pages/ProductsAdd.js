import React,{useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {Form, Button} from "react-bootstrap";

function ProductsAdd(){

  const [productName, setproductName] = useState("");
  const [category, setcategory] = useState("");
  const [price, serprice] = useState("");
  const [description, setdescription] = useState("");
  const [manufacDate, setmanufacDate] = useState("");
  const [image, setimage] = useState("");

  function sendData(e){
    if(description.trim().length != 10){
      alert("Please insert a good Description");
      return
      
  }
    e.preventDefault();

    const newProduct ={

      productName,
      category,
      price,
      description,
      manufacDate,
      image

    }

    axios.post("http://localhost:5000/product/create",newProduct).then(()=>{

      alert("Product Added Successfully");
    window.location = `/allproducts`;


    
    setproductName("");
    setcategory("");
    serprice("");
    setdescription("");
    setmanufacDate("");
    setimage("");

    

    }).catch((err=>{

      alert(err)
    }))

   
  }



    return(


<Form onSubmit={sendData}>
  <Form.Group className="container" controlId="vehicleNo">
    <Form.Label>Product Name</Form.Label>
    <Form.Control type="text" required placeholder="Enter Product Name"  maxlength="8" onChange={(e)=>{

setproductName(e.target.value);

    }}/>
    <Form.Text className="text-muted">
      Enter the Provincial numbers also.. Ex:- WPND1122
    </Form.Text>
  </Form.Group>

  <Form.Group className="container" controlId="vModel">
    <Form.Label>Vehicle Model</Form.Label>
    <Form.Control type="text" required placeholder="Enter Vehicle Number" onChange={(e)=>{

setcategory(e.target.value);

}}/>
  </Form.Group>

  <Form.Group className="container" controlId="nicNo">
    <Form.Label>Nic Number</Form.Label>
    <Form.Control type="text" required placeholder="Enter NIC Number"  maxlength="10" onChange={(e)=>{

serprice(e.target.value);

}}/>
  </Form.Group>

  <Form.Group className="container" controlId="ownerName">
    <Form.Label>Owner Name</Form.Label>
    <Form.Control type="text" required placeholder="Enter Owner Name" onChange={(e)=>{

setdescription(e.target.value);

}}/>
  </Form.Group>

  <Form.Group className="container" controlId="manufacYear">
    <Form.Label>Manufactured Year</Form.Label>
    <Form.Control type="text" required placeholder="Enter Manufactured Year" maxlength="8" onChange={(e)=>{

setmanufacDate(e.target.value);

}}/>
  </Form.Group>

  <Form.Group className="container" controlId="vType">
    <Form.Label>Vehicle Typer</Form.Label>
    <Form.Control type="text" required placeholder="Enter Vehicle Typer" onChange={(e)=>{

setimage(e.target.value);

}}/>
  </Form.Group>
  


  <Form.Group className="container" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" required label="Vehicle details checked" />

    <Button variant="primary" type="submit">
    Submit
  </Button>
  <Link to ="/vhome"> <Button variant="info">Go  Back To Vehicle home</Button></Link>


  </Form.Group>
 
</Form>



);

}
export default ProductsAdd;