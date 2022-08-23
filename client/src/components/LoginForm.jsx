import React from "react";
import { useState } from "react";
import '../styles/LoginForm.css';
import { Navigate } from "react-router-dom";
const axios = require("axios")


const LoginForm = () => {

    document.title = "Travel Companion | Login";

    // states
    const [error, setError] = useState(false);
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    let islogin=window.localStorage.getItem("islogin")
    const [Login,setLogin]=useState(islogin)
    
     const handleSubmit = (e)=>{
         e.preventDefault();
         
        const User = {
            username: name,
            email: email,
            password: pwd
        }

        console.log(User)
        
        const postData = async () => {
            try {
                const res = await axios.post("users/login", User);
                setError(false);
                window.localStorage.setItem('user', JSON.stringify(res.data.username));
                window.localStorage.setItem('islogin',JSON.stringify(true));
                setLogin(true)
                console.log("Logging Data", res.data,islogin)
            }
            catch {
                setError(true)
            }

        }

        postData();
         
     }

    return (
        <>
            {Login ? <Navigate replace to="/user" /> :
                <div className="form-container">
                    <h1>Login from here</h1>
                    <form onSubmit={handleSubmit} className="login-form">
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
                            Login
                        </button>
                        <div className='already-user'>
                            <h4>New here ? <a href="/register">Sign up</a> or <a href="/">Home</a></h4>
                        </div>
                    </form>
                </div>
            }
        </>
    );
}

export default LoginForm;