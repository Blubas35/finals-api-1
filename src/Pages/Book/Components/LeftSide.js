import React from 'react'
import './LeftSide.scss'

const LeftSide = ({ bookImage }) => {
    return (
        <div className='left-side'>
            <div className='book-image-wrapper'>
                <img src={bookImage} width='300' height='300' alt='book cover'></img>
            </div>
            <div className='button-wrapper'>
                <button className='button' >Buy now!</button>
                <button className='button' >Sign up to read!</button>
            </div>
        </div>
    )
}

export default LeftSide