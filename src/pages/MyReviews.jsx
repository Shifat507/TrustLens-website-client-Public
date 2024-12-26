import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AuthContext from '../AuthContext/AuthContext';
import ReviewCard from './ReviewCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetchData();
    }, [user?.email]); // Fetch data initially and whenever the user email changes.

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_URL}/my-reviews/${user?.email}`);
            setReviews(data);
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    };
    // console.log(reviews);
    const removeReview = (id) => {
        setReviews((prevReviews) => prevReviews.filter(review => review._id !== id));
    };

    return (
        <div>
            <Helmet>
                <title>TrustLens | My Reviews</title>
            </Helmet>
            <h1 className='text-4xl font-bold my-10 text-center'>My Reviews : {reviews.length}</h1>
            {
                reviews.length > 0 ? <div className='grid grid-cols-1 gap-5 w-11/12 mx-auto'>
                {
                    reviews.map((review, idx) => <ReviewCard key={idx} review={review} removeReview={removeReview}></ReviewCard>)
                }
            </div> : <p className='text-sm text-gray-400 text-center'>You do not review any service yet</p>
            }


        </div>
    );
};

export default MyReviews;