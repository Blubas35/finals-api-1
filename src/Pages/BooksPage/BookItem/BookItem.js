import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../../Components/container/Container'

const BookItem = (props) => {
    const { title, author, id ,category } = props.bookInfo
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
                        <div>
                            <span>Book author: </span>
                            <Link
                            to={'/author/' + author}
                            ><span>{author}</span></Link>
                        </div>
                    </li>
                </ul>
            </div>
        </Container>
    )
}

export default BookItem