import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Rating } from "react-simple-star-rating";

const ServiceDetails = () => {
    const [service, setService] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const { id } = useParams();
    // const [rating, setRating] = useState(0);

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_URL}/services/${id}`);
        setService(data);
        setStartDate(new Date(data.deadline));
    };
    

    const { image, title, company, website, email, date, category, price, description } = service;
    const handleRating = (rate) => {
        setService({ ...service, rating: rate });
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex flex-col">
                    <div className="lg:w-full">
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 lg:w-full">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
                                <h2 className="text-lg text-gray-600 mt-1">{company}</h2>
                            </div>
                            <div>
                                <span className="text-2xl font-bold text-blue-600">${price}</span>
                            </div>
                        </div>
                        <p className="text-gray-700 mt-4">{description}</p>

                        {/* Rating */}
                        <div className="mb-4">
                            <label className="block font-medium mb-2">Rating</label>
                            <div className="flex items-center gap-4">
                                <Rating
                                    onClick={handleRating}
                                    ratingValue={service.rating}
                                // className="inline"
                                />
                                
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-medium text-gray-800">Give Review</h3>
                            <textarea
                                className="w-full h-24 p-3 mt-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                                placeholder="Write your review here..."
                            ></textarea>
                        </div>
                        <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300">
                            Add Review
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
