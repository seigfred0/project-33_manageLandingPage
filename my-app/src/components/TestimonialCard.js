import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../css/testimonialCard.css';

// import required modules
import { Pagination } from 'swiper/modules';

// Images
import ali from '../images/avatar-ali.png';
import anisha from '../images/avatar-anisha.png';
import richard from '../images/avatar-richard.png';
import shanai from '../images/avatar-shanai.png';

const TestimonialCard = () => {
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const windowReSize = () => {
            if(window.innerWidth >= 1000) {
                setSlidesPerView(3);
            } else if (window.innerWidth >= 600) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        }

        windowReSize();
        window.addEventListener('resize', windowReSize);

        return () => {
            window.removeEventListener('resize',windowReSize)
        }
    }, [])


  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='slide-image'>
                <img src={ali} alt='avatar'></img>
                <h5>Ali Bravo</h5>
            </div>
            <div className='slide-text'>
                <p>
                “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide-image'>
                <img src={anisha} alt='avatar'></img>
                <h5>Anisha Li</h5>
            </div>
            <div className='slide-text'>
                <p>
                “Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide-image'>
                <img src={richard} alt='avatar'></img>
                <h5>Richard Watts</h5>
            </div>
            <div className='slide-text'>
                <p>
                “Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!”
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide-image'>
                <img src={shanai} alt='avatar'></img>
                <h5>Shanai Gough</h5>
            </div>
            <div className='slide-text'>
                <p>
                “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”
                </p>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}


export default TestimonialCard;

