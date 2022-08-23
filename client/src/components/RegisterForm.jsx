import React from 'react';
import { useState } from 'react';
import '../styles/RegisterForm.css';
import { useNavigate, Navigate } from "react-router-dom";

const axios = require("axios")


const RegisterForm = () => {
    const navigate = useNavigate();


    document.title = "Travel Companion | Sign Up";

    // states
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    let islogin=window.localStorage.getItem("islogin")
    

    const handleRedirect = (e) => {
        navigate('/login');
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            username: name,
            email: email,
            password: pwd
        }

        console.log(newUser)
        
        const postData = async () => {
            try {
                const res = await axios.post("users/register", newUser);
                setError(false);
                setSuccess(true);
                console.log("Posting Data",)
            }
            catch {
                setError(true)
            }

        }

        postData();


    }

    return (
        <>
           
            {(islogin) ? <Navigate replace to="/user" /> :
               success ? <Navigate replace to="/login" /> :
                
                <div className="form-container">
            <h1>Register yourself as User</h1>
            <form onSubmit={handleSubmit} className="register-form">
                <label htmlFor="name">
                    Name
                </label>
                <input type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required />

                <label htmlFor="email">
                    Email
                </label>
                <input type="email"
                    placeholder="your_email@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />

                <label htmlFor="password">
                    Password
                </label>
                <input type="password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    required />
                <button className='submit-btn'
                    type='submit'>
                    Submit
                </button>
                <div className='already-user'>
                    <h4>Already have an account ? <a href="/login">Log in</a> or <a href="/">Home</a></h4>
                </div>
                {success && <span className="success">Successfull. You can login now!</span>}
                {error && <span className="failure">Something went wrong!</span>}
            </form>
                    </div>
                
            }
        </>
    )

}

export default RegisterForm;