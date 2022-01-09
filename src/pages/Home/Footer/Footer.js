import React from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="pt-4 bg-secondary">
            <div className="container">
                <div className="row my-5 g-3">
                    <div className="col-sm-12 col-md-6 col-lg-4 background-style p-3">
                        <h4 className="text-white mb-3 text-start">
                            Wisdom School
                        </h4>
                        <p
                            className="text-light"
                            style={{ textAlign: "justify" }}
                        >
                            Increasingly, muslim parents in Bangladesh are
                            looking for an ideal English Medium School that
                            combines true islamic studies with its modern
                            English curriculam and maintains a pure islamic
                            environment.
                        </p>

                        <div>
                            <i className="rounded-circle fab fa-facebook bg-info text-light fs-4  m-1 p-2"></i>
                            <i className="rounded-circle fab fa-instagram bg-dark text-white fs-4 rounded m-1 p-2"></i>
                            <i className="rounded-circle fab fa-whatsapp bg-light text-success fs-4 rounded m-1 p-2"></i>
                            <i className="rounded-circle fab fa-skype bg-primary text-white fs-4 rounded m-1 p-2"></i>
                            <i className="rounded-circle fab fa-twitter-square bg-info text-secondary fs-4 rounded m-1 p-2"></i>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 p-4 background-style">
                        <h4 className="text-white mb-3 r">Subscribe Here..</h4>
                        <Form>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Your Email"
                                />
                                <br />
                            </Form.Group>
                            <Button variant="dark"> Subscribe </Button>
                        </Form>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-4 ps-3 py-2 background-style">
                        <h2 className="text-light mb-3 text-center">
                            Quick Links
                        </h2>

                        <NavLink
                            className="nav-link text-light fs-5"
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className="nav-link text-light fs-5"
                            to="/teachers"
                        >
                            Teachers
                        </NavLink>
                        <NavLink
                            className="nav-link text-light fs-5"
                            to="/events"
                        >
                            Events
                        </NavLink>
                        <NavLink
                            className="nav-link text-light fs-5"
                            to="/"
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            className="nav-link text-light fs-5"
                            to="/"
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="bg-dark p-4">
                <p className="text-info text-center">
                    <hr />
                    <p>
                        Copyright © 2022 All Rights Reserved by Wisdom School
                        Authority. Build by Naimur Rahman, Minhaz Moyna,
                        Yeasaleh.
                    </p>
                </p>
            </div>
        </div>
    );
};

export default Footer;
