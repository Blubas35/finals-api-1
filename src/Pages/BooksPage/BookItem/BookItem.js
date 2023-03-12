import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../../Components/container/Container'

const BookItem = (props) => {
    const { title, author, authorId, id, category, } = props.bookInfo
    console.log(props.bookInfo)
    return (
        <Container>
            <div className='books-list'>
                <ul>
                    <li>
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
                    </li>
                </ul>
            </div>
        </Container>
    )
}

export default BookItem