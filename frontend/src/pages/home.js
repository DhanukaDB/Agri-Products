import React from "react";
import Header from "../components/Header";
import { Carousel,Container,Row,Col} from "react-bootstrap";
import Carditem from '../components/Card';
import AllProducts from "./ProductsAll";

function Home() {
  return (
    <div>
        <Header />
        <br/>
<Container>
  <Row>
    <Col>
    
  
      <Carousel>
        <Carousel.Item interval={1500}>
          <img width={100} height={800}
            className="d-block w-100"
            src="https://res.cloudinary.com/hidl3r/image/upload/v1652245751/AgriManagement/xavi-moll-u-Q14NlYLEI-unsplash_kevghd.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Agriculture or farming is the practice</h3>
            <p>Agriculture is the art and science of cultivating the soil, growing crops and raising livestock. It includes the preparation of plant and animal products for people to use and their distribution to markets.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img width={100} height={800}
            className="d-block w-100"
            src="https://res.cloudinary.com/hidl3r/image/upload/v1652246378/AgriManagement/hoover-tung-DjlNzHuv_Ck-unsplash_ikyp2n.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>It substituted synthetic fertilizers</h3>
            <p>in the European Union more commonly known as ecological farming or biological farming, is an agricultural system that uses fertilizers of organic origin such as compost manure, green manure, and bone meal and places emphasis on techniques such as crop rotation and companion planting.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img width={100} height={800}
            className="d-block w-100"
            src="https://res.cloudinary.com/hidl3r/image/upload/v1652244740/AgriManagement/brienne-hong-SbUlGuCu7Sg-unsplash_vbmogi.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Vegetables, grains, dairy products and meat.</h3>
            <p>
            These producers must follow the guidelines for organic food production. But they don't need to go through the certification process. They can label their products as organic.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </Col>
   
  </Row>
  <Row>
    <Col>1 of 3</Col>
   
  </Row>
    <AllProducts/>
  {/* <Carditem
  id={1}
  image={"https://th.bing.com/th/id/OIP.LETgPfZS2G2VzZIEPl0hyAHaE9?pid=ImgDet&w=3872&h=2592&rs=1"}
  price={200}
  title={"abcde"}
  />
<Carditem
  id={2}
 image={"https://th.bing.com/th/id/OIP.rlOVUTvINy7Q-Bh6FLYzVgAAAA?pid=ImgDet&w=451&h=300&rs=1"}
 price={300}
 title={"sas"}
 />
<Carditem
id={3}
image={"https://th.bing.com/th/id/R.0c856c888523da6127f5a322edcd8b43?rik=wMuJnqRaK8TVOA&pid=ImgRaw&r=0"}
price={222}
title={"dsddd"}/> */}
</Container>

</div>
     
 
  );
}

export default Home;
