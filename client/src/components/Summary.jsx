import React from "react";
import map from '../assets/map.png';
import luggage from '../assets/luggage.png';
import '../styles/Summary.css';
const Summary = () => {
    return (
        <>
            <div className="summary-container">
                <h1>Your review matters</h1>
                <section className="small-summary">

                    <div className="summary-image-container">
                        <img src={map}
                            alt="summary" />
                    </div>

                    <article className="article"> <h4>Hola Explorers! Help your fellow travellers by sharing your review. Our user-friendly map will let you do it in no time !
                    </h4></article>
                </section>
                <section className="small-summary second">
                    <article className="article"> <h4>A journey of a thousand miles begin with a single step.
                    </h4></article>

                    <div className="summary-image-container">
                        <img src={luggage}
                            alt="summary" />
                    </div>
                </section>

                <h1 className="shoutout">Happy Travelling ✈</h1>
            </div>
        </>
    );
}

export default Summary;