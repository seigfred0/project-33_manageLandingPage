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

// const Cards = () => {
//     return (
//         <swiper-container>
//             <swiper-slide>Slide 1</swiper-slide>
//             <swiper-slide>Slide 2</swiper-slide>
//             <swiper-slide>Slide 3</swiper-slide>
//             ...
//         </swiper-container>
//     )
// }


export default Testimonial