import React from "react";
import '../styles/Navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = ()=>{
    // navigation
    const navigate = useNavigate();

    // redirects
    const handleSignup=(e)=>{
        e.preventDefault();
        navigate('/register');
    }

    const handleLogin=(e)=>{
        e.preventDefault();
        navigate('/login');
    }
    return(
        <>
            <nav className="nav-panel">
                <a className="nav-logo"
                href="/">
                    Travel Companion
                </a>
                <button
                onClick={(e)=> handleSignup(e)}>
                    Sign Up
                </button>
                <button
                onClick={(e)=>handleLogin(e)}>
                    Log in
                </button>
            </nav>
        </>
    )
}
export default Navbar;