import React from "react";
import {Container, Row, Col, Card } from "react-bootstrap";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import img7 from "../../assets/images/img7.png";
import img8 from "../../assets/images/img8.png";
import "./artikel.css";
import Footer from "./Footer";

const Content = () => {
    return (
        <>
            <div className="content-article">
                <div className="content-menu">
                    <Container>
                        <Row className="row g-4">
                            <Col className=" col col-md-3">
                                <a href="#tips-trick"><span>Tips dan Trick Mahasiswa</span></a>
                            </Col>
                            <Col className="col col-md-3">
                                <a href="#"><span>Cerita Pengalaman Kelas</span></a>
                            </Col>
                            <Col className="col col-md-3">
                                <a href="#"><span>Prestasi Akademik</span> </a>
                            </Col>
                            <Col className="col col-md-3">
                                <a href="#"><span>Kegiatan Organisasi</span> </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <h4 className="tips">Tips dan Trick Mahasiswa</h4>
                <div className="artikel-list">
                    <Row xs={1} md={4} className="g-4">
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={img1} width={130} height={180} />
                                <Card.Body>
                                <Card.Title>Tips Belajar di masa Pandemi</Card.Title>
                                <Card.Text className="text-card">
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <button className="selengkapnya-btn">Lihat Selengkapnya</button>    
                                </Card.Body>
                            </Card>   
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={img2} width={130} height={180} />
                                <Card.Body>
                                <Card.Title>Tips Kerja Kelompok</Card.Title>
                                <Card.Text className="text-card">
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <button className="selengkapnya-btn">Lihat Selengkapnya</button>  
                                </Card.Body>
                                </Card>   
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={img3} width={130} height={180} />
                                <Card.Body>
                                <Card.Title>Tips and Trick Membuat Jurnal</Card.Title>
                                <Card.Text className="text-card">
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <button className="selengkapnya-btn">Lihat Selengkapnya</button>  
                                </Card.Body>
                                </Card>   
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={img4} width={130} height={180} />
                                <Card.Body>
                                <Card.Title>Tips and Trick Gak Jenuh Belajar </Card.Title>
                                <Card.Text className="text-card">
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <button className="selengkapnya-btn">Lihat Selengkapnya</button>  
                                </Card.Body>
                                </Card>   
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={img5} width={130} height={180} />
                                <Card.Body>
                                <Card.Title>Cara Hadapi Dosen Kiler</Card.Title>
                                <Card.Text className="text-card">
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <button className="selengkapnya-btn">Lihat Selengkapnya</button> 
                                </Card.Body>
                                </Card>   
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={img6} width={130} height={180} />
                                <Card.Body>
                                <Card.Title>Tips Nyontek Tanpa Ketahuan</Card.Title>
                                <Card.Text className="text-card">
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <button className="selengkapnya-btn">Lihat Selengkapnya</button> 
                                </Card.Body>
                            </Card>   
                        </Col>
                         <Col>
                            <Card>
                                <Card.Img variant="top" src={img7} width={130} height={180} />
                                <Card.Body>
                                <Card.Title>Tips Agar Produktif</Card.Title>
                                <Card.Text className="text-card">
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <button className="selengkapnya-btn">Lihat Selengkapnya</button>  
                                </Card.Body>
                            </Card>   
                        </Col>
                         <Col>
                            <Card>
                                <Card.Img variant="top" src={img8} width={130} height={180} />
                                <Card.Body>
                                <Card.Title>Tips Bangun Pagi</Card.Title>
                                <Card.Text className="text-card">
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                               <button className="selengkapnya-btn">Lihat Selengkapnya</button> 
                                </Card.Body>
                            </Card>   
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer />
        </>
        
    );
}

export default Content;
