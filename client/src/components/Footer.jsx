import React from "react";
import '../styles/Footer.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="note">
                    <h4>Travel Companion is made by Jayanth MKV and Suman Roy</h4>
                    <h5> - with <span style={{ color: 'red' }}>❤</span> from <span> IN</span></h5>
                </div>
                <div className="social-container">
                    <p><FaFacebook></FaFacebook></p>
                    <p><FaInstagram></FaInstagram></p>
                    <p><FaTwitter></FaTwitter></p>
                </div>
                <h5 className="copyright">No Copyright &copy; All Rights Reserved 2022</h5>
            </div>
           
        </>
    );
}

export default Footer;