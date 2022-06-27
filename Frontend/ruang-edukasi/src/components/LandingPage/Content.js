import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../../assets/images/article.png';
import img2 from '../../assets/images/lifetime.png';
import img3 from '../../assets/images/konsultasi.png';
import img4 from '../../assets/images/komunitas.png';
import img5 from '../../assets/images/berbagi.png';
import artikel from '../../assets/images/artikel.png';
import konsul from '../../assets/images/konsul.png';
import './content.scss';

const Content = () => {
    return (
        <>
            <main>
            <div className="content-landing-page">
                <div className="content-wrapper">
                <Container>
                    <Row>
                        <Col>
                            <img
                                alt=""
                                src={img1}
                                left="12.57%"
                                right="84.1%"
                                top= "9.66%"
                                bottom="86.51%" 
                                with="130"  
                                height="35" 
                                className='article-img'    
                            />   
                        </Col>
                        <Col>
                            <img
                                alt=""
                                src={img2}
                                left="12.57%"
                                right="84.1%"
                                top= "9.66%"
                                bottom="86.51%" 
                                with="130"  
                                height="35" 
                                className='article-img'    
                            />      
                        </Col>
                        <Col>
                            <img
                                alt=""
                                src={img3}
                                left="12.57%"
                                right="84.1%"
                                top= "9.66%"
                                bottom="86.51%" 
                                with="130"  
                                height="35" 
                                className='article-img'    
                            />
                        </Col>
                        <Col>
                            <img
                                alt=""
                                src={img4}
                                left="12.57%"
                                right="84.1%"
                                top= "9.66%"
                                bottom="86.51%" 
                                with="130"  
                                height="35" 
                                className='article-img'    
                            />
                        </Col>
                        <Col>
                            <img
                                alt=""
                                src={img5}
                                left="12.57%"
                                right="84.1%"
                                top= "9.66%"
                                bottom="86.51%" 
                                with="130"  
                                height="35" 
                                className='article-img'    
                            />
                        </Col>
                    </Row> <br/>
                    <h4>Apa yang menarik dari Ruang Edukasi??</h4> <br/>
                </Container>
                </div>
                <div className="content-title">
                    <Container>
                        <Row className="row g-3">
                            <Col className="col-md-4">
                                <img alt="article" src={artikel} width="300" height="200" />
                            </Col>
                            <Col className="col-md-6">
                                    Tulis Artikel dan bagikan informasi yang kalian inginkan. Ini merupakan salah satu fitur yang dapat membantu kalian untuk meningkatkan kualitas pendidikan. Jangan ragu untuk mengedukasi antar siswa untuk bisa termotivasi belajar. Karena itu, Ruang Edukasi menyediakan fitur artikel.
                                    <br />
                                    <button className="button-selengkapnya" type="submit">
                                       Lihat Selengkapnya
                                    </button>
                            </Col>
                        </Row>
                        <br />
                        <Row className="row g-3">
                            <Col className="col-md-4">
                                <img alt="konsul" src={konsul} width="300" height="200"  />
                            </Col>
                            <Col className="col-md-6">
                                    Konsultasi dengan guru atau teman anda. Ini merupakan salah satu fitur yang dapat membantu kita meningkatkan kualitas pendidikan. Anda bisa mengkonsultasikan perasaan atau psikologis kalian terkait dengan kegiatan belajar. Karena itu, Ruang Edukasi menyediakan fitur konsultasi.
                                    <br />
                                    <button className="button-selengkapnya" type="submit">
                                       Lihat Selengkapnya
                                    </button>
                            </Col>
                        </Row>
                        
                    </Container>
                </div>
                </div>
            </main>
        </>
    );
}

export default Content;