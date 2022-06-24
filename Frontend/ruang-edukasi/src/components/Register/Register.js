import React from "react";
import { useState } from "react";
import { Link, Navigate} from "react-router-dom";
import "../../assets/style/components/register.css";
import { Form, Container, Row, Col} from "react-bootstrap";
import logo from "../../assets/images/logo-ruang-edukasi.png";
import image from "../../assets/images/book.png";
import axios from "axios";


const validEmail = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">
        This is not a valid email.
      </div>
    );
  }
};
const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="invalid-feedback d-block">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState("");
  


  const handleUsername = (e) => {
    const value = e.target.value
    setUsername(value);
    if (value.length < 3 || value.length > 20) {
      setErrorUsername('The username must be between 3 and 20 characters.')
    }
  }
  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!value) {
      setErrorUsername('This is not a valid email.')
    }
  }
  const handlePassword = (e) => {
    const value = e.target.value
    setPassword(value);
     if (value.length < 6 || value.length > 40) {
      setErrorUsername('The password must be between 6 and 40 characters')
    }
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
            setRedirect(true)
            alert("sukses register")
          }
        })
        .catch(error => {
          setError(error.reponse.data.message)
          alert("gagal register")
        })
    }
  }

    return (
      <>
        {
          redirect && (
            <Navigate to="/home" />
          )
        }
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