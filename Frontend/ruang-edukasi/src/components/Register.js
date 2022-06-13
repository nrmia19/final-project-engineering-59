import React from "react";
import { useState } from "react";
import "../assets/style/components/register.css";

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
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-register">
                    <h2>Let's Get Started!</h2>
                    <div className="form-group">
                        <input type={"text"} className="form-control" id="name" name="name" placeholder="Masukan Nama" value={name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type={"text"} className="form-control" id="username" name="username" placeholder="Masukan Username" value={username} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type={"text"} className="form-control" id="email" name="email" placeholder="Masukan Email" value={email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type={"password"} className="form-control" id="password" name="password" placeholder="Masukan Password" value={password} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type={"password"} className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Konfirmasi Password" value={confirmPassword} onChange={handleChange} />
                    </div>
                    <button className="submit" type="submit">Sign Up</button>
                </div>
            </form>

        </div>
    );
};

export default Register;