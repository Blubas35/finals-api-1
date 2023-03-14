import React from 'react'
import './ReviewForm.scss'

const ReviewForm = ( { onFormSubmit, onNameChange, nameValue, onRatingChange, ratingValue, textareaChange, textareaValue, editMode} ) => {
    return (
        <form className='review-form' onSubmit={onFormSubmit}>
            <div className='form-control'>
                <label htmlFor='fullName'>Full name:</label>
                <input className='input-review' onChange={onNameChange} value={nameValue} name='fullName' type='text'></input>
            </div>
            <div className='form-control'>
                <label htmlFor='title'>Rating:</label>
                <input className='rating-input' onChange={onRatingChange} value={ratingValue} name='title' type='number' min='1' max='5'></input>
            </div>
            <div className='form-control'>
                <label htmlFor='review-textarea'>Write your review:</label>
                <textarea className='textarea-review' onChange={textareaChange} value={textareaValue} name='review-textarea'></textarea>
            </div>
            {!editMode && (
                <input className='form-button' type='submit' value='Post review!'></input>
            )}
        </form>
    )
}

export default ReviewForm