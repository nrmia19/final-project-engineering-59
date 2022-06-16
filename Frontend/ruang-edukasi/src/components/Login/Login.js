import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/style/components/login.css";
import { Form, Container, Row, Col} from "react-bootstrap";
import logo from "../../assets/images/logo-ruang-edukasi.png";
import image from "../../assets/images/book.png";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    };

    const handleChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    };

    return (
      <>
        <Container>
            <Row>
              <Col sm={2}>
              <div className="sidebar">
                <img className="style-img" src={image} alt="image" height="650vh"/>
              </div>
              </Col>
              <Col sm={10}>
                <div className="login-header">
                  <img src={logo} alt="logo" />
                </div>
                <div className="login-body">
                  <h2>Let's Get Started!</h2>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="form-group" controlId="formBasicEmail">
                      <Form.Control className="form-control" type="email" placeholder="Enter Email" name="email" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="form-group" controlId="formBasicPassword">
                      <Form.Control className="form-control" type="password" placeholder="Enter Password" name="password" onChange={handleChange} />
                    </Form.Group>
                    <button className="button-login" type="submit">
                      Login
                    </button>
                    <p>Already have an account? <Link to={"/register"}>Sign Up</Link></p>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
      </>
    );
};

export default Login;