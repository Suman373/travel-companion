import React from "react";
import { useState } from "react";
import '../styles/LoginForm.css';
const LoginForm = () => {

    document.title = "Travel Companion | Login";

    // states
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [ pwd, setPwd] = useState("");
 
     const handleSubmit = (e)=>{
        e.preventDefault();
         console.log(name,email,pwd);
     }

    return (
        <>
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
                        <h4>New here ? <a href="/register">Sign up</a></h4>
                    </div>
                </form>
            </div>
        </>
    );
}

export default LoginForm;