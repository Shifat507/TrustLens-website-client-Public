import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    const allServiceData = useLoaderData()
    console.log(allServiceData);
    return (
        <div>
            <h1>All Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-11/12 gap-4 mx-auto'>
                {
                    allServiceData.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;