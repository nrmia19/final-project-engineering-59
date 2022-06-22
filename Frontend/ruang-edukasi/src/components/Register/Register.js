import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/style/components/register.css";
import { Form, Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/images/logo-ruang-edukasi.png";
import image from "../../assets/images/book.png";


const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (username.length < 5) {
        setError("Username harus lebih dari 3 karakter");
      } else if (email.length < 5) {
        setError("Email harus lebih dari 3 karakter");
      } else if (password.length < 5) {
        setError("Password harus lebih dari 3 karakter");
      }
      else {
        setSuccess("Berhasil mendaftar");
      }
    };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }

    setError("");
    setSuccess("");
  };

    return (
      <>
          <Container>
            <Row>
              <Col sm={2}>
              <div className="sidebar">
                <img className="style-img" src={image} alt="image" height="650vh" />
              </div>
              </Col>
              <Col sm={10}>
                <div className="register-header">
                  <img src={logo} alt="logo" />
                </div>
                <div className="register-body">
                  <h2>Let's Get Started!</h2>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="form-group" controlId="formBasicUsername">
                      <Form.Control className="form-control" type="text" placeholder="Enter Username" name="username" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="form-group" controlId="formBasicEmail">
                      <Form.Control className="form-control" type="email" placeholder="Enter Email" name="email" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="form-group" controlId="formBasicPassword">
                      <Form.Control className="form-control" type="password" placeholder="Enter Password" name="password" onChange={handleChange} />
                    </Form.Group>
                    <button className="button-register" type="submit">
                      Sign Up
                    </button>
                    <p>Already have an account? <Link to={"/login"}>Login</Link></p>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
      </>
    );
};

export default Register;