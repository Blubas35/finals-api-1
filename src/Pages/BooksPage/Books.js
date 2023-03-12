import React, { useEffect, useState } from 'react'
import Container from '../../Components/container/Container'
import BookItem from './BookItem/BookItem'


const Books = () => {

    const [booksData, setBooksData] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/books/')
            .then(res => res.json())
            .then(data => {
                setBooksData(data)
            })

    }, [])

    return (
        <Container>
            <h1>Books list</h1>
            {booksData && booksData.length > 0 && (
                booksData.map((book, index) =>
                (
                    <BookItem key={index} bookInfo={book}></BookItem>
                )
                )
            )}

        </Container>
    )
}

export default Books