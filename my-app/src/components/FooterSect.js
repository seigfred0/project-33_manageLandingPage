import React from 'react';

const FooterSect = () => {

    return (
        <section>
            <CallToAction></CallToAction>
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
    
}

export default FooterSect;