import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="bg-dark">

        {/* contact banner */}
        <h1 className="contact-style"> Contact </h1>
        
        <h4 className="text-center text-info mt-2">CONTACT</h4>

        
             <div className="row container py-5">
                                        
               <div className="col-sm-12 col-md-12 col-lg-6 ">
                   
                   <div className="row">

                 <div className="col-sm-12 col-md-6 col-lg-6  mt-4 py-3 pe-5 ps-4">
                        <h3 className=" text-light mb-3">Contact Office</h3>
                        <p className="fs-6 text-white mt-2"> <i className="rounded-circle fas fa-phone-square-alt bg-info p-2 me-2"></i> +88013093423942 </p>
                        <p className="fs-6 text-white mt-2"> <i className="rounded-circle far fa-envelope bg-dark p-2 "></i> school@gmail.com </p>
                        <p className="fs-6 text-white mt-2"> <i className="rounded-circle fas fa-map-marked-alt bg-primary  p-2"></i> Dhaka, Bangladesh</p>
                        <p className="fs-6 text-white mt-2"> <i className="rounded-circle fas fa-clock bg-warning me-2 p-2"></i>Office : 8.00 A.M to 5.00 P.M </p>                            
                 </div>
           
           

                    <div className="col-sm-12 col-md-6 col-lg-6  mt-4 py-3 pe-5 ps-4">
                            <h3 className=" text-light mb-3 text-center">Our Address</h3>
                            <p className="fs-6 text-white mt-2"> <i className="rounded-circle fas fa-school bg-warning p-2 me-2"></i> Name: </p>
                            <p className="fs-6 text-white mt-2"> <i className="rounded-circle fas fa-mail-bulk bg-dark p-2 "></i> Post: </p>
                            <p className="fs-6 text-white mt-2"> <i className="rounded-circle fas fa-map-marked-alt bg-danger  p-2"></i>Thana:</p>
                            <p className="fs-6 text-white mt-2"> <i className="rounded-circle fas fa-map-marked-alt bg-danger  p-2"></i>District:</p>
                            <p className="fs-6 text-white mt-2"> <i className="rounded-circle fas fa-map-marked-alt bg-danger  p-2"></i>Division:</p>
                    </div>
                 </div>
            
                       
                       {/* social media icons */}
                       <div className="mt-5 ">
                          <h3 className=" text-white mb-3 text-center">Contact in Social Media</h3>
                            <div className="text-center">
                                <i className="rounded-circle  fab fa-facebook bg-info text-light fs-4  m-2 p-2"></i>
                                <i className="rounded-circle  fab fa-instagram bg-dark text-white fs-4 rounded m-2 p-2"></i>
                                <i className="rounded-circle  fab fa-whatsapp bg-light text-success fs-4 rounded m-2 p-2"></i>
                                <i className="rounded-circle  fab fa-skype bg-primary text-white fs-4 rounded m-2 p-2"></i>
                                <i className="rounded-circle  fab fa-twitter-square bg-info text-secondary fs-4 rounded m-2 p-2"></i> 
                            </div>                          
                       </div>

                 </div>


                 {/*  message us part */}
                 <div className="col-sm-12 col-md-12 col-lg-6 px-5 py-3 mt-4  ">
                        <h2 className="text-white mb-3 r">Message Us ..</h2>

                     {/*  message us form part */}
                       <Form>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Control placeholder="Enter Your Name" /> <br />
                                <Form.Control placeholder="Enter Your Address" /> <br />
                                <Form.Control placeholder="Enter Your Mobile Number" /> <br />
                                <Form.Control  type="email" placeholder="Enter Your Email" /> <br />                                   
                                <FloatingLabel controlId="floatingTextarea2" label="Message">
                                        <Form.Control
                                        as="textarea"
                                        placeholder="White here your message."
                                        style={{ height: '100px' }}
                                        />
                                </FloatingLabel>
                            </Form.Group>
                            <Button variant="info"> Message </Button>
                        </Form>

                 </div>                                                                 
        </div>
    </div>
    );
};

export default Contact;