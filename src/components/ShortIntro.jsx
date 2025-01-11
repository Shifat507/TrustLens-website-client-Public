import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router-dom';
import reviewLottie from '../assets/reviewLottie.json'
const ShortIntro = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="bg-green-300 rounded-lg p-8 flex flex-col lg:flex-row justify-between items-center gap-8">
                {/* Left Section */}
                <div className='flex flex-col md:flex-row items-center justify-evenly mx-auto'>
                    <div>
                        <Lottie className='md:w-[420px]' animationData={reviewLottie}></Lottie>
                    </div>
                    <div className="md:max-w-md text-center lg:text-left">
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                            We're TrustLens
                        </h2>
                        <p className="mt-4 text-gray-700">
                            At TrustLens, we’re dedicated to building a community of trust. Our mission is to empower individuals to make informed decisions and foster stronger partnerships by emphasizing transparency and accountability.
                        </p>
                        <button className="md:mt-10 mt-6 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition">
                            <Link to='/aboutUs'>Learn More</Link>
                        </button>
                    </div>

                </div>


            </div>

        </div>
    );
};

export default ShortIntro;