import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.css"; // Corrected import path
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../assets/bannerImg/BuisnessPlanningBanner.jpg';
import slider2 from '../assets/bannerImg/EventPlannerBanner.jpg';
import slider3 from '../assets/bannerImg/health-&-wellness-Photoroom.jpg';
import slider4 from '../assets/bannerImg/restourentBanner.jpg'; // Corrected slider4 import

const Banner = () => {
    return (
        <div className='mt-16'>
            <Carousel
                showThumbs={true} // Optional: hide thumbnails
                autoPlay={true}    // Optional: autoplay
                infiniteLoop={true} // Optional: infinite looping
                className="h-[75vh]" // Set the height of the carousel container
            >
                <div className="h-[75vh] flex items-center justify-center bg-gray-100">
                    <img src={slider1} alt="Business Planning" className="h-full w-auto object-cover" />
                </div>
                <div className="h-[75vh] flex items-center justify-center bg-gray-100">
                    <img src={slider2} alt="Event Planner" className="h-full w-auto object-cover" />
                </div>
                <div className="h-[75vh] flex items-center justify-center bg-gray-100">
                    <img src={slider3} alt="Health & Wellness" className="h-full w-auto object-cover" />
                </div>
                <div className="h-[75vh] flex items-center justify-center bg-gray-100">
                    <img src={slider4} alt="Restaurant" className="h-full w-auto object-cover" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
