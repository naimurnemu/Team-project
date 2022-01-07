import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Navigationbar.css";

const NavigationHeader = () => {
    return (
        <Navbar
            className="p-3 nav-container fw-bold"
            bg-dark
            fixed
            variant="dark"
            expand="lg"
        >
            <Container>
                <Navbar.Brand>
                    <NavLink className="text-decoration-none " to="/home">
                        High School
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        defaultActiveKey="/"
                        className="ms-auto"
                        // menuVariant="dark"
                    >
                        <Nav.Link eventKey="home" as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link eventKey="teachers" as={Link} to="/teachers">
                            Teachers
                        </Nav.Link>
                        <Nav.Link eventKey="events" as={Link} to="/events">
                            Events
                        </Nav.Link>
                        <Nav.Link eventKey="profile" as={Link} to="/Dashboard">
                            Dashboard
                        </Nav.Link>
                        <Nav.Link eventKey="logingit" as={Link} to="/login">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationHeader;
