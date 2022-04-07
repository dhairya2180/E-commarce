import React from "react";
import { Container, Accordion, Card, Button, Form, Nav,Carousel } from "react-bootstrap";
import Item from "./Item.css";
import { AiFillStar } from "react-icons/ai";
import { ImTarget } from "react-icons/im";
import { BsCart4 } from "react-icons/bs";
import { InfiniteCarousel } from "react-leaf-carousel";

const Items = () => {
  const products = [
    {
      img: "../../Images/home/product1.jpg",
      price: "$56",
      name: "Easy polo black Edition",
    },
    {
      img: "../../Images/home/product2.jpg",
      price: "$56",
      name: "Easy polo black Edition",
    },
    {
      img: "../../Images/home/product4.jpg",
      price: "$56",
      name: "Easy polo black Edition",
    },
    {
      img: "../../Images/home/product3.jpg",
      price: "$56",
      name: "Easy polo black Edition",
    },
    {
      img: "../../Images/home/product4.jpg",
      price: "$56",
      name: "Easy polo black Edition",
    },
    {
      img: "../../Images/home/product5.jpg",
      price: "$56",
      name: "Easy polo black Edition",
    },
  ];

  const products1 = [
    {
      img: "../../Images/home/gallery1.jpg",
      price: "$56",
      name: "Easy polo black Edition",
    },
    {
      img: "../../Images/home/gallery2.jpg",
      price: "$56",
      name: "Easy polo black Edition",
    },
    {
      img: "../../Images/home/gallery3.jpg",
      price: "$56",
      name: "Easy polo black Edition",
    },
    {
      img: "../../Images/home/gallery4.jpg",
      price: "$56",
      name: "Easy polo black Edition",
    },
  ];

  const product2=[
      {image:"../../Images/home/recommend1.jpg",name:"t-shirts",price:"$56"},
      {image:"../../Images/home/recommend2.jpg",name:"t-shtrs",price:"$56"},
      {image:"../../Images/home/recommend3.jpg",name:"t-shirp",price:"$56"}]

  return (
    <>
      <Container className="bg-white mt-4 ">
        <div className="row mx-0 py-0">
          <div className="col-sm-3 ">
            <h2 style={{ color: "orange" }}>----Category----</h2>
            <div>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>SPORTWARE</Accordion.Header>
                  <Accordion.Body>
                    <div>NIKE</div>
                    <div>PUMA</div>
                    <div>ADDIDAS</div>
                    <div>COLL</div>
                    <div>COLUMBAS</div>
                    <div>REDCHIP</div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>WOMEN</Accordion.Header>
                  <Accordion.Body>
                    <div> FENDI</div>
                    <div> GUESS</div>
                    <div> VALENTINO</div>
                    <div> DIOR</div>
                    <div> VERSACE</div>
                    <div> ARMANI</div>
                    <div> PRADA</div>
                    <div> DOLCE AND GABBANA</div>
                    <div> CHANEL</div>
                    <div> GUCCI</div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>MEN</Accordion.Header>
                  <Accordion.Body>
                    <div> FENDI </div>
                    <div>GUESS</div>
                    <div> VALENTINO</div>
                    <div>VALENTINO</div>
                    <div> DIOR</div>
                    <div>VERSACE</div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item style={{ textDecoraction: "none" }}>
                  <Accordion.Header className="accordion-button-x">
                    KIDS
                  </Accordion.Header>
                  <Accordion.Header>FASHION</Accordion.Header>
                  <Accordion.Header>HOUSEHOLDS</Accordion.Header>
                  <Accordion.Header>INTERIORS</Accordion.Header>
                  <Accordion.Header>CLOTHING</Accordion.Header>
                  <Accordion.Header>BAGS</Accordion.Header>
                  <Accordion.Header>SHOES</Accordion.Header>
                </Accordion.Item>
              </Accordion>
              <h2 style={{ color: "orange" }}>-----BRANDS----</h2>
              <div className="mt-2 " style={{ border: "2px solid black" }}>
                <div style={{ margin: "10px", padding: "10px" }}>
                  ACNCE (50)
                </div>
                <div style={{ margin: "10px", padding: "10px" }}>
                  GRUNE ERDE (50)
                </div>
                <div style={{ margin: "10px", padding: "10px" }}>
                  ALBIRO (50)
                </div>
                <div style={{ margin: "10px", padding: "10px" }}>
                  ODOMOLLY (50)
                </div>
                <div style={{ margin: "10px", padding: "10px" }}>
                  BOUDESTIJN (50)
                </div>
                <div style={{ margin: "10px", padding: "10px" }}>
                  ROSCH CREATIVE CULTURE (50)
                </div>
              </div>
            </div>
            <h2 style={{ Color: "orange" }}>----Price Range----</h2>
            <div>
              <Form.Label min="100">Range</Form.Label>
              <Form.Range />
            </div>
            <img
              className="mt-5"
              src="../../Images/home/shipping.jpg"
              alt="gggg"
            ></img>
          </div>
          <div className="col-sm-9 new">
            <h2 style={{ textAlign: "center", color: "orange" }}>
              ------------Featurs--------------
            </h2>
            <div className="row ">
              {products.map((all) => {
                return (
                  <>
                    <div className="col-sm-4 ">
                      <Card
                        style={{
                          width: "18rem",
                          margin: "8px",
                          padding: "8px",
                          background: "#efefef",
                        }}
                      >
                        <Card.Img variant="top" src={all.img} alt="product" />
                        <Card.Body>
                          <div>
                            <p>{all.name}</p>
                          </div>
                          <div>
                            <h7>{all.price}</h7>
                          </div>
                          <button
                            className="mt-2"
                            style={{ height: "30px", background: "" }}
                          >
                            <BsCart4 /> Add to cart
                          </button>
                        </Card.Body>
                        <div className="row  ">
                          <button
                            style={{
                              height: "40px",
                              fontSize: "12px",
                              background: "orange",
                              border: "1px solid black",
                            }}
                          >
                            <AiFillStar /> Add to Compare
                          </button>

                          <button
                            style={{
                              height: "40px",
                              fontSize: "12px",
                              border: "1px solid black",
                            }}
                          >
                            <ImTarget /> Add to WIshlist
                          </button>
                        </div>
                      </Card>
                    </div>
                  </>
                );
              })}

              <Nav
                variant="pills"
                ultActiveKey="/home"
                className=" d-flex"
                style={{
                  padding: "8px",
                  background: "#efefef",
                  backgroundColor: "#585656",
                  borderRadius: "5px",
                }}
              >
                <Nav.Item>
                  <Nav.Link href="/home">T-SHIRT</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">BLAZERS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disabled">SUNGLASS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disabled">KIDS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disabled">POLO SHIRT</Nav.Link>
                </Nav.Item>
              </Nav>
              <div className="row ">
                {products1.map((all) => {
                  return (
                    <>
                      <div className="col-sm-3 ">
                        <Card
                          style={{
                            width: "13rem",
                            margin: "10px",
                            padding: "10px",
                            background: "#efefef",
                          }}
                        >
                          <Card.Img variant="top" src={all.img} alt="product" />
                          <Card.Body>
                            <div>
                              <p>{all.name}</p>
                            </div>
                            <div>
                              <h7>{all.price}</h7>
                            </div>
                            <button
                              className="mt-2"
                              style={{ height: "30px", background: "" }}
                            >
                              <BsCart4 /> Add to cart
                            </button>
                          </Card.Body>
                        </Card>
                      </div>
                    </>
                  );
                })}
<div>
    <h1>____-REACOMMAND_____</h1>


                 {/* <Carousel>
                 <Card
                          style={{
                            width: "13rem",
                            margin: "10px",
                            padding: "10px",
                            background: "#efefef",
                          }}
                        >
                          <Card.Img variant="top" src="../../Images/home/recommend2.jpg" alt="product" />
                          <Card.Body>
                            <div>
                              <p>name</p>
                            </div>
                            <div>
                              <h7>f</h7>
                            </div>
                            <button
                              className="mt-2"
                              style={{ height: "30px", background: "" }}
                            >
                              <BsCart4 /> Add to cart
                            </button>
                          </Card.Body>
                        </Card>
                 <Carousel.Item>
                
                 </Carousel.Item>
                 <Carousel.Item>
                 <img
      className="d-block w-100"
      src="../../Images/home/recommend3.jpg"
      alt="First slide"
    />
                 </Carousel.Item>
                 </Carousel>
               */}
 
</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Items;
