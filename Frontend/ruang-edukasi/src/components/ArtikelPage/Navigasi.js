import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/images/ruang-edukasi.png';
import profile from '../../assets/images/Ellipse 2.png';
import "./navigasi.scss";

const Navigasi = () => {
    return (
        <>
            <Navbar className="navbar" variant="light" expand="lg">
                <Container>
                    <div className="left-nav">
                        <ul>
                            <li>
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
                            </li>
                            <li className="menu"><Link to="/home">Home</Link></li>
                            <li className="menu"><Link to="/artikel">Artikel</Link></li>
                            <li className="menu"><Link to="/konsultasi">Konsultasi</Link></li>
                        </ul>
                    </div>
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                       <Nav className="nav-right">
                            <img src={profile}></img>
                        </Nav>
                        <p>Emily</p>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigasi;