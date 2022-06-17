import React from "react";
// import footer from '../../assets/images/footer.png';
import { Container, Row, Col, Table } from "react-bootstrap";
import './footer.scss';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-wrapper">
                    <Container>
                        <Row>
                            <Col> 
                                <div className="footer-content">
                                    <Table className="table-content">
                                        <tr>
                                            <td>Customer Service</td>
                                        </tr>
                                        <tr>
                                            <td>0851-1010-1200</td>
                                        </tr>
                                        <br/>
                                        <tr>
                                            <td>Email</td>
                                        </tr>
                                        <tr>
                                            <td>hello@ruangedukasi.net</td>
                                        </tr>
                                    </Table>
                                </div>
                            </Col>
                            <Col> 1 0f 1
                            </Col>
                            <Col> 1 0f 1
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