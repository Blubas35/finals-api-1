import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../Components/container/Container'


const Book = () => {
    return (
        <Container>
            <div className='books-list'>
                <ul>
                    <li>
                        <div className='book-title-wrapper'>
                            <h2>Title of the book:
                                <Link
                                    to='/book'>
                                    <span>LAbuka</span>
                                </Link> </h2>
                        </div>
                        <div>
                            <span>Book author: </span>
                            <Link><span>katu</span></Link>
                        </div>
                    </li>
                </ul>
            </div>
        </Container>
    )
}

export default Book