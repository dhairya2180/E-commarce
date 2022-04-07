import React from 'react'
import{ Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap"
import { AiOutlineMail } from 'react-icons/ai';
import { FcCallback } from 'react-icons/fc';
import {AiFillFacebook} from "react-icons/ai";
import {FaTwitter} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai";
import { AiFillGooglePlusCircle } from 'react-icons/ai';
import { Link ,BrowserRouter} from 'react-router-dom';

const Footer = () => {
  return (
    <>
 
   {/* <Navbar className='bg-info' expand="lg"> */}
  <Container fluid    style={{backgroundColor:"#f0f0e9"}} >
      <div className='Container row'>
          <div className="col-sm-6 d-flex ">
    <Navbar.Brand className="text-warning" href="#"><FcCallback/>+91 823032003</Navbar.Brand>
    <Navbar.Brand className="text-warning" href="#"><AiOutlineMail/>  Info@solulab.com</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    </div>
   <div className='col-sm-6 d-flex flex-row-reverse bd-highlight align-items-center'>
    <Navbar.Brand href="#" ><AiFillFacebook/></Navbar.Brand>
    <Navbar.Brand href="#">  <FaTwitter /></Navbar.Brand>
    <Navbar.Brand href="#"> <AiFillLinkedin/></Navbar.Brand>
    <Navbar.Brand href="#">  <AiFillGooglePlusCircle/></Navbar.Brand>
    </div>
 </div>
  </Container>

{/* </Navbar> */}
    </>
  )
}

export default Footer


