import React from "react";
import { useState } from "react";
import { Link} from "react-router-dom";
import "../../assets/style/components/register.css";
import { Form, Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/images/logo-ruang-edukasi.png";
import image from "../../assets/images/book.png";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState("");
  
  const handleUsername = (e) => {
    const value = e.target.value
    setUsername(value);
    setError('')
  }
  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError('')
  }
  const handlePassword = (e) => {
    const value = e.target.value
    setPassword(value);
    setError('')
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataUser = {
      username: username,
      email: email,
      password: password
    }
    
    if (!username) {
      setError('Username cannot be empty')
    } else if (!email) {
      setError('Email cannot be empty')
    } else if (!password) {
      setError('Password cannot be empty')
    } else {
      axios
        .post('api/user/register', dataUser)
        .then(result => {
          console.log(result)
          if (result) {
            if (result.data) {
              setUsername('')
              setEmail('')
              setPassword('')
              setAlert(result.data.massage)
              setTimeout(() => {
                setAlert('')
              }, 5000)
              // window.location.href = "/login";
            }
          }
        })
        .catch(error => {
          setError(error.response.data.massage)
        })
    }
  }

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
                 {
                  error && (
                    <div className="alert alert-danger mt-2 p-2" style={{ width: "25rem" }}>
                      <p>{error}</p>
                    </div>
                  )
                }
                {
                  alert && (
                    <div className="alert alert-primary mt-2 p-2" style={{ width: "25rem" }}>
                      <p>{alert}</p>
                    </div>
                  )
                }
                
                    
                  <h2>Let's Get Started!</h2>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="form-group" controlId="formBasicUsername">
                    <Form.Control className="form-control" type="text" placeholder="Enter Username" value={username} name="username" onChange={handleUsername} />
                    </Form.Group>
                    <Form.Group className="form-group" controlId="formBasicEmail">
                      <Form.Control className="form-control" type="email" placeholder="Enter Email" value={email} name="email" onChange={handleEmail} />
                    </Form.Group>
                    <Form.Group className="form-group" controlId="formBasicPassword">
                      <Form.Control className="form-control" type="password" placeholder="Enter Password" value={password} name="password" onChange={handlePassword} />
                    </Form.Group>
                    <button className="button-register" type="submit">
                      <span>Sign Up</span>
                    </button>
                    <p>Already have an account? <Link to={"/login"}>Login</Link></p>
                  </Form>
              </div>
              <div className="register-footer">
                  <p>All rights reserved. Copyright Ruang Edukasi Indonesia</p>
              </div>
              </Col>
            </Row>
          </Container>
      </>
    );
};

export default Register;