import React from 'react'
import { Container,NavDropdown,Navbar } from 'react-bootstrap'
import {RiAccountCircleFill} from 'react-icons/ri'
import {AiFillStar} from "react-icons/ai";
import {ImTarget} from "react-icons/im"
import {BsCart4} from "react-icons/bs"
import {FaLock} from "react-icons/fa"

const Mainnavbar = () => {
  return (
    <>
    <Container className=' bg-white'    style={{backgroundColor:"#f0f0e9"}} >
<div className='Container row'>
    <div className="col-sm-6 ">
<Navbar.Brand href="#"><img src='../Images/home/logo.png'></img></Navbar.Brand>
{/* <Navbar.Toggle aria-controls='navbarScroll'/> */}
<NavDropdown title="USA" id="navbarScrollingDropdown" className='  text-black'>
          <NavDropdown.Item href="#action3" >Canada</NavDropdown.Item>
          <NavDropdown.Item href="#action4">UK</NavDropdown.Item> 
        </NavDropdown>
     
        <NavDropdown title="DOLOR" id="navbarScrollingDropdown"  className=' '>
          <NavDropdown.Item href="#action3">INR</NavDropdown.Item>
          <NavDropdown.Item href="#action4">YURO</NavDropdown.Item>
          </NavDropdown>

        
</div>
<div className='col-sm-6 d-flex justify-content-end text-info'>
<Navbar.Brand href="#" className='text-black' ><RiAccountCircleFill className='text-secondary'/>  Account</Navbar.Brand>
<Navbar.Brand href="#"  className='text-black'> <AiFillStar  className='text-secondary'/> Wishlist</Navbar.Brand>
<Navbar.Brand href="#"  className='text-black'><ImTarget  className='text-secondary'/> Checkout</Navbar.Brand>
<Navbar.Brand href="#"  className='text-black'><BsCart4  className='text-secondary'/> Cart </Navbar.Brand>
<Navbar.Brand href="#"  className='text-black'><FaLock  className='text-secondary'/> Login</Navbar.Brand>
</div>
</div>
</Container>

</>







  )
}

export default Mainnavbar