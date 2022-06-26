import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import instagram from '../../assets/images/instagram.png';
import youtube from '../../assets/images/youtube.png';
import twitter from '../../assets/images/twitter.png';
import facebook from '../../assets/images/facebook.png';
import linkedin from '../../assets/images/linkedin.png';
import './footer.css';

const Footer = () => {
    return (
        <>
            <div className="class-footer">
                <div className="wrapper-footer">
                    <Container>
                        <Row className="row g-8">
                            <Col className="col-md-3"> 
                                <div className="isi-footer">
                                    <Table className="tabel-content table-borderless" >
                                        <tr>
                                            <td scope="row">Customer Service</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">0851-1010-1200</td>
                                        </tr>
                                        <br/>
                                        <tr>
                                            <td scope="row">Email</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">hello@ruangedukasi.net</td>
                                        </tr>
                                    </Table>
                                </div>
                            </Col>
                            <Col className="col-md-5">
                                <div className="isi-footer">
                                    <Table className="tabel-content table-borderless">
                                        <tr>
                                            <td scope="row">Alamat</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Jl. Soekarno Hatta No. 17 RT 6/RW 11 Kec. Buah Batu
                                            Bandung, Jawa Barat</td>
                                        </tr>
                                        <br/>
                                        <tr>
                                            <td scope="row">Info Kerja Sama</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">partnership@ruangedukasi.net</td>
                                        </tr>
                                    </Table>
                                </div>
                                
                            </Col>
                            <Col className="col-md-3">
                                <div className="isi-footer">
                                    <Table className="tabel-content table-borderless">
                                        <tr>
                                            <td scope="row">Ikuti Kami</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">
                                            <Row className="row g-0">
                                                <Col className="col-md-2">
                                                    <a href="#instagram"><img alt="instagram" src={instagram} width="30" height="30" /></a>                                             
                                                </Col>
                                                <Col className="col-md-2">
                                                    <a href="#youtube"><img alt="youtube" src={youtube} width="30" height="30" /></a>                                              
                                                </Col>
                                                <Col className="col-md-2">
                                                    <a href="#twitter"><img alt="twitter" src={twitter} width="30" height="30" /></a>                                                 
                                                </Col>
                                                <Col className="col-md-2">
                                                    <a href="#facebook"><img alt="facebook" src={facebook} width="30" height="30" /></a>                                                
                                                </Col>
                                                <Col className="col-md-2">
                                                    <a href="#linkedin"><img alt="linkedin" src={linkedin} width="30" height="30" /></a>                                                
                                                </Col>
                                            </Row>
                                            </td>
                                        </tr>
                                    </Table>
                                </div>
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col className="name col-md-12 pt-5">
                                All rights reserved. Copyright Ruang Edukasi 2022
                            </Col>
                        </Row>
                    </Container>

                </div>
            </div>
        </>
        
    );
}

export default Footer;