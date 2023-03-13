import React from 'react'
import { Link } from 'react-router-dom'

const BookItem = (props) => {
    const { title, author, authorId, id, category, image} = props.bookInfo
    return (
        <div className='books-list'>
            <ul>
                <li>
                    <div className='book-left-side'>
                        <div className='book-cover-wrapper'>
                            <img src={image} alt='book cover' width='100'></img>
                        </div>
                    </div>
                    <div className='book-right-side'>
                        <div className='book-title-wrapper'>
                            <h2>Title of the book:
                                <Link
                                    to={'/book/' + id}>
                                    <span>{title}</span>
                                </Link> </h2>
                        </div>
                        <div className='book-information-wrapper'>
                            <span>Book author: </span>
                            <Link
                                to={'/author/' + authorId}
                            >
                                <span>{author}</span>
                            </Link>
                            <div className='book-category-wrapper'>
                                <span>Genre: {category}</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default BookItem