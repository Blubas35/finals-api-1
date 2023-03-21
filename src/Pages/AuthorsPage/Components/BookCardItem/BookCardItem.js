import React from 'react'
import { Link } from 'react-router-dom'
import './BookCardItem.scss'

const BookCardItem = ({ info }) => {
    return (
        <div className='recommended-book-card'>
            <div className='card-right-side'>
                <Link
                    className='book-card-link'
                    to={'/book/' + info.id}
                >
                    <img className='card-image' src={info.image} alt='book cover' width='100'></img>
                    <span>
                        {info.title}
                    </span>
                    <span>{info.author}</span>
                </Link>
            </div>
        </div>
    )
}

export default BookCardItem