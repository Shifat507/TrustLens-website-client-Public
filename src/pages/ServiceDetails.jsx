import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Rating } from "react-simple-star-rating";
import { Helmet } from 'react-helmet-async';
import AuthContext from '../AuthContext/AuthContext';
import Swal from 'sweetalert2';

const ServiceDetails = () => {
    const {user} = useContext(AuthContext);
    const [service, setService] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_URL}/services/${id}`);
        setService(data);
        setStartDate(new Date(data.deadline));
    };

    const handleRating = (rate) => {
        setRating(rate); // Update rating state
    };

    const handleReview = async () => {
        if (!reviewText.trim() || !rating) {
            alert("Please provide both a rating and a review text.");
            return;
        }

        const reviewData = {
            serviceId: id,
            serviceTitle: title,
            email: user?.email,
            userName: user?.displayName,
            userPhoto: user?.photoURL,
            reviewText,
            rating,
            date: new Date().toISOString(), // Optionally add date
        };

        try {
            await axios.post(`${import.meta.env.VITE_URL}/add-review`, reviewData);
            Swal.fire({
                title: "Review Added",
                icon: "success",
                draggable: true
              });
            setReviewText(''); // Clear the text area
            setRating(0); // Reset the rating
            navigate('/services')
        } catch (error) {
            console.error("Error submitting review:", error);
            alert("Failed to submit review. Please try again.");
        }
        
    };

    const { image, title, company, price, description } = service;

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <Helmet>
                <title>TrustLens | Service Details</title>
            </Helmet>
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
                                    ratingValue={rating}
                                />
                            </div>
                        </div>

                        {/* Review Text */}
                        <div className="mt-6">
                            <h3 className="text-lg font-medium text-gray-800">Give Review</h3>
                            <textarea
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                className="w-full h-24 p-3 mt-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                                placeholder="Write your review here..."
                            ></textarea>
                        </div>

                        <button
                            onClick={handleReview}
                            className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Add Review
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
