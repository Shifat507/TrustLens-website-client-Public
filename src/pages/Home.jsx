import React from 'react';
import Carousel from '../components/Carousel';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
    const featuredData = useLoaderData();

    return (
        <div>
            <Carousel></Carousel>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-3xl font-bold my-10'>Featured Section</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-11/12 gap-4 mx-auto'>
                    {
                        featuredData.map(service => <ServiceCard service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;