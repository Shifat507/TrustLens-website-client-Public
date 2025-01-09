import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { image, title, description, category, price, _id } = service;
    return (
        <div className="card group w-72 bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 mx-auto ">
            <figure className="relative w-full h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 px-2 py-1 bg-black bg-opacity-50 text-white rounded-md text-sm">
                    {category}
                </div>
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-lg font-bold text-gray-800">{title}</h2>
                <p className="text-gray-600 text-sm">{description.substring(0, 100)}...</p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-semibold text-slate-800">${price}</span>
                    <div className="flex gap-2">
                        
                        <button className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition">
                            <Link to={`/serviceDetails/${_id}`}>See Details</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;