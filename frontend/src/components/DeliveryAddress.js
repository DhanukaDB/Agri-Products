import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import { useStateValue } from "../StateProvide";
import { useNavigate } from "react-router-dom";

export default function DeliveryAddress() {
  //adding function

  //creating states
  const [{}, dispatch] = useStateValue();
  const [fullname, setFullname] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [buildingNo, setBuildingNo] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");

  const [value, setValue] = useState();

  const navigate = useNavigate();

  const deliver = (e) => {
    e.preventDefault(); //execute setData function, when click submit button
    dispatch({
      type: "SET_ADDRESS",
      item: {
        fullname,
        phoneno,
        buildingNo,
        street,
        city,
        province,
      },
    });
    navigate("/payment");
  };

  function sendData(e) {
    //create event send data

    if (!fullname || !phoneno || !street || !city || !province) {
      alert("Kindly add username/contactNumber with delivery details!");
      window.location = `/adddelivery`;
      return;
    }
    const newDelivery = {
      fullname,
      phoneno,
      buildingNo,
      street,
      city,
      province,
    };

    axios
      .post(`http://localhost:5000/delivery/add`, newDelivery)
      .then(() => {
        //route from the backend

        alert(
          "Delivery details Added.**To change delivery details please contact saniagro@gmail.com**"
        ); //display if adding is successful
        window.location = `/payment`; //redirect to adding page
      })
      .catch((err) => {
        //display error if adding is not successful
        alert(err);
      });
  }

  return (
    <div>
      <br></br>
      <div
        sx={{ ml: "auto" }}
        value={value}
        onChange={(e, val) => setValue(val)}
      >
        <div>
          <a href="/cart">
            <img
              style={{ height: 90, width: 90, marginLeft: 252 }}
              src="https://res.cloudinary.com/dorcq99nr/image/upload/v1652113795/AgriProducts/cart_hvasfk.jpg"
              alt="Add to Cart"
            ></img>
          </a>
          STEP 1{" "}
        </div>
      </div>
      <div
        sx={{ ml: "auto" }}
        value={value}
        onChange={(e, val) => setValue(val)}
      >
        <div>
          <a href="/delivery">
            <img
              style={{ height: 100, width: 100, marginLeft: 352 }}
              src="https://res.cloudinary.com/dorcq99nr/image/upload/v1652115276/AgriProducts/delivery1_u8idbj.jpg"
              alt="Add Delivery Adress"
            ></img>
          </a>
          NOW STEP 2
        </div>
      </div>{" "}
      <br />
      <div
        sx={{ ml: "auto" }}
        value={value}
        onChange={(e, val) => setValue(val)}
      >
        <div>
          <a href="/payment">
            <img
              style={{ height: 70, width: 90, marginLeft: 492 }}
              src="https://cdn-icons-png.flaticon.com/512/4108/4108042.png"
              alt="Make your payment easily"
            ></img>
          </a>
          NEXT STEP 3
        </div>
      </div>
      <Container>
        <Form className="container" onSubmit={sendData}>
          <div className="delivery1">
            <div className="delivery">
              <blockquote class="blockquote">
                <center>
                  <h1 class="mb-0">Delivery Details</h1>
                </center>
              </blockquote>
              <br></br>
              <div className="form-group">
                <label for="fullname" className="labels">
                  {" "}
                  Full Name *:{" "}
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  aria-describedby="em"
                  placeholder="Full name"
                  required
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                />
              </div>{" "}
              <br />
              <br />
              <div className="form-group">
                <label for="phoneno" className="labels">
                  {" "}
                  Contact Number *:{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneno"
                  aria-describedby="em"
                  placeholder="Phone no"
                  maxlength="10"
                  size="50"
                  required
                  onChange={(e) => {
                    setPhoneno(e.target.value);
                  }}
                />
              </div>{" "}
              <br />
              <br />
              <div className="form-group">
                <label for="buildingno" className="labels">
                  {" "}
                  Building Number *:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="buildingno"
                  aria-describedby="em"
                  placeholder="9/8/A"
                  size="50"
                  required
                  onChange={(e) => {
                    setBuildingNo(e.target.value);
                  }}
                />
              </div>{" "}
              <br />
              <br />
              <div class="form-group">
                <label for="street" className="labels">
                  {" "}
                  Street *:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="street"
                  aria-describedby="em"
                  placeholder="Lake road"
                  size="50"
                  required
                  onChange={(e) => {
                    setStreet(e.target.value);
                  }}
                />
              </div>{" "}
              <br />
              <br />
              <div class="form-group">
                <label for="city" className="labels">
                  {" "}
                  City *:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  aria-describedby="em"
                  placeholder="Anuradhapura"
                  size="50"
                  required
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </div>{" "}
              <br />
              <br />
              <div className="form-group ">
                <i className="zmdi zmdi-email zmdi-hc-2x"></i>
                <label for=" province" className="labels">
                  Province *:
                </label>
                <select
                  class="custom-select custom-select-lg mb-3"
                  id="province"
                  onChange={(e) => {
                    setProvince(e.target.value);
                  }}
                >
                  <option>Choose</option>
                  <option>Western Province</option>
                  <option>Central Province</option>
                  <option>Southern Province</option>
                  <option>Uva Province</option>
                  <option>Sabaragamuwa Province</option>
                  <option>North Western Province</option>
                  <option>North Central Province</option>
                  <option>Nothern Province</option>
                  <option>Eastern Province</option>
                </select>
              </div>
              <br />
              <center>
                <Button onClick={deliver} class="btn btn-primary btn-lg">
                  Deliver to this address
                </Button>
              </center>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  );
}
