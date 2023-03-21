import React from 'react'
import { useState } from 'react';
import Star from './Star/Star';

const Rating = ({ rating, setRating }) => {

    return (
        <>
            <span className='rating-text'>Rating:</span>
            <div>
                {[...Array(5)].map((_, index) => (
                    <Star
                        key={index}
                        selected={index < rating}
                        onClick={() => setRating(index + 1)}
                        // key={index}
                        // value={index + 1}
                        // selected={rating >= index + 1}
                        // onClick={handleRatingClick}
                    />
                ))}
            </div>
        </>
    );
}
export default Rating