import React, { useEffect, useState } from 'react'

import Container from '../../Components/container/Container'
import BookItem from './BookItem/BookItem'


const Books = () => {

    const [booksData, setBooksData] = useState('')
    const [categories, setCategories] = useState([])
    const [selectedInput, setSelectedInput] = useState('fiction')
    const [searchResults, setSearchResults] = useState(null)


    useEffect(() => {
        fetch('http://localhost:3000/books/')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBooksData(data)
                const uniqueCategories = [...new Set(data.map(book => book.category))]
                setCategories(uniqueCategories)
            })

    }, [])

    const optionValue = (e) => setSelectedInput(e.target.value)

    const formSubmitHandler = (e) => {
        e.preventDefault()
        console.log(selectedInput)
        fetch(`http://localhost:3000/books?category=${selectedInput}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSearchResults(data)
            })
    }

    return (
        <Container>
            {searchResults ? (
               
                searchResults.map((book, index) =>
                (
                    <BookItem key={index} bookInfo={book}></BookItem>
                )
                )
            ) : (
                <>
                    <header>
                        <form onSubmit={formSubmitHandler}>
                            <select onChange={optionValue} value={selectedInput}>
                                {categories.map((category, index) => {
                                    return (
                                        <option key={index}>{category}</option>
                                    )
                                })}
                            </select>
                            <input type='submit' value='Search'></input>
                        </form>
                    </header>
                    <h1>Books list</h1>
                    {booksData && booksData.length > 0 && (
                        booksData.map((book, index) =>
                        (
                            <BookItem key={index} bookInfo={book}></BookItem>
                        )
                        )
                    )}
                </>
            )}


        </Container>
    )
}

export default Books