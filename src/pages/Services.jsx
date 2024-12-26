import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceCard from '../components/ServiceCard';
import { Helmet } from 'react-helmet-async';

const Services = () => {
    const [services, setServices] = useState([]); // Updated variable name for clarity
    const [filter, setFilter] = useState(''); // State to manage selected filter

    useEffect(() => {
        const fetchServices = async () => {
            try {
                // Fetch services based on the selected filter
                const { data } = await axios.get(
                    `${import.meta.env.VITE_URL}/services`,
                    { params: { filter } } // Use query params for better maintainability for fetching service by category
                );
                setServices(data);
            } catch (error) {
                // console.error('Failed to fetch services:', error);
            }
        };

        fetchServices();
    }, [filter]);

    return (
        <div className='w-11/12 mx-auto'>
            <Helmet>
                <title>TrustLens | Services</title>
            </Helmet>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className="text-4xl font-bold">All Services: {services.length}</h1>
                </div>

                <div>
                    <div className="flex flex-col gap-2 w-48 my-10">
                        <label className="text-gray-700 font-semibold" htmlFor="category">
                            Filter by Category
                        </label>
                        <select
                            onChange={(e) => setFilter(e.target.value)}
                            name="category"
                            id="category"
                            className="border p-2 rounded-md"
                        >
                            <option value="">Filter by Category</option>
                            <option value="Event Planning">Event Planning</option>
                            <option value="Business Services">Business Services</option>
                            <option value="Health & Wellness">Health & Wellness</option>
                            <option value="Restaurants & Cafes">Restaurants & Cafes</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Display Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
                {services.length > 0 ? (
                    services.map((service) => (
                        <ServiceCard key={service._id} service={service} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">
                        No services found for the selected category.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Services;
