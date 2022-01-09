import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
 

const Contact = () => {
    const formHandler = (event) => {
        event.target.reset();
        event.preventDefault();
    };
    return (
        <div className="bg-light container-fluid">
            {/* contact banner */}
            <div>
                <h1 className="text-center text-dark">
                    CONTACT FOR GET INFO ABOUT US
                </h1>
                <div className="row align-items-start py-4">
                    <div className="col-sm-12 col-md-7">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 p-4">
                                <h2 className="text-primary mb-3">
                                    Contact Office
                                </h2>
                                <p className="fs-6  mt-2">
                                    <i className="text-light rounded-circle fas fa-phone-square-alt bg-info p-2 me-2"></i>
                                    <b> +88013093423942</b>
                                </p>
                                <p className="fs-6  mt-2">
                                    <i className="text-light rounded-circle far fa-envelope bg-dark p-2 "></i>

                                    <b> wisdomschool@info.com</b>
                                </p>
                                <p className="fs-6  mt-2">
                                    <i className="text-light rounded-circle fas fa-map-marked-alt bg-primary  p-2"></i>

                                    <b> Dhaka, Bangladesh</b>
                                </p>
                                <p className="fs-6  mt-2">
                                    <i className="text-light rounded-circle fas fa-clock bg-warning me-2 p-2"></i>

                                    <b>8 A.M. to 5 P.M.</b>
                                </p>
                            </div>

                            <div className="col-sm-12 col-md-6 p-4">
                                <h2 className="text-success mb-3">
                                    Our Address
                                </h2>
                                <p className="fs-6  mt-2">
                                    <i className="text-light rounded-circle fas fa-school bg-warning p-2 me-2"></i>
                                    <b> Green Wisdom School</b>
                                </p>
                                <p className="fs-6  mt-2">
                                    <i className="text-light rounded-circle fas fa-mail-bulk bg-success p-2 "></i>
                                    <b> Sontosh, 1902</b>
                                </p>
                                <p className="fs-6  mt-2">
                                    <i className="text-light rounded-circle fas fa-map-marked-alt bg-danger  p-2"></i>
                                    <b> Tangail Sodor, Tangail</b>
                                </p>
                                <p className="fs-6  mt-2">
                                    <i className="text-light rounded-circle fas fa-map-marked-alt bg-danger  p-2"></i>
                                    <b> Dhaka Bangladesh</b>
                                </p>
                            </div>
                        </div>

                        {/* social media icons */}
                        <div className="mt-3">
                            <h2 className="p-4 mt-4 text-center">
                                Contact in Social Media
                            </h2>
                            <div className="text-center">
                                <i className="text-light rounded-circle  fab fa-facebook bg-info text-light fs-4  m-2 p-2"></i>
                                <i className="text-light rounded-circle  fab fa-instagram bg-dark  fs-4 rounded m-2 p-2"></i>
                                <i className="text-light rounded-circle  fab fa-whatsapp bg-secondary text-success fs-4 rounded m-2 p-2"></i>
                                <i className="text-light rounded-circle  fab fa-skype bg-primary  fs-4 rounded m-2 p-2"></i>
                                <i className="text-light rounded-circle  fab fa-twitter-square bg-info text-secondary fs-4 rounded m-2 p-2"></i>
                            </div>
                        </div>
                    </div>

                    {/*  message us part */}
                    <div className="col-sm-12 col-md-5 p-4">
                        <h2 className=" mb-3 r">Message Us ..</h2>

                        {/*  message us form part */}
                        <Form onSubmit={formHandler}>
                            <Form.Group
                                className="mb-3"
                                controlId="formGroupEmail"
                            >
                                <Form.Control placeholder="Enter Your Name" />
                                <br />
                                <Form.Control placeholder="Enter Your Address" />
                                <br />
                                <Form.Control placeholder="Enter Your Mobile Number" />
                                <br />
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Your Email"
                                />
                                <br />
                                <FloatingLabel
                                    controlId="floatingTextarea2"
                                    label="Message"
                                >
                                    <Form.Control
                                        as="textarea"
                                        placeholder="White here your message."
                                        style={{ height: "100px" }}
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <Button type="submit" variant="warning">
                                Message
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;
