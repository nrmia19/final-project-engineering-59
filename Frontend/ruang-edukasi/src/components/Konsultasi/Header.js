import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./header.css";
import image from '../../assets/images/image-2.png';

const Header = () => {
    return (
        <>
            <div className="header">
                <Container>
                    <Row>
                        <Col xs lg="8">
                        <h2>
                            Ruang Edukasi juga menyediakan ruang konsultasi dengan Mentor untuk Kamu  
                        </h2>
                        <h6>
                            Punya Masalah Kecemasan? Overthinking? Sulit Mengelola Emosi & Belum Mengenal Jati Diri? <br />
                            Konsultasiin aja masalahmu bersama Ruang Edukasi!
                        </h6>    
                            <button className="btn-started">
                                Konsultasi Sekarang
                            </button>
                        </Col>
                        <Col>
                            <div className="header-img">
                                <img
                                    src={image}
                                    alt=""
                                    width="400"                                    
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