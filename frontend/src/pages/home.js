import React from "react";
import Header from "../components/Header";
import { Carousel, Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item interval={100}>
                <img
                  width={100}
                  height={800}
                  className="d-block w-100"
                  src="https://res.cloudinary.com/hidl3r/image/upload/v1651988014/AgriManagement/markus-spiske-4PG6wLlVag4-unsplash_f1hhgu.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  width={100}
                  height={800}
                  className="d-block w-100"
                  src="https://res.cloudinary.com/hidl3r/image/upload/v1651985861/AgriManagement/marcel-l-4xA6jsNo8FM-unsplash_gdbuxx.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/hidl3r/image/upload/v1651985404/AgriManagement/megan-thomas-xMh_ww8HN_Q-unsplash_ye0hzc.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
