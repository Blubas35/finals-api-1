import React, { useState } from 'react'
import Rating from '../../../Components/Rating/Rating'
import './ReviewForm.scss'

const ReviewForm = ({ onFormSubmit, onNameChange, nameValue, rating, setRating, textareaChange, textareaValue, editMode, updateReview, reviewId, }) => {
    
    return (
        <form className='edit-form' onSubmit={onFormSubmit}>
            <div className='form-control'>
                <label htmlFor='fullName'>Full name:</label>
                <input className='input-review' onChange={onNameChange} value={nameValue} name='fullName' type='text'></input>
            </div>
            <div className='form-control'>
                <Rating rating={rating} setRating={setRating}></Rating>
            </div>
            <div className='form-control'>
                <label htmlFor='review-textarea'>Write your review:</label>
                <textarea className='textarea-review' onChange={textareaChange} value={textareaValue} name='review-textarea'></textarea>
            </div>
            {!editMode && (
                <input id='formButton' className='form-button' type='submit' value='Post review!'></input>
            )}
            {editMode && (
                <button className='save-changes button' type='submit' onClick={() => updateReview(reviewId)}>Save changes!</button>
            )}
        </form>
    )
}

export default ReviewForm