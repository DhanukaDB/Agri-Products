import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ListGroup} from 'react-bootstrap';
import { Button,Modal,Form, InputGroup, FormControl } from 'react-bootstrap';
import jsPDF from 'jspdf';

export default function DeliveryReport(){
    const[Values, setValues] = useState([]);
   
    const[fullname, setFullname] = useState("");
    const[phoneno, setPhoneno] = useState("");
    const[buildingNo, setBuildingNo] = useState("");
    const[street, setStreet] = useState("");
    const[city, setCity] = useState("");
    const[province, setProvince] = useState("");
    const[date, setDate] = useState("");
    const [deliveries, setDeliveries] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [search, setSearch] = useState("");

    useEffect(()=>{
      function getDeliveries(){
          axios.get("http://localhost:5000/delivery/",).then((res)=>{
            setDeliveries(res.data);
          }).catch((err)=>{
              alert(err.message)
          })
      }
      getDeliveries();
    },[])
    
    const deletedelivery = (id) =>{
        axios.delete(`http://localhost:5000/delivery/delete/${id}`);
    }


    const UpdateDeliveryDeatails = (val) =>{
        console.log('test====',val)
         setValues(val);
        
        handleShow()
    }
    
    const createPDF = (_id, fullname,phoneno, buildingNo,street,city,province,date)=>{
        console.log(_id);
        console.log(fullname);
        console.log(phoneno);
        console.log(buildingNo);
        console.log(street);
        console.log(city);
        console.log(province);
        console.log(date);

        const unit = "pt";
        const size = "A4";
        const orientation = "landscape";
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
        const title = `Sani Agro Delivery Tracking Tocken     Tracking ID- ${_id}`;
        const deliveryFullname = `Full Name: ${fullname}`;
        const deliveryPhoneno = `Phoneno: ${phoneno}`;
        const deliveryBuildingNo = `BuildingNo: ${buildingNo}`;
        const deliveryStreet = `Street: ${street}`;
        const deliveryCity = `City: ${city}`;
        const deliveryProvince = `Province: ${province}`;
        const deliveryDate = `Date: ${date}`;
   
      
        const image2 = "https://res.cloudinary.com/dorcq99nr/image/upload/v1652970181/AgriProducts/process_delivery_kyn9pc.png"
        const success = ` Dear Customer, ${fullname}. We will deliver your product within 2 working days.` 
        const second = `If you have not received your item, please notify us using the Tracking Id to Feedback and Complaints page.` ;
        const third  = `We are committed to providing you with quality services. Thank you`; 
        const issuedate =`Issue Date: ${date}`;
        const left = 20;
        const top = 8;
        
        const lefts = 450;
        const tops = 200;
        const imgWidths = 350;
        const imgHeights = 250;
        doc.setFontSize(15);
        doc.text(200,40 ,title);
        doc.text(60,200, deliveryFullname );
        doc.text(60,250, deliveryPhoneno);
        doc.text(60, 300,deliveryBuildingNo);
        doc.text(60, 350,deliveryStreet);
        doc.text(60, 400,deliveryCity);
        doc.text(60, 450,deliveryProvince);
        
       
        doc.addImage(image2, 'PNG' , lefts, tops, imgWidths, imgHeights);
       
        doc.text(60,500,issuedate);
        doc.text(80, 100, success);
        doc.text(80, 120, second);
        doc.text(80, 140, third);
        doc.save(`${fullname}'s UserDeliveryToken.pdf`);
     
    }

   
    function sendData(e) {
       
      e.preventDefault();
     
     
      var fullname1=null;
      var phoneno1=null;
      var buildingNo1=null;
      var street1=null;
      var city1= null;
      var province1= null;
      var date1 = null;

  //set values

      if (fullname ===""){
          console.log('test null cond')
          fullname1=Values.fullname;
        }else{
          fullname1=fullname
          console.log('test not null cond')

      }
      if (phoneno ===""){
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


      if (date===""){
        date1 =Values.date
       }else{
        date1 = date
    }
    
      const updateDelivery={
          id:Values._id,
          fullname:fullname1,
          phoneno:phoneno1,
          buildingNo:buildingNo1,
          street:street1,
          city:city1,
          province:province1,
          date:date1
      }

      console.log('form submit =====',updateDelivery)


      axios.put(`http://localhost:5000/delivery/update/${updateDelivery.id}`, updateDelivery).then(()=>{
          alert("Customer Delivery Details Updated");
          handleClose();
          window.location = `/`;
          
      }).catch((err)=>{
          console.log(err);
          alert(err);
      })
  }



    return(
        <div>
            <h1>Delivery Details</h1>

            <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default" onChange={(e) =>{
          setSearch(e.target.value);
      }}
    />
  </InputGroup>

  {deliveries.filter(Delivery=>{
      if(search === ""){
          return Delivery
      }
      else if(Delivery.fullname.toLowerCase().includes(search.toLowerCase())){
          return Delivery
      }
  })
            
    .map((val,key)=>{
            return(
             <div key={key} className="deliveries">
                 <container length="100px">
                      <row>    
                 <ListGroup>
                 <ListGroup.Item>{val._id}</ListGroup.Item>
                 <ListGroup.Item>{val.fullname}</ListGroup.Item>
                 <ListGroup.Item>{val.phoneno}</ListGroup.Item>
                 <ListGroup.Item>{val.buildingNo}</ListGroup.Item>
                 <ListGroup.Item>{val.street}</ListGroup.Item>
                 <ListGroup.Item>{val.city}</ListGroup.Item>
                 <ListGroup.Item>{val.province}</ListGroup.Item>
                  
                 
                 
                 <Button className="generateDeliveryPdF" onClick={()=> createPDF(val._id, val.fullname, val.phoneno, val.buildingNo, val.street,val.city, val.province, val.date )}>Generate report</Button>
                 </ListGroup>
                
                 </row>

                 <Modal show={show} onHide={handleClose} className="getfunc">
                    <Modal.Header closeButton>
                    <Modal.Title>Update Details</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                    <Form onSubmit={sendData}>
                   
         <Form.Group controlId="container">
           <Form.Label for="fullname">Fullname</Form.Label>
           <Form.Control type="text" 
           defaultValue={Values.fullname}
           onChange={(e)=>{
            setFullname(e.target.value);
          }} />

         </Form.Group>
         <Form.Group controlId="container">
         <Form.Label for="phoneno">Phone Number</Form.Label>
         <Form.Control type="text" 
         defaultValue={Values.phoneno} 
         onChange={(e)=>{
           setPhoneno(e.target.value);
         }} required />
        </Form.Group>
        

        <Form.Group controlId="container">
        <Form.Label for="buildingNo">BuildingNo</Form.Label>
        <Form.Control type="text"  
         defaultValue={Values.buildingNo}
         onChange={(e)=>{
        setBuildingNo(e.target.value);
        }} required/>
        </Form.Group>

        <Form.Group controlId="container">
        <Form.Label for="street">Phone number</Form.Label>
        <Form.Control type="Number" 
        defaultValue={Values.street}
        onChange={(e)=>{
        setStreet(e.target.value);
        }} required/>
        </Form.Group>
      
      <Form.Group>
        <Form.Label for="city">City</Form.Label>
        <Form.Control type="text" 
        defaultValue={Values.city}
        onChange={(e)=>{
        setCity(e.target.value);
        }} />
       </Form.Group>

       <Form.Group>
        <Form.Label for="province">Province</Form.Label>
        <Form.Control type="text" 
        defaultValue={Values.province}
        onChange={(e)=>{
        setProvince(e.target.value);
        }} />
       </Form.Group>

      
         
      <Button  className="final" type="submit"> Edit details</Button>
      </Form>

         </Modal.Body>
        
         </Modal>
           <br />
       </container>
     </div>
            );
        })}


            <Button variant="secondary" size="lg"><a href="/"> Back </a></Button>{' '}

 </div>
    );
}
