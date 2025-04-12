import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AiFillStar } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Rating } from "react-simple-star-rating";

const ReviewCard = ({ review, removeReview }) => {
    const { _id, serviceTitle, userName, userPhoto, reviewText, rating, date } = review;

    const [modalData, setModalData] = useState({ rating, reviewText });
    const [updatedRating, setUpdatedRating] = useState(rating);
    const [updatedReviewText, setUpdatedReviewText] = useState(reviewText);

    const handleRating = (rate) => {
        setModalData((prev) => ({ ...prev, rating: rate }));
    };

    const showModal = () => {
        setModalData({ rating: updatedRating, reviewText: updatedReviewText });
        document.getElementById("review_modal").showModal();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedReview = form.updatedReview.value;

        const formData = {
            rating: modalData.rating,
            reviewText: updatedReview,
        };

        try {
            await axios.put(`${import.meta.env.VITE_URL}/update-review/${_id}`, formData);
            Swal.fire("Updated!", "Your review has been updated.", "success");

            setUpdatedRating(modalData.rating);
            setUpdatedReviewText(updatedReview);
            document.getElementById("review_modal").close();
        } catch (error) {
            console.error("Update failed:", error);
            Swal.fire("Error", "Failed to update. Try again later.", "error");
        }
    };

    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "This review will be permanently deleted.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Delete",
            confirmButtonColor: "#e74c3c",
        });

        if (confirm.isConfirmed) {
            await axios.delete(`${import.meta.env.VITE_URL}/my-reviews/${id}`);
            Swal.fire("Deleted", "The review has been removed.", "success");
            removeReview(id);
        }
    };

    return (
        <>
            <div className="w-full max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6 mb-6 border border-gray-200 hover:shadow-lg transition duration-300">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <img
                        src={userPhoto}
                        alt={userName}
                        className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                    />
                    <div className="flex-1 space-y-2">
                        <h2 className="text-xl font-semibold text-gray-800">{serviceTitle}</h2>
                        <div className="flex items-center text-yellow-500 gap-1">
                            <AiFillStar />
                            <span className="text-base font-medium text-gray-700">{updatedRating} / 5</span>
                        </div>
                        <p className="text-sm text-gray-600">
                            <span className="font-medium">Reviewer:</span> {userName}
                        </p>
                        <p className="text-gray-700 italic">"{updatedReviewText}"</p>
                        <div className="flex items-center text-gray-500 text-sm gap-2">
                            <MdDateRange size={20} />
                            {date}
                        </div>
                        <div className="flex gap-2 mt-2">
                            <button
                                onClick={showModal}
                                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-1"
                            >
                                <FiEdit2 /> Edit
                            </button>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-1"
                            >
                                <FiTrash2 /> Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <dialog id="review_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box p-6 bg-white rounded-lg">
                    <h3 className="text-lg font-semibold text-center mb-4">Update Your Review</h3>
                    <form onSubmit={handleSubmit} method="dialog" className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Rating:
                            </label>
                            <Rating
                                onClick={handleRating}
                                ratingValue={modalData.rating}
                                initialValue={modalData.rating}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Review:
                            </label>
                            <textarea
                                name="updatedReview"
                                value={modalData.reviewText}
                                onChange={(e) =>
                                    setModalData((prev) => ({ ...prev, reviewText: e.target.value }))
                                }
                                className="textarea textarea-bordered w-full focus:ring focus:ring-blue-300"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div className="flex justify-end gap-2 mt-4">
                            <button
                                type="submit"
                                className="btn btn-primary px-4 py-2 text-sm font-medium rounded-full"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                    <button
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                        onClick={() => document.getElementById("review_modal").close()}
                    >
                        ✕
                    </button>
                </div>
            </dialog>
        </>
    );
};

export default ReviewCard;
