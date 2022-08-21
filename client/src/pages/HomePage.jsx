import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Summary from "../components/Summary";
import Footer from "../components/Footer";

const HomePage=()=>{
   return(
    <>
    <div
       className="home-page-container">
        <Navbar/>
        <Banner/>
        <Summary/>
        <Footer/>
    </div>
    </>
   )
}
export default HomePage;