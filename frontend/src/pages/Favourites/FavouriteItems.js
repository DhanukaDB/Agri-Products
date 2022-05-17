import React from "react";
import styled from "styled-components";
import {  useStateValue } from '../../StateProvide';
import Header from '../../components/Header';
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { red,green } from "@material-ui/core/colors";
import { Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";


function FavouriteItems(){
    const navigate = useNavigate();

    const [{favourite}, dispatch] = useStateValue();
    const removeFavouriite = (e, id) => {
        e.preventDefault();
    
        dispatch({
          type: "DELETE_FAVOURITE",
          id: id,
        });
      };
    if(favourite.length === 0)
    return (
        <>
            <Header/>
                    <h3 style={{textAlign:"center", fontSize:"5rem"}}>Empty Wishlist</h3>
                    <br/>
                    <center><Button onClick={() => navigate("/")}   style={{ backgroundColor: green[500] }}>Move to Shop</Button></center>
        </>
    )

    
    console.log("favouriteitems >>>>", favourite);


    return(
        <div>
            <Header/>  

            <Container>
            <Main>
               <Favourites>
                   <h2>Your Wishlist</h2>
                   {
                       favourite?.map((product)=>(
                        <Product>
                        <Image>
                            <img src={product.image}
                            alt=""/>
                        </Image>
                        <Description><h4>{product.title}</h4>
                     
                    
        
                         <p>{product.price}</p>  
                         <button
                    onClick={(e) => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this from favourites?"
                        )
                      )
                        removeFavouriite(e, product.id);
                    }}
                    style={{ backgroundColor: red[500] }}
                  >
                    <DeleteForeverIcon />
                  </button>

                        </Description>
                      
                    </Product>
                       ))
                   }
                  
               
                   </Favourites> 
                   </Main>
        </Container>
            </div>
            )
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
const Favourites=styled.div`
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
export default FavouriteItems