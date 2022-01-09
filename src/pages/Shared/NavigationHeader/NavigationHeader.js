import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Navigationbar.css";

const NavigationHeader = () => {
    return (
        <Navbar
            className="py-4 nav-container fw-bold"
            bg-dark
            fixed
            variant="dark"
            expand="lg"
        >
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav defaultActiveKey="/" className="me-auto">
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
                        <Nav.Link
                            className="mb-2"
                            eventKey="login"
                            as={Link}
                            to="/login"
                        >
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Brand className="ms-auto">
                    <NavLink className="text-decoration-none text-light" to="/">
                        <h2 className="m-0">Wisdom School</h2>
                    </NavLink>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavigationHeader;
