import React from 'react'
import { Link } from 'react-router-dom'

const ReviewSearch = ({ data, keyword }) => {
    return (
        <>
            {data && data.length > 0 && (
                <div className='reviews-search-wrapper'>
                    <h2>Keyword ({keyword}) found in the review list</h2>
                    <div className='reviews-result-wrapper'>
                        {data && data.length > 0 && (
                            data.map((result, index) => {
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
    )
}

export default ReviewSearch