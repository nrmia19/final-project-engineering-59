import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/images/ruang-edukasi.png';
import user from '../../assets/images/user.png';
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
                    <Nav className="menu-nav">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Artikel</Nav.Link>
                        <Nav.Link href="#pricing">Konsultasi</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Brand><img src={user} width="36" height="36"></img> </Navbar.Brand>
                        <Navbar.Text> Mia</Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigasi;