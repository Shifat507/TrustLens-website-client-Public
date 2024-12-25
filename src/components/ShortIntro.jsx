import React from 'react';
import { Link } from 'react-router-dom';

const ShortIntro = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="bg-green-300 rounded-lg p-8 flex flex-col lg:flex-row justify-between items-center gap-8">
                {/* Left Section */}
                <div className="max-w-md text-center lg:text-left">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                        We're TrustLens
                    </h2>
                    <p className="mt-4 text-gray-700">
                        At TrustLens, we’re dedicated to building a community of trust. Our mission is to empower individuals to make informed decisions and foster stronger partnerships by emphasizing transparency and accountability.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition">
                        <Link to='/aboutUs'>Learn More</Link>
                    </button>
                </div>

                {/* Right Section */}
                <div className="bg-green-900 rounded-lg p-6 flex flex-col justify-center items-center shadow-lg">
                    <h3 className="text-lg font-semibold text-white">
                        TrustLens Impact Report is Live!
                    </h3>
                    <p className="mt-2 text-sm text-white text-center">
                        Explore the initiatives we’ve taken to ensure trust and transparency on our platform this year.
                    </p>
                    <button className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition">
                        View Report
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ShortIntro;