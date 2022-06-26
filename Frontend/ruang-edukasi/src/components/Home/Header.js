import React from "react";
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import "./header.scss";
import image from '../../assets/images/image-1.png';
import search from '../../assets/images/search.png';

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
                        </h6> <br/>
                            <Form className="d-flex">
                                <img className="me-2 mt-1" src={search} width={28} height={28} />    
                                <FormControl
                                type="search"
                                placeholder="Cari Sesuatu di Ruang Edukasi"
                                className="me-5"
                                aria-label="Search"   
                                />
                            </Form>
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