import React from "react";
// import footer from '../../assets/images/footer.png';
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
            <div className="footer">
                <div className="footer-wrapper">
                    <Container>
                        <Row className="row g-8">
                            <Col className="col-md-3"> 
                                <div className="footer-content">
                                    <Table className="table-content table-borderless" >
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
                                <div className="footer-content">
                                    <Table className="table-content table-borderless">
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
                                <div className="footer-content">
                                    <Table className="table-content table-borderless">
                                        <tr>
                                            <td scope="row">Ikuti Kami</td>
                                        </tr>
                                        <tr>
                                            <Row className="row g-0">
                                                <Col className="col-md-2">
                                                    <img alt="instagram" src={instagram} width="30" height="30" />                                                 
                                                </Col>
                                                <Col className="col-md-2">
                                                    <img alt="youtube" src={youtube} width="30" height="30" />                                                 
                                                </Col>
                                                <Col className="col-md-2">
                                                    <img alt="twitter" src={twitter} width="30" height="30" />                                                 
                                                </Col>
                                                <Col className="col-md-2">
                                                    <img alt="facebook" src={facebook} width="30" height="30" />                                                 
                                                </Col>
                                                <Col className="col-md-2">
                                                    <img alt="linkedin" src={linkedin} width="30" height="30" />                                                 
                                                </Col>
                                            </Row>
                                        </tr>
                                    </Table>
                                </div>
                                
                            </Col>
                        </Row>
                    </Container>

                </div>
                {/* <img src={footer} className="footer-img" /> */}
            </div>
        </>
        
    );
}

export default Footer;