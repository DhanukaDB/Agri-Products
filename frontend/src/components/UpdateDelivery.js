import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button,Modal,Form,Table } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function UpdateDelivery(){
    const[Values, setValues] = useState([]);
    const [fullname,setfullname] = useState("");
    const [phoneno,setphoneno] = useState("");
    const [buildingNo,setbuildingNo] = useState("");
    const [street,setstreet] = useState("");
    const [city,setcity] = useState("");
    const [province,setprovince] = useState("");
    const [delivery, setDelivery] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [search, setSearch] = useState("");

    useEffect(()=>{
      function getDelivery(){
          axios.get("http://localhost:5000/delivery/",).then((res)=>{
              setDelivery(res.data);
          }).catch((err)=>{
              alert(err.message)
          })
      }
      getDelivery();
    },[])
    
   


    const UpdateDeliveryDeatails = (val) =>{
        console.log('test====',val)
         setValues(val);
        
        handleShow()
    }
    

    function sendData(e) {
       
        e.preventDefault();
       

        var fullname1=null;
        var phoneno1=null;
        var buildingNo1= null;
        var street1= null;
        var city1= null;
        var province1= null;

       
    //set values

        if (fullname ===""){
            console.log('test null cond')
            fullname1=Values.fullname;
          }else{
            fullname1=fullname
            console.log('test not null cond')

        }
       

        if (phoneno===""){
            phoneno1=Values.phoneno
          }else{  
            phoneno1=phoneno
        }

        if (buildingNo===""){
           buildingNo1=Values.buildingNo
          }else{
           buildingNo1=buildingNo
       }

        if (street===""){
            street1=Values.street
           }else{
            street1=street
        }

        if (city===""){
            city1=Values.city
           }else{
            city1=city
        }

        if (province===""){
            province1=Values.province
           }else{
            province1=province
        }

       

        const UpdateDelivery={
            id:Values._id,
            fullname:fullname1,
            phoneno:phoneno1,
            buildingNo:buildingNo1,
            street:street1,
            city:city1,
            province:province1
           
        }

        console.log('form submit payload =====',UpdateDelivery)


        axios.put(`http://localhost:5000/delivery/update/${UpdateDelivery.id}`, UpdateDelivery).then(()=>{
            alert("User Delivery Details Updated");
            handleClose();
            window.location = `/report`;
            
        }).catch((err)=>{
            console.log(err);
            alert(err);
        })
    }

    return (
      <div className="App">
          <center> <h1>All Delivery</h1></center>

          <input
          type="text"
          placeholder="Search here"
          onChange={e =>{
              setSearch(e.target.value)
          }}
         />

<Table striped bordered hover variant="dark">
<thead>
<tr>
<th>ID</th>
<th>User Name</th>
<th>Phone number</th>
<th>Building Number</th>
<th>Street</th>
<th>City</th>
<th>Province</th>

<th>Operation</th>
</tr>
</thead>
<tbody>
{delivery.filter(Delivery => {
              if(search === ""){
                  return Delivery
              }
              else if(Delivery.fullname.toLowerCase().includes(search.toLowerCase())){
                  return Delivery
              }
          }).map(Delivery =>{
              return(
            <tr key={Delivery._id}>
            <td><button> <a href={`${delivery.id}`}>{Delivery._id}</a></button></td> 
            <td>{Delivery.fullname}</td>
            <td>{Delivery.phoneno}</td>
            <td>{Delivery.buildingNo}</td>
            <td>{Delivery.street}</td>
            <td>{Delivery.city}</td>
            <td>{Delivery.province}</td>
           
            <Button variant="primary" onClick={()=> UpdateDeliveryDeatails(Delivery)} className="uppay">
           Update
      </Button>
          </tr>
          
          
          );
         
          })} 

</tbody>
</Table>

<Modal show={show} onHide={handleClose} className="getfunc">
                    <Modal.Header closeButton>
                    <Modal.Title>Update Details</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                    <Form onSubmit={sendData}>
         

         <Form.Group controlId="container">
           <Form.Label for="name">User Full Name</Form.Label>
           <Form.Control type="text" 
           defaultValue={Values.fullname}
           onChange={(e)=>{
            setfullname(e.target.value);
          }} readonly="readonly"/>
         </Form.Group>



          <Form.Group controlId="container">
          <Form.Label for="phoneno">Phone number</Form.Label>
          <Form.Control type="Number" 
           defaultValue={Values.phoneno}
           onChange={(e)=>{
           setphoneno(e.target.value);
           }} readonly="readonly"/>
           </Form.Group>



           <Form.Group controlId="container">
           <Form.Label for="buildingNo">Building Number</Form.Label>
           <Form.Control type="text" 
            defaultValue={Values.buildingNo}
             onChange={(e)=>{
             setbuildingNo(e.target.value);
            }} />
           </Form.Group>

           <Form.Group controlId="container">
           <Form.Label for="street">Street</Form.Label>
           <Form.Control type="text" 
            defaultValue={Values.street}
             onChange={(e)=>{
             setstreet(e.target.value);
            }} />
           </Form.Group>

           
           <Form.Group controlId="container">
           <Form.Label for="city">City</Form.Label>
           <Form.Control type="text" 
            defaultValue={Values.city}
             onChange={(e)=>{
             setcity(e.target.value);
            }} />
           </Form.Group>



           <Form.Group controlId="container">
           <Form.Label for="province">Province</Form.Label>
           <Form.Control type="text" 
            defaultValue={Values.province}
             onChange={(e)=>{
             setprovince(e.target.value);
            }} />
           </Form.Group>

           
           

           
    
         <Button  className="updateDelivery" type="submit"> Edit details</Button>
         </Form>

                    </Modal.Body>
        
                </Modal>
                 <br />
                

                 <Link to={"/adminPanel"} class="btn btn-outline-secondary ">
                  Admin Panel
                </Link>

                

 </div>
  );
     
  



}