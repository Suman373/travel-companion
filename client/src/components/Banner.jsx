import React from "react";
import '../styles/Banner.css';
import travelbanner from '../assets/travelbanner.png';
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";


const Banner = () => {

        const navigate = useNavigate();
    
    const handleGetstarted=(e)=>{
        e.preventDefault();
        navigate('/user');
=======
import {AiOutlineArrowRight} from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

const Banner=()=>{
    // navigator
    const navigate = useNavigate();

    const handleRedirect=(e)=>{
        navigate('/register');
>>>>>>> 294b38b5bfde3ef55e946d53a4e71fe43788917f
    }

    return(
        <>
        <div className="banner-container">

            <div className="title-container">
                    <h1>Travel Companion</h1>
<<<<<<< HEAD
                    <h5>A new journey awaits !</h5>
                    <button onClick={(e)=>handleGetstarted(e)}>Get started</button>
=======
                    <h5>It's a big world out there, Go explore .</h5>
                    <button 
                    onClick={(e=> handleRedirect(e))}>
                        Get started <AiOutlineArrowRight></AiOutlineArrowRight>
                    </button>
>>>>>>> 294b38b5bfde3ef55e946d53a4e71fe43788917f
            </div>
            <div className="image-container">
                    <img src={`${travelbanner}`}
                    alt="banner"
                    className="home-banner-image"/>
            </div>

        </div>
        </>
    );
}

export default Banner;