import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavigationHeader = () => {
    return (
        <Navbar className="p-2" fixed bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <NavLink className="text-decoration-none " to="/home">
                        High School
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        variant="pills"
                        defaultActiveKey="/"
                        className="ms-auto"
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
