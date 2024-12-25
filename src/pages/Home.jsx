import React from 'react';
import Carousel from '../components/Carousel';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import MeetOurPartners from '../components/MeetOurPartners';
import ShortIntro from '../components/ShortIntro';
import FaqSection from '../components/FaqSection';

const Home = () => {
    const featuredData = useLoaderData();

    return (
        <div>
            <Carousel></Carousel>
            {/* Featured Section */}
            <div className='w-11/12 mx-auto'>
                <h1 className='text-3xl font-bold my-10'>Featured Services</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-11/12 gap-4 mx-auto'>
                    {
                        featuredData.map(service => <ServiceCard service={service}></ServiceCard>)
                    }
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
            <div className='w-11/12 mx-auto'>
                <h1  className='text-3xl font-bold my-10 '>Frequently Ask Questions:</h1>
                <FaqSection></FaqSection>
            </div>
        </div>
    );
};

export default Home;