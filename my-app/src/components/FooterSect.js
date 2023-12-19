import React from 'react';
import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import pinterest from '../images/icon-pinterest.svg';
import twitter from '../images/icon-twitter.svg';
import youtube from '../images/icon-youtube.svg';
import footerImg from '../images/logoWhite.svg';



const FooterSect = () => {

    return (
        <section>
            <CallToAction></CallToAction>
            <Footer></Footer>
        </section>
    )
}

const CallToAction = () => {
    return (
        <div className='cta-section'>
            <h1>Simplify how your team works today.</h1>
            <div className="btn-container">
                <button className="btn">Get Started</button>
            </div>
        </div>
    )
}

const Footer = () => {
    
    return (
        <div className='footer-section'>
            <div className='footer-email'>
                <form>
                    <input type='email' placeholder='Update in your inbox...' />
                    <button>GO</button>
                </form>
            </div>
            <div className='footer-links'>
                <ul>
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
                <ul>
                    <li>Careers</li>
                    <li>Community</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-social'>
                <div className='footer-social_icons'>
                    <img src={facebook} alt='facebook' />
                    <img src={youtube} alt='youtube' />
                    <img src={twitter} alt='twitter' />
                    <img src={pinterest} alt='pinterest' />
                    <img src={instagram} alt='instagram' />
                </div>
                <div className='footer-social_logo'>
                    <img src={footerImg} alt='logo'/>

                    <p>Copyright 2020. All Rights Reserved</p>
                </div>
            </div>

        </div>
    )
}

export default FooterSect;