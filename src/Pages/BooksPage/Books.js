import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../../Components/container/Container'


const Books = () => {

    const [booksData, setBooksData] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/books')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBooksData(data)
            })

    }, [])




    return (
        <Container>
            <h1>Books list</h1>
            {booksData && booksData.length > 0 && (
                booksData.map((book, index) =>
                (
                    <div key={index} className='books-list'>
                        <ul>
                            <li>
                                <h2>Title of the book: {book.title}</h2>
                                <div>
                                    <span>Book author: </span>
                                    <Link><span>{book.author}</span></Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                )
                )
            )}

        </Container>
    )
}

export default Books