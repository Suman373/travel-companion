import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const HomePage=()=>{
   return(
    <>
    <div
       className="home-page-container">
        <Navbar/>
        <Banner/>
    </div>
    </>
   )
}
export default HomePage;