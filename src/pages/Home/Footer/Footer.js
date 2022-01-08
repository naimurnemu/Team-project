import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
      <div>

      <div  className="py-5 bg-secondary "> 
         <div className="row container ">
                 

             <div className="col-sm-12 col-md-6 col-lg-4 background-style mt-4 py-3 px-4">
                    
                    <h4 className=" text-white mb-3 text-center">The Secondary School</h4>
                    <p className="text-light">Write here About</p>  
                   
                    <div>
                    <i className="rounded-circle fab fa-facebook bg-info text-light fs-4  m-1 p-2"></i>
                    <i className="rounded-circle fab fa-instagram bg-dark text-white fs-4 rounded m-1 p-2"></i>
                    <i className="rounded-circle fab fa-whatsapp bg-light text-success fs-4 rounded m-1 p-2"></i>
                    <i className="rounded-circle fab fa-skype bg-primary text-white fs-4 rounded m-1 p-2"></i>
                    <i className="rounded-circle fab fa-twitter-square bg-info text-secondary fs-4 rounded m-1 p-2"></i>                           
                    </div>
             </div>


             <div className="col-sm-12 col-md-6 col-lg-4 px-5 py-3 mt-4 background-style ">
                   
                       <h4 className="text-white mb-3 r">Subscribe Here..</h4>                       
                   <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control  type="email" placeholder="Enter Your Email" /> <br />                                                                       
                        </Form.Group>
                        <Button variant='dark'> Subscribe </Button>
                    </Form>
             </div> 


             <div className="col-sm-12 col-md-6 col-lg-4 ps-3 py-2 background-style mt-2 ">
             <h2  className="text-light mb-3 text-center">Quick Links</h2>

                <NavLink className="nav-link text-light fs-5" to="/home">Home</NavLink>             
                <NavLink className="nav-link text-light fs-5" to="/students">Students</NavLink> 
                <NavLink className="nav-link text-light fs-5" to="/teachers">Teachers</NavLink> 
                <NavLink className="nav-link text-light fs-5" to="/culture">Culture Program</NavLink>
                <NavLink className="nav-link text-light fs-5" to="/about">About Us</NavLink>    
                <NavLink className="nav-link text-light fs-5" to="/contact">Contact</NavLink>
                        
             </div>
             

                             
        </div>
    </div>
    
    <div className="bg-dark p-5">
         <h4 className="text-info text-center">Copyright © 2022 By secondary school , Naimur Rahman, Minhaz Moyna, Yeasaleh . All Rights Reserved</h4>
    </div>
</div>

    );
};

export default Footer;