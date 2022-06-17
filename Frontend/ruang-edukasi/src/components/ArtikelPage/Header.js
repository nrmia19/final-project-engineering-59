import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./header.css";
import image from '../../assets/images/article.png';

const Header = () => {
    return (
        <>
            <div className="header">
                <Container>
                    <Row>
                        <Col>
                        <h2>
                            Ruang Edukasi menyediakan banyak artikel menarik lho! <br /> 
                            Yuk Kepo-in sekarang. 
                        </h2>
                        <h6>
                            Artikel yang tersedia ada beragam macam yang dibedakan menjadi beberapa kategori supaya kamu bisa mudah memilih topik bacaan. 
                            Jadi, tunggu apa lagi? Yuk baca sekarang dan bagikan ke sosial media kamu.
                        </h6>    
                            {/* <button className="btn-started">
                                Get Started
                            </button> */}
                        </Col>
                        <Col>
                            <div className="header-img">
                                <img
                                    src={image}
                                    alt=""
                                    width="250"
                                    height="330"
                                    left="976"
                                    top="101"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Header;