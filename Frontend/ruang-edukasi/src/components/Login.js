import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/components/login.css";
import { Form } from "react-bootstrap";
import logo from "../assets/images/logo-ruang-edukasi.png";


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
        <div className="login-container">
          <div className="login-content">
            <div className="login-side-content">
              
            </div>
            <div className="login-header">
              <img src={logo} alt="logo" />
            </div>
            <div className="login-body">
              <h2>Welcome! Happy to see you</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="form-group" controlId="formBasicEmail">
                  <Form.Control className="form-control" type="email" placeholder="Enter Email" name="email" value={email}  onChange={handleChange} />
                </Form.Group>
                <Form.Group className="form-group" controlId="formBasicPassword">
                  <Form.Control className="form-control" type="password" placeholder="Enter Password" name="password" value={password} onChange={handleChange} />
                </Form.Group>
                <button className="button-login" type="submit">
                  Login
                </button>
                <p>Don't have an account? <Link to={"/register"}>Sign Up</Link></p>
              </Form>
            </div>
          </div>
        </div>
      </>
    );
};

export default Login;