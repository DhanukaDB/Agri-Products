import React, { useState } from "react";


function CounterFunction(){
    let[qty,setqty]=useState(1)

    function increment(){
        setqty(++qty)
    }
    function decrement(){
        setqty(--qty)
    }


return(
   <>
        <div>
            <button onClick={e=>increment()}> + </button>
            <button> {qty} </button>
            <button onClick={e=>decrement()}> - </button>
          </div>
         

   
    </>
)
}

export default CounterFunction