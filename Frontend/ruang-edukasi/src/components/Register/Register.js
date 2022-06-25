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
  const [errorUsername, setErrorUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState("");
  const [alert, setAlert] = useState("");
  


  const handleUsername = (e) => {
    const value = e.target.value
    setUsername(value);
    if (value.length < 3 || value.length > 20) {
      setErrorUsername('The username must be between 3 and 20 characters.')
    }
    setError('')
  }
  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!value) {
      setErrorEmail('This is not a valid email.')
    }
    setError('')
  }
  const handlePassword = (e) => {
    const value = e.target.value
    setPassword(value);
     if (value.length < 6 || value.length > 40) {
      setErrorPassword('The password must be between 6 and 40 characters')
    }
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
      setError("The username must be between 3 and 20 characters.")
    } else if (!email) {
      setError('This is not a valid email.')
    } else if (!password) {
      setError('The username must be between 3 and 20 characters.')
    } else {
      axios
        .post('api/user/register', dataUser)
        .then(result => {
          if (result) {
            if (result.data) {
              setUsername('')
              setEmail('')
              setPassword('')
              setAlert(result.data.massage)
              setTimeout(() => {
                setAlert('')
              }, 3000)
            }
          }
        })
        .catch(error => {
          setError(error.reponse.data.massage)
        })
    }
  }

    return (
      <>
        {/* {
          redirect && (
          <Navigate to="/home" />
          )
        } */}
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
                      <p>Registration Successfull</p>
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