import React from "react";
import { Carousel, Container, Button } from "react-bootstrap";
import carsoul from "./carsoul.css";

const Carosul = () => {
  return (
    <>
      <Container className="bg-white mt-4 ">
        <Carousel variant="dark">
          <Carousel.Item>
            <div className="row mx-0 py-0 ">
              <div className="col-sm-6 d-flex  fs  justify-content-end  ">
                <div className="row col-sm-8 fs ">
                  <h2 className="new1">
                    <span className="" style={{ color: "orange" }}>
                      E
                    </span>
                    -SHOPPER{" "}
                  </h2>
                  <h3 className="new">100% Responsive Design</h3>
                  <p className="new">
                    {" "}
                    Lorem ipsum dolor sit ameteiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                  </p>
                  <div className=" d-flex justify-content-center">
                    <Button className="new2 ">Get IN</Button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6  mx-0 py-0">
                <img
                  className="d-block w-100"
                  src="../Images/home/girl1.jpg"
                  alt="Second slide"
                />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="row mx-0 py-0 ">
              <div className="col-sm-6 d-flex  fs  justify-content-end  ">
                <div className="row col-sm-8 fs ">
                  <h2 className="new1">
                    <span className="" style={{ color: "orange" }}>
                      E
                    </span>
                    -SHOPPER{" "}
                  </h2>
                  <h4 className="new">Free Ecommerce Template</h4>
                  <p className="new">
                    {" "}
                    Lorem ipsum dolor sit ameteiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                  </p>
                  <div className=" d-flex justify-content-center">
                    <Button className="new2 ">Get IN</Button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6  mx-0 py-0">
                <img
                  className="d-block w-100"
                  src="../Images/home/girl2.jpg"
                  alt="Second slide"
                />
              </div>
            </div>
          </Carousel.Item>


          <Carousel.Item>
            <div className="row mx-0 py-0 ">
              <div className="col-sm-6 d-flex  fs  justify-content-end  ">
                <div className="row col-sm-8 fs ">
                  <h2 className="new1">
                    <span className="" style={{ color: "orange" }}>
                      E
                    </span>
                    -SHOPPER{" "}
                  </h2>
                  <h3 className="new">100% Responsive Design</h3>
                  <p className="new">
                    {" "}
                    Lorem ipsum dolor sit ameteiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                  </p>
                  <div className=" d-flex justify-content-center">
                    <Button className="new2 ">Get IN</Button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6  mx-0 py-0">
                <img
                  className="d-block w-100"
                  src="../Images/home/girl3.jpg"
                  alt="Second slide"
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default Carosul;
