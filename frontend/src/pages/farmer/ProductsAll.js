import React, {useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {Button,Card} from "react-bootstrap";
import Carditem from "../../components/Card";
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
        
     

  <input type="text" placeholder = "Search Product " onChange ={(e) =>{
  setSearch(e.target.value);
}} />
    



  {products.filter(Product => {
                          if(search == ""){
                              return Product
                          }
                          else if(Product.productName.toLowerCase().includes(search.toLowerCase())){
                              return Product
                          }
                      }).
    
    
  map((product) => {

    return(


<Main>
{
          products?.map((Product) => (
        
    <Carditem
id={Product._id}
image={Product.image}
title={Product.productName}
price={Product.price}


/>
  ))}
</Main>

   );
  
          })}
          

          
 <br/>
 <br/>



    </div>
    
  )

}
const Main = styled.div`
display: grid;
justify-content: center;
place-items: center;
width: 100%;
grid-auto-rows: 420px;
 grid-template-columns: repeat(4, 280px);
grid-gap: 20px;

}
`;
export default AllProducts;






