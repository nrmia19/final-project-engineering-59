import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../../assets/images/article.png';
import img2 from '../../assets/images/lifetime.png';
import img3 from '../../assets/images/konsultasi.png';
import img4 from '../../assets/images/komunitas.png';
import img5 from '../../assets/images/berbagi.png';
import article1 from '../../assets/images/article-1.png';
import article2 from '../../assets/images/article-2.png';
import './content.scss';

const Content = () => {
    return (
        <>
            <div className="content">
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
                    <p className='opening'>Apa yang menarik dari Ruang Edukasi??</p>
                    <div className='article'>
                        <img
                            alt=""
                            src={article1}
                            left="12.57%"
                            right="84.1%"
                            top= "9.66%"
                            bottom="86.51%" 
                            width="262px"  
                            height="202px" 
                            className='article-img'    
                        />
                        <div className='detail'>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat</p>
                            <button>Lihat Selengkapnya</button>
                        </div>
                    </div>
                    <div className='article'>
                        <img
                            alt=""
                            src={article2}
                            left="12.57%"
                            right="84.1%"
                            top= "9.66%"
                            bottom="86.51%" 
                            width="262px"  
                            height="202px" 
                            className='article-img'    
                        />
                        <div className='detail'>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat</p>
                            <button>Lihat Selengkapnya</button>
                        </div>
                    </div>
                </Container>
                </div>
            </div>
        </>
    );
}

export default Content;