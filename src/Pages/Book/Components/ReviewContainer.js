import React from 'react'
import './reviewContainer.scss'

const ReviewContainer = ({ infoArr, onEdit, onDelete, starRating }) => {
    
    return (
        <div className='reviews-container'>
            {infoArr && infoArr.length > 0 && (
                infoArr.map((review, index) => (
                    <>
                    {console.log(infoArr)}
                    <div key={index} className='ratings-reviews-wrapper'>
                        <div className='user-info'>
                            <img className='user-profile-photo' src={review.image} alt='user profile photo'></img>
                        </div>
                        <div className='review-rating-description'>
                            <div className='rating'>
                                <span>What user <span style={{ fontWeight: "bold" }}>{review.reviewer}</span>  thinks about this book: </span>
                            </div>
                            <div className='review-text'>
                                <span>{review.rating}/5</span>
                                <p>{review.comment}</p>
                            </div>
                            <div className='button-wrapper'>
                                <button className='button' onClick={() => onEdit(review)}>Edit</button>
                                <button className='button' onClick={() => onDelete(review.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                    </>
                ))
            )}
        </div>
    )
}

export default ReviewContainer