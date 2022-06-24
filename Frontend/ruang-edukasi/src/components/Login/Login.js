import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/style/components/login.css";
import { Form, Container, Row, Col} from "react-bootstrap";
import logo from "../../assets/images/logo-ruang-edukasi.png";
import image from "../../assets/images/book.png";
import axios from "axios";


const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleStorage = () => {
    localStorage.setItem('username', data.username);
    localStorage.setItem('password', data.password);
   };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataUser = {
      username: data.username,
      password: data.password
    }
    
    await axios
      .post('api/user/login', dataUser)
      .then((res) => {
        alert('login sukses');
         localStorage.setItem('token', res.data.token)
      })
      .catch((err) => {
        console.log(err);
        alert('gagal login');
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
                <a href="/">
                <div className="login-header">
                  <img src={logo} alt="logo" />
                </div>
                </a>
                <div className="login-body">
                  <h2>Let's Get Started!</h2>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="form-group" controlId="formBasicUsername">
                      <Form.Control className="form-control" type="text" placeholder="Enter Username" value={data.username} name="username" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="form-group" controlId="formBasicPassword">
                    <Form.Control className="form-control" type="password" placeholder="Enter Password" value={data.password} name="password" onChange={handleChange} />
                    </Form.Group>
                    <button onClick={handleStorage} className="button-login" type="submit">
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