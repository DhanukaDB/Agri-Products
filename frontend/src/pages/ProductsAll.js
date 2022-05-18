import React, {useState,useEffect} from "react";
import Table from 'react-bootstrap/Table'
import axios from "axios";
import {Link} from "react-router-dom";
import {Button,Card} from "react-bootstrap";
import Carditem from "../components/Card";
import styled from "styled-components";





function AllProducts(props){

   const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");


   useEffect(() =>{
    function getProducts(){
        axios.get("http://localhost:5000/products/").then((res) =>{
           setProducts(res.data);
        }).catch((err) => {
            alert(err.message);
        })
 }
    getProducts();
   },[])
   
   //"ProductDetails/+_id //check this 
   //try with find one

   function Update(_id) {
      console.log(_id)
      props.history.push("/productdetails/"+_id);
  }

  return (
   
    //link to button's route id is not working inside table

    <div> 
       <center> <h1>Product Details</h1> </center>
     
        
           
   
 
 
 <br/>
        
      {/* <Table striped bordered hover variant="dark"> */}
  <thead>
  <input type="text" placeholder = "Search Product " onChange ={(e) =>{
  setSearch(e.target.value);
}} />
    {/* <tr>
      <th scope="col">Product id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Category</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
      <th scope="col">Date</th>
      <th scope="col">Image</th>
      
    
    </tr> */}
  </thead>
  <tbody>

  {products.filter(Product => {
                          if(search == ""){
                              return Product
                          }
                          else if(Product.productName.toLowerCase().includes(search.toLowerCase())){
                              return Product
                          }
                      }).
    
    
  map((Product) => {

    return(



        
      // <tr key={Product._id}>
      
      // <td> <Button variant="outline-primary" onClick={()=>Update(Product._id)}>{Product._id}</Button></td>
      // <td>{Product.productName}</td>
      // <td>{Product.category}</td>
      // <td>{Product.price}</td>
      // <td>{Product.description}</td>
      // <td>{Product.manufacDate}</td>
      // <td>{Product.image}</td>
     
    // </tr>
<Main>
{
          products?.map((Product) => (
        
    <Carditem
id={Product._id}
image={Product.image}
title={Product.productName}
price={Product.price}
// rating={Product.description}
// name={Product.manufacDate}

/>
  ))}
</Main>

   );
  
          })}
          </tbody>
{/* </Table> */}
          
 <br/>
 <br/>


 {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}
    </div>
    
  )

}
const Main = styled.div`
display: grid;

place-items: center;
width: 100%;
grid-auto-rows: 420px;
 grid-template-columns: repeat(5, 250px);
grid-gap: 20px;

}
`;
export default AllProducts;







