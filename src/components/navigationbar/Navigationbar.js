import React from 'react';
import NavPhoto from '../../assets/profile_pic.png';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import "./Navigationbar.css";

const Navigationbar = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand onClick={() => {navigate("/")}}>
                        <img className="nav-photo" src={NavPhoto} alt="me" />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    )
}

export default Navigationbar;