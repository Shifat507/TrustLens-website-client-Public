import React from 'react';
import { AiFillStar } from 'react-icons/ai'; // Star icon for rating
import { MdDateRange } from 'react-icons/md'; // Date icon
import { FiEdit2, FiTrash2 } from 'react-icons/fi'; // Icons for update and delete

const ReviewCard = ({ review }) => {
  const { serviceTitle, userName, userPhoto, reviewText, rating, date } = review;

  return (
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
          {rating}/5
        </h2>
        <h3 className="text-lg flex items-center gap-2">
          <span className="font-medium">User:</span> {userName}
        </h3>
        <p className="text-sm italic opacity-90 mt-2">
          "{reviewText}"
        </p>
        <div className="flex items-center text-sm mt-4 gap-2">
          <MdDateRange />
          <span>{date}</span>
        </div>
        <div className="card-actions justify-end mt-4 flex gap-2">
          <button className="btn btn-accent btn-sm flex items-center gap-2 px-4 rounded-full">
            <FiEdit2 />
            Update
          </button>
          <button className="btn btn-error btn-sm flex items-center gap-2 px-4 rounded-full">
            <FiTrash2 />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
