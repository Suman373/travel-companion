import React from "react";
import '../styles/Banner.css';
import travelbanner from '../assets/travelbanner.png';
const Banner=()=>{
    return(
        <>
        <div className="banner-container">

            <div className="title-container">
                    <h1>Travel Companion</h1>
                    <h5>A new journey awaits !</h5>
                    <button>Get started</button>
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