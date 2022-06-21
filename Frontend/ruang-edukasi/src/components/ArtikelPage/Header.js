import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./header.css";
import objek from '../../assets/images/objek.png';

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
                        </Col>
                        <Col>
                            <div className="header-img">
                                <img
                                    src={objek}
                                    alt=""
                                    width="510"
                                    height="290"
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