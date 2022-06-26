import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../../assets/images/Frame 53.png';
import mentor1 from '../../assets/images/mentor1.png';
import mentor2 from '../../assets/images/mentor2.png';
import mentor3 from '../../assets/images/mentor3.png';
import './content.scss';

const Content = () => {
    return (
        <>
            <div className="content">
                <div className="content-wrapper">
                    <Container>                            
                            <Row>
                                <Col>
                                <ul className='menu'>
                                    <li><a href='#' className='active'>Apa Itu Konsultasi</a></li>
                                    <li><a href='#'>Mentor Ruang Edukasi</a></li>
                                    <li><a href='#'>Testimoni</a></li>
                                </ul>
                                </Col>
                            </Row>
                        <br/>
                        <p className='opening'>Konsultasi dengan Mentor ngapain aja ya?</p>
                        <div className='article'>
                            <img
                                alt=""
                                src={img1}
                                left="12.57%"
                                right="84.1%"
                                top= "9.66%"
                                bottom="86.51%" 
                                // width="300px"  
                                height="auto" 
                                className='article-img'    
                            />
                            <div className='detail'>
                                <div className='detail-1'>
                                    <ol>
                                        <li>Kamu bisa cerita dengan Mentor yang sudah terlatih.</li>
                                        <li>Bareng-bareng cari solusi dari masalah yang sedang dihadapi.</li>
                                        <li>Mencari solusi lewat worksheet yang dibuatkan sesuai dengan masalahmu.</li>
                                        <li>Lebih mengenal diri sendiri melalui berbagai psikotes.</li>
                                    </ol>
                                </div>
                                <div className='detail-2'>
                                    <p className='title'>Masalah yang sering dikonsultasikan antara lain:</p>
                                    <ul>
                                        <li>Overthinking</li>
                                        <li>Kurang percaya diri</li>
                                        <li>Kecemasan</li>
                                        <li>Kehilangan motivasi</li>
                                        <li>Belum mengenal jati diri</li>
                                    </ul>
                                
                                </div>
                            </div>
                        </div>
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                            <div className='mentor'>
                                <p className='title-mentor'>Mentor Ruang Edukasi</p>
                                <div className='mentor-list'>
                                    <figure>
                                        <img
                                            alt=""
                                            src={mentor1}
                                            left="12.57%"
                                            right="84.1%"
                                            top= "9.66%"
                                            bottom="86.51%" 
                                            // width="300px"  
                                            height="auto" 
                                            className='article-img'    
                                        />
                                        <figcaption>Jane Doe</figcaption>
                                    </figure>
                                    <figure>
                                        <img
                                            alt=""
                                            src={mentor2}
                                            left="12.57%"
                                            right="84.1%"
                                            top= "9.66%"
                                            bottom="86.51%" 
                                            // width="300px"  
                                            height="auto" 
                                            className='article-img'    
                                        />
                                        <figcaption>Jane Doe</figcaption>
                                    </figure>
                                    <figure>
                                        <img
                                            alt=""
                                            src={mentor3}
                                            left="12.57%"
                                            right="84.1%"
                                            top= "9.66%"
                                            bottom="86.51%" 
                                            // width="300px"  
                                            height="auto" 
                                            className='article-img'    
                                        />
                                        <figcaption>Jane Doe</figcaption>
                                    </figure>
                                </div>
                            </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='testimoni'>
                                    <p className='title'>Testimoni</p>
                                    <div className='wrap'>
                                        <div className='testimoni-1'>
                                            <div className='name'>Emily</div>
                                            <div className='detail-testimoni'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat</div>
                                        </div>
                                        <div className='testimoni-1'>
                                            <div className='name'>Emily</div>
                                            <div className='detail-testimoni'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat</div>
                                        </div>
                                        <div className='testimoni-1'>
                                            <div className='name'>Emily</div>
                                            <div className='detail-testimoni'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat</div>
                                        </div>
                                    </div>
                                </div>
                                
                            </Col>
                        </Row>
                        
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Content;