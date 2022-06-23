import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./header.css";
import objek from "../../assets/images/objek.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <Container>
          <Row>
            <Col className="col-md-5">
              <h2>
                Ruang Edukasi menyediakan banyak artikel menarik lho! <br />
                Yuk Kepo-in sekarang.
              </h2>
              <h6>
                Artikel yang tersedia ada beragam macam yang dibedakan menjadi
                beberapa kategori supaya kamu bisa mudah memilih topik bacaan.
                Jadi, tunggu apa lagi? Yuk baca sekarang dan bagikan ke sosial
                media kamu.
              </h6>
            </Col>
            <Col className="col-md-3">
              <div className="header-img">
                <img src={objek} alt="" width="510" height="290" />
              </div>
            </Col>
          </Row>
          {/* <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card> */}
        </Container>
      </div>
    </>
  );
};

export default Header;
