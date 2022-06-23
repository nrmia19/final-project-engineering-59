import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/style/components/register.css";
import { Form, Container, Row, Col, Alert } from "react-bootstrap";
import logo from "../../assets/images/logo-ruang-edukasi.png";
import image from "../../assets/images/book.png";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [formValue, setformValue] = useState({
  //   username: '',
  //   email: '',
  //   password:''
  // });

  // const handleChange = (event) => {
  //   setformValue({
  //     ...formValue,
  //     [event.target.name]: event.target.value
  //   });
  // }

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataUser = {
      username: username,
      email: email,
      password: password
    }
    
    await axios
      .post('api/user/register', dataUser)
      .then((res) => {
        console.log(res.data);
        alert('register sukses');
        localStorage.setItem('token', res.data.token)
      })
      .catch((err) => {
        console.log(err);
        alert('gagal register');
      });
  }


  
  // const handleSubmit = (e) => {
  // e.preventDefault();

  //   const userObject = async () => {
  //     const user = {
  //       username: username,
  //       email: email,
  //       password: password,
  //     };
  //     const response = await api.post("/register", user);
  //     console.log(response.data);
  //   }
  //   userObject();
  // }
    
  // const handleSubmit = async() => {
  // // store the states in the form data
  // const userObject = new FormData();
  //   userObject.append("username", formValue.username)
  //   userObject.append("email", formValue.email)
  //   userObject.append("password", formValue.password)

  // try {
  //   // make axios post request
  //   const response = await axios({
  //     method: "post",
  //     url: "http://localhost:8080/api/user/register",
  //     data: userObject,
  //     headers: { "Content-Type": "multipart/form-data" },
  //   });
  // } catch(error) {
  //   console.log(error)
  // }

  // const [data, setData] = useState({
  //   username: "",
  //   email: "",
  //   password: ""
  // });

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   // console.log({
  //   //   ...data,
  //   //   [e.target.name]: value
  //   // })
  //   setData({
  //     ...data,
  //     [e.target.name]: value
  //   });
  // };

  // const url = "http://localhost:8080/api/user";
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const userData = {
  //     username: data.username,
  //     email: data.email,
  //     password: data.password
  //   };
  //   await axios
  //     .post(url + '/register', userData)
  //     .then(result => {
  //       console.log(result.data);
  //       alert('sukses register!')
  //       localStorage.setItem('token', result.data.token)
  //     })
  //     .catch(error => {
  //       alert('gagal register!')
  //       console.log(error)
  //     })
  

  

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
                    <Form.Control zclassName="form-control" type="text" placeholder="Enter Username" value={username} name="username" onChange={handleUsername} />
                    </Form.Group>
                    <Form.Group className="form-group" controlId="formBasicEmail">
                      <Form.Control className="form-control" type="email" placeholder="Enter Email" value={email} name="email" onChange={handleEmail} />
                    </Form.Group>
                    <Form.Group className="form-group" controlId="formBasicPassword">
                      <Form.Control className="form-control" type="password" placeholder="Enter Password" value={password} name="password" onChange={handlePassword} />
                    </Form.Group>
                    <button className="button-register" type="submit">
                      Sign Up
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