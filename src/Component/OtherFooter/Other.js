import React from 'react'
import { Container,Navbar, NavbarBrand } from 'react-bootstrap'

const Other = () => {
  return (
   <>
    <Container fluid    style={{backgroundColor:"#d6d6d0"}} >
      <div className='Container row'>
          <div className="col-sm-6 d-flex ">
    <Navbar.Brand className="text-black" style={{fontSize:"16px"}} href="#">Copyright © 2013 E-SHOPPER Inc. All rights reserved.</Navbar.Brand>
    {/* <Navbar.Brand className="text-warning" href="#"><AiOutlineMail/>  Info@solulab.com</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="navbarScroll" />
    </div>
   <div className='col-sm-6 d-flex flex-row-reverse bd-highlight align-items-center'>
   <Navbar.Brand>Designed by Dhairya</Navbar.Brand>
    </div>
 </div>
  </Container>
   </>
  )
}

export default Other