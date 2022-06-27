import React from "react";
import { useState } from "react";
import { Link} from "react-router-dom";
import "../../assets/style/components/login.css";
import { Form, Container, Row, Col} from "react-bootstrap";
import logo from "../../assets/images/logo-ruang-edukasi.png";
import image from "../../assets/images/book.png";
import axios from "axios";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [alert, setAlert] = useState("");

  const handleUsername = (e) => {
    const value = e.target.value
    setUsername(value);
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
      password: password
    }
    console.log(dataUser)
    
    if (!username) {
      setError('Username cannot be empty')
    } else if (!password) {
      setError('Password cannot be empty')
    } else {
      axios
        .post('api/user/login', JSON.stringify(dataUser))
        .then(result => {
          if (result) {
            localStorage.setItem('username', JSON.stringify(result.data.Account.username))
            localStorage.setItem('token', JSON.stringify(result.data.Account.token))
            setRedirect(true)
            setAlert(result.data.massage)
            setTimeout(() => {
              setAlert(result.data.massage)
            }, 5000)
            window.location.href = '/home';
          }
        })
        .catch(error => {
          setError(error.response.data.error)
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
              <div className="login-header">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
                </div>
               
                <div className="login-body">
                <div className="alert-style"> 
                  {
                    error && (
                      <div className="alert alert-danger" style={{ width: "24rem" }}>
                        <p>{error}</p>
                      </div>
                    )
                  }
                  {
                    alert && (
                      <div className="alert alert-primary" style={{ width: "24rem" }}>
                        <p>{alert}</p>
                      </div>
                    )
                  }
                  </div>
                  <h2>Welcome! Happy to see you</h2>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="form-group" controlId="formBasicUsername">
                      <Form.Control className="form-control" type="text" placeholder="Enter Username" value={username} name="username" onChange={handleUsername} />
                    </Form.Group>
                    <Form.Group className="form-group" controlId="formBasicPassword">
                    <Form.Control className="form-control" type="password" placeholder="Enter Password" value={password} name="password" onChange={handlePassword} />
                    </Form.Group>
                    <button className="button-login" type="submit">
                      Login
                    </button>
                    <p>Already have an account? <Link to={"/register"}>Sign Up</Link></p>
                  </Form>
              </div>
              <div className="login-footer">
                  <p>All rights reserved. Copyright Ruang Edukasi Indonesia</p>
              </div>
              </Col>
            </Row>
          </Container>
      </>
    );
};

export default Login;