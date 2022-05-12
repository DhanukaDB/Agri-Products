import React,{useState} from "react";
//import {useState} from "react"
import { useStateValue } from '../StateProvide';
import styled from "styled-components";
import Header from "./Header";
import { getCartTotal } from "../reducer";
//import CounterFunction from "./CounterFunction";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { red } from '@material-ui/core/colors';
import CreditCardIcon from '@material-ui/icons/CreditCard';

function CartItems(){
    
     let[qty,setqty]=useState(1)
    const Increment=(e,id)=>{
        setqty(++qty)
        e.preventDefault();
      
    }
    const Decrement=(e,id)=>{
        setqty(--qty)
        e.preventDefault();
        
    }

    const [{cart}, dispatch] = useStateValue();

    const removeProduct = (e,id)=>{
        e.preventDefault();

        dispatch({
            type:'DELETE_PRODUCT',
            id:id,
        })
    }
    if(cart.length === 0)
    return (
        <>
            <Header/>
                    <h3 style={{textAlign:"center", fontSize:"5rem"}}>Empty Cart</h3>
        </>
    )

    console.log("cartitems >>>>", cart);
    return(
        <div>
            <Header/>   
            <Container>
            <Main>
               <ShoppingCart>
                   <h2>Shopping Cart</h2>
                   {
                       cart?.map((product)=>(
                        <Product>
                        <Image>
                            <img src={product.image}
                            alt=""/>
                        </Image>
                        <Description><h4>{product.title}</h4>
                     
                        <Quantity>
                                    <button onClick={Increment}min='1'> + </button>
                                    <button> {qty} </button>
                                    <button onClick={Decrement} > - </button> 
                        </Quantity>
        
                         <p>{product.price*qty}</p>  
                        <button onClick={(e)=> {if (window.confirm('Are you sure you want to delete this record?'))removeProduct(e,product.id)}} style={{backgroundColor:red[500]}} >
                        <DeleteForeverIcon/></button> 

                         {/* <CounterFunction/>  */}
                        </Description>
                      
                    </Product>
                       ))
                   }
                  
               
                   </ShoppingCart> 
                <Subtotal>
                          <div> 
                            <p>
                                SubTotal ({cart.length} products ) :
                                 <strong> Rs. {getCartTotal(cart)*qty}.00</strong>
                            </p>
                            <small>
                               
                                <span>Click here to pay...</span>
                            </small>
                       
                        </div>
                        <button>Proceed to checkout <CreditCardIcon/></button>
               </Subtotal> 
            </Main>
        </Container>
        </div>
    );
}

const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    height: fit-content;
    margin:auto;
    background-color: rgb(234,237,237);
    border: 1px solid-red;
    position : relative;
`;

const Main = styled.div`
    display:flex;
    padding:15px;


    @media only screen and (max-width:1200px){
        flex-direction:column;
    }
`;
const ShoppingCart=styled.div`
    padding:15px;
    background-color:#fff;
    flex:0.7;

    @media only screen and (max-width:1200px){
        flex:none;
    }
    h2{
        font-weight:500;
        border-bottom: 1px solid lightgray;
        padding-bottom:15px;
    }
`;
const Subtotal=styled.div`
    flex:0.3;
    background-color:#fff;
    margin-left:15px;
    height:200px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media only screen and (max-width:1200px){
        flex:none;
        margin-top:20px
    }

    p{
        font-size:20px;
    }
    small{
        display:flex;
        align-items:center;
        margin-top:10px;

    span{
        margin-left:10px;
        }
    }
    button{
        width:65%;
        height:33px;
        margin-top:20px;
        background-color:#32cd32;
        border:none;
        outline:none;

        border-radius:8px;

    }
`;

const Product=styled.div`
    display:flex;
    align-items:center;

`;
const Image=styled.div`
    flex:0.3;
    img{
        width:90%;
    }
`;
const Description=styled.div`
    flex:0.7;
    h4{
        font-weight:500;
        font-size:50px;
    }
    p{
        font-weight:900;
        margin-top:10px;
        font-size:20px;
    }
    .remove{
        background-color:#FF0000;
        color:#1384b4;
        border:none;
        outline:none;
        margin-top:10px;
        cursor:pointer;
  

        &hover {
            text-decoration:underline;
        }

    }
`;
const Quantity=styled.div`
    
`;
export default CartItems