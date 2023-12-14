import React from "react";
import headerImage from '../images/illustration-intro.svg';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-section_image">
                <img src={headerImage} alt="header"/>
            </div>
            <div className="hero-section_text">
                <h1>  Bring everyone together to build better products.</h1>
                <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
            </div>
        </section>
    );
};

export default Hero;