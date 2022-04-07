import React from 'react'
import { Navbar,Nav,NavDropdown,Container,Form,Button,FormControl } from 'react-bootstrap'
import { BrowserRouter, Link } from 'react-router-dom'
const Supernav = () => {
  return (
   <>
   {/* <BrowserRouter> */}
   <Container className='bg-white' >
   <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand >Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        
        <NavDropdown title="Shop" id="navbarScrollingDropdown">
          {/* <NavDropdown.Item href="#action3"><Link to="/Product">Product</Link></NavDropdown.Item>
          <NavDropdown.Item href="#action3"><Link to="/Cart">Cart</Link></NavDropdown.Item>
          <NavDropdown.Item href="#action3"><Link to="/Login">Login</Link></NavDropdown.Item>
          <NavDropdown.Item href="#action3"><Link to="/Checkout">Checkout</Link></NavDropdown.Item> */}
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
       
        </NavDropdown>
        <NavDropdown title="Blog" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link  >
         {/* <Link to="/Error">404</Link> */}
        </Nav.Link>
        <Nav.Link  >
                      Contact
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
</Container>
{/* </BrowserRouter> */}
   </>
  )
}

export default Supernav