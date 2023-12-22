import React from "react";
import { register } from 'swiper/element/bundle';
import TestimonialCard from "./TestimonialCard";

// register Swiper custom elements
register();

const Testimonial = () => {

    return (
        <section className="testimonial-section">
            <h1 className="heading">What they've said</h1>
            <TestimonialCard></TestimonialCard>
            <div className="btn-container">
                <button className="btn">Get Started</button>
            </div>
        </section>
    )
}

export default Testimonial