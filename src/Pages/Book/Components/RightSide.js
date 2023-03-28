import React from 'react'
import { Link } from 'react-router-dom'
import'./RightSide.scss'

const RightSide = ({ bookTitle, bookAuthorId, bookAuthor, bookDescription, bookCategory }) => {
    return (
        <div className='right-side'>
            <ul className='book-content'>
                <li className='book-item-content'>
                    <div className='book-title-wrapper'>
                        <h2>Title of the book: {bookTitle}</h2>
                    </div>
                    <div className='book-information'>
                        <span>Book author: </span>
                        <Link to={'/author/' + bookAuthorId}><span>{bookAuthor}</span></Link>

                        <div className='book-description'>
                            <h3>About the book:</h3>
                            <p>{bookDescription}</p>
                        </div>

                        <p>Genre: pasikeite {bookCategory}</p>
                    </div>
                </li>
            </ul>
            {/* visai smagu butu padaryt recommendation (card'us) su book image, title ir author*/}
        </div>
    )
}

export default RightSide