import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
   return(
   <div >

    <div>  
        <center>
        <h1>Welcome to Delivery Management Page</h1>
        <br></br><br></br><br></br><br></br>
        
         </center>
        <br></br><br></br>
         
    </div>
        <div className= "container border"
          style = {{
          backgroundImage: `url('https://www.stockvault.net/data/2021/05/10/285722/preview16.jpg')`,
         

        }} >
         <center>

      <Link to={"/viewdelivery"} class="btn btn-outline-success btn-lg">
      Generate Token
      </Link>{'    '} 

      
      <Link to={"/report"} class="btn btn-outline-primary btn-lg">
       Send Email
      </Link>{'   '}

      
      <Link to={"/updateDelivery"} class="btn btn-outline-secondary btn-lg">
      Update Delivery
      </Link>{'   '}
        
         </center>
         </div>
    </div>
           

   )
}

export default AdminPanel