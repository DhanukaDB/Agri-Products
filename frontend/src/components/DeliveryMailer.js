import emailjs from 'emailjs-com'
import { Link } from "react-router-dom";
import {Form} from 'react-bootstrap'
const DeliveryMailer = () =>{

        //create function
        function sendEmail(e){
            //stop the reload
            e.preventDefault();


            //copy service id, template id, input , userid not here

            emailjs.sendForm("service_mo8665b", "template_bivrlys", e.target , "56sSQQu4fPzsA1bNN" ).then(res =>{
                console.log(res);
                alert("Check Your Mail ");

            }). catch(err=> console.log(err));


        }

    return(
        <div className="Container">
        <div className= "delivery"
        >
           <center> <h1 style={{marginTop: '25px'}}>Delivery Service Contact Form</h1></center>
            <Form className="row" style={{margin: "25px 85px 75px 100px"}} onSubmit = {sendEmail}>
                <label><b>Name</b></label>
                <input type="text"  name="name" className="form-control"/>

                <label><b>Email</b></label>
                <input type="email"  name="user_email" className="form-control"/>


                <label><b>Message</b></label>
                <textarea  name="message" rows="4"  className="form-control"/>
               
               
                <input type= "submit" value="Send"  className="form-control btn btn-primary" 
                 style={{marginTop: "30px"}}
                />
                <Link to={"/report"} className="form-control btn btn-light btn-small"  style={{marginTop: "30px"}}>
                 <h5>Back</h5>
                </Link>

            
            </Form>
        </div>
        </div>
    );
}

export default DeliveryMailer;