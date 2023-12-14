import React from "react";
import logo from '../images/logo.svg';

import burgerIcon from '../images/icon-hamburger.svg';

const Navigation = () => {
    return (
        <nav>
            <div className='logo-container'>
                <img src={logo} alt='logo'/>
            </div>
            <div>
                <img src={burgerIcon} alt="burger-icon" />
            </div>
        </nav>
    );
};

export default Navigation;