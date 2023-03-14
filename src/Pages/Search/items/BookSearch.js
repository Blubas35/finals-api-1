import React from 'react'
import { Link } from 'react-router-dom'

const BookSearch = ({ data, keyword }) => {
    return (
        <>
            {data && data.length > 0 && (
                <div className='book-search-wrapper'>
                    <h2>Keyword ({keyword}) found in the book list</h2>
                    <div className='book-result-wrapper'>
                        {data && data.length > 0 && (
                            data.map((result, index) => {
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
    )
}

export default BookSearch