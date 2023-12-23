import React from "react";
import backgroundImage from '../images/bg-tablet-pattern.svg';
import headerImage from '../images/illustration-intro.svg';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-section_image">
                <img src={headerImage} alt="header"/>
            </div>
            <div className="hero-section_text">
                <h1 className="main-heading heading">Bring everyone together to build better products.</h1>
                <p className="text-main text">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                <div className="btn-container">
                    <button className="btn">Get Started</button>
                </div>
            </div>
            <img src={backgroundImage} alt="background" className="background-two"/>
        </section>
    );
};

export default Hero;