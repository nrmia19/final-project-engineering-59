import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/components/register.css";
import { Form } from "react-bootstrap";
import logo from "../assets/images/logo-ruang-edukasi.png";


const Register = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Password and Confirm Password must be same");
            setTimeout(() => {
                setError("");
            }, 3000);
        } else {
            setSuccess("Register Success");
            setTimeout(() => {
                setSuccess("");
            }, 3000);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === "name") {
            setName(e.target.value);
        } else if (e.target.name === "username") {
            setUsername(e.target.value);
        } else if (e.target.name === "email") {
            setEmail(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        } else if (e.target.name === "confirmPassword") {
            setConfirmPassword(e.target.value);
        }
    };


    return (
      <>
        <div className="register-container">
          <div className="register-content">
            <div className="register-side-content">
              
            </div>
            <div className="register-header">
              <img src={logo} alt="logo" />
            </div>
            <div className="register-body">
              <h2>Let's Get Started!</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="form-group" controlId="formBasicName">
                  <Form.Control className="form-control" type="text" placeholder="Enter Name" name="name" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="form-group" controlId="formBasicEmail">
                  <Form.Control className="form-control" type="email" placeholder="Enter Email" name="email" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="form-group" controlId="formBasicUsername">
                  <Form.Control className="form-control" type="text" placeholder="Enter Username" name="username" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="form-group" controlId="formBasicPassword">
                  <Form.Control className="form-control" type="password" placeholder="Enter Password" name="password" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="form-group" controlId="formBasicConfirmPassword">
                  <Form.Control className="form-control" type="password" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} />
                </Form.Group>
                <button className="button-register" type="submit">
                  Sign Up
                </button>
                <p>Already have an account? <Link to={"/"}>Login</Link></p>
              </Form>
            </div>
          </div>
        </div>
      </>
    );
};

export default Register;