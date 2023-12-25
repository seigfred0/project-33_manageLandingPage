import React from "react";
import logo from '../images/logo.svg';

import burgerIcon from '../images/icon-hamburger.svg';

const Navigation = () => {
    return (
        <nav>
            <div className='logo-container'>
                <img src={logo} alt='logo'/>
            </div>

            <div className="nav-links desktop-only">
                <ul>
                    <li>Pricing</li>
                    <li>Product</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Community</li>
                </ul>
            </div>

            <div className="desktop-only">
                <button className="btn nav-btn">Get Started</button>
            </div>

            <div className="mobile-only">
                <img src={burgerIcon} alt="burger-icon" />
            </div>
        </nav>
    );
};

export default Navigation;