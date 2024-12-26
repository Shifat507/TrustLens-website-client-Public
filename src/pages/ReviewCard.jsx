import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AiFillStar } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Rating } from "react-simple-star-rating";

const ReviewCard = ({ review }) => {
    const { _id, serviceId, serviceTitle, userName, userPhoto, reviewText, rating, date } = review;


    const [modalData, setModalData] = useState({ rating, reviewText });
    const [updatedRating, setUpdatedRating] = useState(rating);
    const [updatedReviewText, setUpdatedReviewText] = useState(reviewText);


    const handleRating = (rate) => {
        setModalData((prev) => ({ ...prev, rating: rate }));
    };

    // Function to show modal
    const showModal = () => {
        setModalData({ rating: updatedRating, reviewText: updatedReviewText }); // Set default values
        const modal = document.getElementById("my_modal_5");
        if (modal) {
            modal.showModal();
        } else {
            console.error("Modal element not found");
        }
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedReview = form.updatedReview.value;

        // Prepare form data for PUT request
        const formData = {
            rating: modalData.rating,
            reviewText: updatedReview,
        };

        try {
            const { data } = await axios.put(
                `${import.meta.env.VITE_URL}/update-review/${_id}`,
                formData
            );

            Swal.fire({
                title: "Successfully Updated",
                icon: "success",
                draggable: true,
            });

            // Update the local state with the updated data
            setUpdatedRating(modalData.rating);
            setUpdatedReviewText(updatedReview);

            // Close the modal
            document.getElementById("my_modal_5").close();
        } catch (error) {
            console.error("Failed to Update:", error);
            alert("Failed to connect to the server. Please try again later...");
        }
    };

    const handleDelete = async (id) => {
        console.log(id);
        
        await axios.delete(`${import.meta.env.VITE_URL}/my-reviews/${id}`);
        alert('deleted')
    };

    return (
        <>
            {/* Review Card */}
            <div className="card card-side bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-xl w-3/4 hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 mx-auto">
                <figure className="flex items-center pl-4">
                    <img
                        src={userPhoto}
                        alt="User"
                        className="rounded-full w-24 h-24 border-4 border-white shadow-md"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{serviceTitle}</h2>
                    <h2 className="text-lg font-semibold flex items-center gap-2">
                        <span className="text-yellow-300">
                            <AiFillStar />
                        </span>
                        {updatedRating}/5
                    </h2>
                    <h3 className="text-lg flex items-center gap-2">
                        <span className="font-medium">Reviewer:</span> {userName}
                    </h3>
                    <p className="text-sm italic opacity-90 mt-2">
                        "{updatedReviewText}"
                    </p>
                    <div className="flex items-center text-sm mt-4 gap-2">
                        <MdDateRange />
                        <span>{date}</span>
                    </div>
                    <div className="card-actions justify-end mt-4 flex gap-2">
                        <button
                            onClick={showModal}
                            className="btn btn-accent btn-sm flex items-center gap-2 px-4 rounded-full"
                        >
                            <FiEdit2 />
                            Update
                        </button>
                        <button onClick={() => handleDelete(_id)} className="btn btn-error btn-sm flex items-center gap-2 px-4 rounded-full">
                            <FiTrash2 />
                            Delete
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-lg font-bold text-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-t-lg">
                        Update Review
                    </h3>
                    <form onSubmit={handleSubmit} method="dialog" className="space-y-6">
                        <div>
                            <p className="text-gray-700 font-medium mb-2">Give Rating:</p>
                            <div className="flex items-center gap-4">
                                <Rating
                                    onClick={handleRating}
                                    ratingValue={modalData.rating}
                                    initialValue={modalData.rating}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block font-medium mb-2 text-gray-700">
                                Your Review:
                            </label>
                            <textarea
                                name="updatedReview"
                                value={modalData.reviewText}
                                onChange={(e) =>
                                    setModalData((prev) => ({ ...prev, reviewText: e.target.value }))
                                }
                                className="textarea textarea-bordered w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                rows="4"
                            ></textarea>
                        </div>
                        <div className="flex justify-end gap-4">
                            <button type="submit" className="btn btn-primary rounded-full hover:shadow-lg">
                                Update Review
                            </button>
                        </div>
                    </form>
                    <button
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                        onClick={() => document.getElementById("my_modal_5").close()}
                    >
                        ✕
                    </button>
                </div>
            </dialog>
        </>
    );
};

export default ReviewCard;
