import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../../Components/container/Container'

const Search = () => {

    const { keyword } = useParams()

    const [bookSearch, setBookSearch] = useState([])
    const [reviewsSearch, setReviewsSearch] = useState([])
    const [authorsSearch, setAuthorsSearch] = useState([])
    const [bookTitle, setBookTitle] = useState('')


    useEffect(() => {
        fetch(`http://localhost:3000/books?q=${keyword}`)
            .then(res => res.json())
            .then(results => {
                setBookSearch(results)
                setBookTitle(results.map(result => result.title))
            })
    }, [keyword])

    useEffect(() => {
        fetch(`http://localhost:3000/reviews?q=${keyword}`)
            .then(res => res.json())
            .then(results => {
                setReviewsSearch(results)
            })
    }, [keyword])

    useEffect(() => {
        fetch(`http://localhost:3000/authors?q=${keyword}`)
            .then(res => res.json())
            .then(results => {
                setAuthorsSearch(results)
            })
    }, [keyword])

    return (
        <Container>
            {keyword && keyword.length > 0 && (
                <>
                    <>
                        {bookSearch && bookSearch.length > 0 && (
                            <div className='book-search-wrapper'>
                                <h2>Keyword ({keyword}) found in the book list</h2>
                                <div className='book-result-wrapper'>
                                    {bookSearch && bookSearch.length > 0 && (
                                        bookSearch.map((result, index) => {
                                            return (
                                                <ul key={index} className='search-list'>
                                                    <li className='search-item'>
                                                        <div className='book-image-wrapper'>
                                                            <img src={result.image} alt='book portrait' width='100'></img>
                                                        </div>
                                                        <div className='book-description-wrapper'>
                                                            <div className='content-wrapper'>
                                                                <h4>Book title: <Link to={'/book/' + result.id}><span>{result.title}</span></Link></h4>
                                                                <span>Book author: {result.author}</span>
                                                                <p>Book description: {result.description}</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            )
                                        })
                                    )}
                                </div>
                            </div>
                        )}
                    </>

                    <>
                        {reviewsSearch && reviewsSearch.length > 0 && (

                            <div className='reviews-search-wrapper'>
                                <h2>Keyword ({keyword}) found in the review list</h2>
                                <div className='reviews-result-wrapper'>
                                    {reviewsSearch && reviewsSearch.length > 0 && (
                                        reviewsSearch.map((result, index) => {
                                            return (
                                                <ul key={index} className='search-list'>
                                                    <li className='search-item'>
                                                        <div className='review-image-wrapper'>
                                                            <img src={result.image} alt='reviewer portrait' width='100'></img>
                                                        </div>
                                                        <div className='review-description-wrapper'>
                                                            <div className='content-wrapper'>
                                                                <h4>Reviewer: {result.reviewer}</h4>
                                                                <span>User review rating: {result.rating}/5</span>
                                                                <p>User review: <Link to={'/book/' + result.bookId}><span>{result.comment} (click to see the book!)</span></Link> </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            )
                                        })

                                    )}
                                </div>
                            </div>
                        )}
                    </>
                    <>
                        {authorsSearch && authorsSearch.length > 0 && (

                            <div className='authors-search-wrapper'>
                                <h2>Keyword ({keyword}) found in the authors list</h2>
                                <div className='author-result-wrapper'>
                                    {authorsSearch && authorsSearch.length > 0 && (
                                        authorsSearch.map((result, index) => {
                                            let firstSentence = result.description.match((/[^\.!\?]+[\.!\?]+/g))
                                            return (
                                                <ul key={index} className='search-list'>
                                                    <li className='search-item'>
                                                        <div className='author-image-wrapper'>
                                                            <img src={result.image} alt='author portrait' width='100'></img>
                                                        </div>
                                                        <div className='author-description-wrapper'>
                                                            <div className='content-wrapper'>
                                                                <h4>Author: <Link to={'/author/' + result.id}><span>{result.name}</span> </Link></h4>
                                                                <span>This author has written books such as: <Link to={'/book/' + result.id}><span>{bookTitle}</span> </Link> </span>
                                                                <p>Short description about author: {firstSentence[0]}</p>
                                                            </div>
                                                        </div>
                                                    </li>

                                                </ul>
                                            )
                                        })
                                    )}
                                </div>
                            </div>
                        )}
                    </>
                </>
            )}
            {bookSearch.length === 0 && reviewsSearch.length === 0 && authorsSearch.length === 0 && (
                <h2> No results found... </h2>
            )}

        </Container>
    )
}

export default Search