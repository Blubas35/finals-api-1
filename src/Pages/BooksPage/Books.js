import React, { useEffect, useState } from 'react'

import Container from '../../Components/container/Container'
import BookItem from './BookItem/BookItem'
import { firstLetterUpperCase } from '../../Components/functions/Function'
import { Link } from 'react-router-dom'
import './Book.scss'
import './Books.scss'


const Books = () => {

    const [booksData, setBooksData] = useState('')
    const [categories, setCategories] = useState([])
    const [selectedInput, setSelectedInput] = useState('Fiction')
    const [searchResults, setSearchResults] = useState(null)
    const [keyword, setKeyword] = useState('')
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Blubas35/data.json/books/')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBooksData(data)
                setIsLoading(false)
            })

    }, [])

    const optionValue = (e) => setSelectedInput(e.target.value)
    const keywordHandler = (e) => setKeyword(e.target.value)

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Blubas35/data.json/category/')
            .then(res => res.json())
            .then(data => {
                const uniqueCategories = data.map(category => category.genre)
                setCategories(uniqueCategories)
            })
    }, [])

    const formSubmitHandler = (e) => {
        e.preventDefault()
        console.log(selectedInput)
        fetch(`https://my-json-server.typicode.com/Blubas35/data.json/books?category=${selectedInput}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSearchResults(data)
            })
    }

    const returnListHandler = () => setSearchResults(null)



    return (
        <Container>
            {isLoading ? (
                <div className='loading'>Loading...</div>
            ) : (
                searchResults ? (
                    <>
                        <div className='genre-search-wrapper'>
                            <h2 className='genre-result-title'>Book list with selected category ({selectedInput})</h2>
                            <button className='button' onClick={returnListHandler}>Return to the full list</button>
                            <ul className='genre-result-list'>
                                {searchResults.map((book, index) => (
                                    <BookItem key={index} bookInfo={book} />
                                ))}
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        <header className='main-header'>
                            <div className='form-wrapper'>
                                <form className='genre-wrapper' onSubmit={formSubmitHandler}>
                                    <div className='form-control'>
                                        <select onChange={optionValue} value={selectedInput}>
                                            {categories.map((category, index) => (
                                                <option key={index}>{firstLetterUpperCase(category)}</option>
                                            ))}
                                        </select>
                                        <input className='button' type='submit' value='Search By Genre' />
                                    </div>
                                    <div className='input-wrapper'>
                                        <input
                                            type='text'
                                            name='keyword'
                                            onChange={keywordHandler}
                                            value={keyword}
                                            placeholder='Search...'
                                        />
                                        <Link to={'/search/' + keyword} className='button'>
                                            Search by keyword
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </header>

                        <h1>Books list</h1>
                        {booksData.length > 0 ? (
                            <div className='books-list'>
                                <ul className='list-wrapper'>
                                    {booksData.map((book, index) => (
                                        <BookItem key={index} bookInfo={book} />
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <h2>No results found...</h2>
                        )}
                    </>
                )
            )}
        </Container>
    )
}

export default Books