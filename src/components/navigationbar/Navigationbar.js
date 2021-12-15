import React from 'react';
import NavPhoto from '../../assets/profile_pic.png';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./Navigationbar.css";

const Navigationbar = () => {
    const navigate = useNavigate();

    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container className="photo-container">
                {/* Read up on https://react-bootstrap.github.io/layout/grid/ */}
                <Navbar.Brand onClick={() => { navigate("/") }}>
                    <img className="navbar-photo" src={NavPhoto} alt="me" />
                </Navbar.Brand>
            </Container>
            <Container className="navbar-container">
                <Nav>
                    <Nav.Link className="nav-link" onClick={() => navigate("")}>
                        Om
                    </Nav.Link>
                    <Nav.Link className="nav-link" onClick={() => navigate("")}>
                        Projekt
                    </Nav.Link>
                </Nav>
            </Container>
            <Container>
                <Nav.Link className="nav-link" onClick={() => navigate("")}>
                    Ladda ner CV
                </Nav.Link>
                <BsLinkedin className="nav-icons" size="2.5em" />
                <BsGithub className="nav-icons" size="2.5em" />
            </Container>
        </Navbar>
    )
}

export default Navigationbar;