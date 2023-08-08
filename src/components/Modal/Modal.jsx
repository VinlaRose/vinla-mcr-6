import React, { useState } from 'react';
import './Modal.css'; 

const ReviewModal = ({ onClose, onSave }) => {
  const [reviewerName, setReviewerName] = useState('');
  const [starRating, setStarRating] = useState(1);
  const [comment, setComment] = useState('');

  const handleSave = () => {
    
    const reviewData = {
        revName: reviewerName,
        rating: starRating,
        comment: comment,
        pp: "https://icon-library.com/images/cool-profile-icon/cool-profile-icon-9.jpg", 
      };
    
       
      onSave(reviewData);

    
    setReviewerName('');
    setStarRating(1);
    setComment('');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Add Review</h2>
        <div className="form-group">
          <label>Your Name:</label>
          <input
            type="text"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Rating:</label>
          <select value={starRating} onChange={(e) => setStarRating(parseInt(e.target.value))}>
            {[1, 2, 3, 4, 5].map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
          ></textarea>
        </div>
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default ReviewModal;
