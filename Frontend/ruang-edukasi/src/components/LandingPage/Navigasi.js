import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/images/ruang-edukasi.png';
import "./navigasi.css";

const Navigasi = () => {
    return (
        <>
            <Navbar className="navbar" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="nav-brand">
                        <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                        <b>Ruang Edukasi</b>
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                       <Nav className="nav-right">
                            <Nav.Link href="/register"><button className="nav-register">Sign Up</button></Nav.Link>
                            <Nav.Link href="/login"><button className="nav-login">Login</button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigasi;