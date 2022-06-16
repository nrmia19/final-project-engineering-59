import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./header.scss";
import image from '../../assets/images/image-1.png';

const Header = () => {
    return (
        <>
            <div className="header">
                <Container>
                    <Row>
                        <Col>
                        <h2>
                            Semangat Berbagi <br /> 
                            dan Mengedukasi  
                        </h2>
                        <h6>
                            RuangEdukasi ini merupakan platform digital yang bergerak di bidang pendidikan.
                            Website ini sebatas memberitahukan informasi mengenai tips and trick siswa atau mahasiswa dalam membuat tugas atau belajar. Jadi tujuannya untuk mengedukasi siswa untuk bisa termotivasi belajar.
                        </h6>    
                            <button className="btn-started">
                                Get Started
                            </button>
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