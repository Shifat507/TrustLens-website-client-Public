import React from 'react';
import Carousel from '../components/Carousel';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import MeetOurPartners from '../components/MeetOurPartners';
import ShortIntro from '../components/ShortIntro';
import FaqSection from '../components/FaqSection';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const featuredData = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>TrustLens | Home</title>
            </Helmet>
            <Carousel></Carousel>
            {/* Featured Section */}
            <div className='w-11/12 mx-auto'>
                <h1 className='text-3xl font-bold my-10'>Featured Services</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto'>
                    {
                        featuredData.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }

                </div>
                <div className='flex justify-center my-10'>
                    <button className='mt-6 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition'><Link to='/services'>See All Services</Link></button>
                </div>
            </div>
            {/* Meet Our Partner Section */}
            <div className='w-11/12 mx-auto my-24'>

                <MeetOurPartners></MeetOurPartners>
            </div>
            {/* What we are? */}
            <div>
                <ShortIntro></ShortIntro>
            </div>
            {/* Frequently Ask Qus*/}
            <div className='w-11/12 mx-auto'>
                <h1 className='text-3xl font-bold my-10 '>Frequently Ask Questions</h1>
                <FaqSection></FaqSection>
            </div>
        </div>
    );
};

export default Home;