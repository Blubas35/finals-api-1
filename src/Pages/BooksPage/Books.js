import React, { useEffect, useState } from 'react'

import Container from '../../Components/container/Container'
import BookItem from './BookItem/BookItem'
import { firstLetterUpperCase } from '../../Components/functions/Function'
import { Link } from 'react-router-dom'


const Books = () => {

    const [booksData, setBooksData] = useState('')
    const [categories, setCategories] = useState([])
    const [selectedInput, setSelectedInput] = useState('Fiction')
    const [searchResults, setSearchResults] = useState(null)
    const [keyword, setKeyword] = useState('')


    useEffect(() => {
        fetch('http://localhost:3000/books/')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBooksData(data)
            })

    }, [])

    const optionValue = (e) => setSelectedInput(e.target.value)
    const keywordHandler = (e) => setKeyword(e.target.value)

    useEffect(() => {
        fetch('http://localhost:3000/category/')
            .then(res => res.json())
            .then(data => {
                const uniqueCategories = data.map(category => category.genre)
                setCategories(uniqueCategories)
            })
    }, [])

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

    const returnListHandler = () => setSearchResults(null)



    return (
        <Container>
            {searchResults ? (
                <>
                    <h2>Book list with selected category ({selectedInput})</h2>
                    <button onClick={returnListHandler}>Return to the full list</button>

                    {searchResults.map((book, index) =>
                    (
                        <BookItem key={index} bookInfo={book}></BookItem>
                    ))}
                </>
            ) : (
                <>
                    <header>
                        <form onSubmit={formSubmitHandler}>
                            <select onChange={optionValue} value={selectedInput}>
                                {categories.map((category, index) => {
                                    return (
                                        <option key={index}>{firstLetterUpperCase(category)}</option>
                                    )
                                })}
                            </select>
                            <input type='submit' value='Search By Genre'></input>
                        </form>


                        <input type='text' name='keyword' onChange={keywordHandler} value={keyword} placeholder='Search...'></input>
                        <Link to={'/search/' + keyword}><button>Search by keyword</button></Link>

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