import React from 'react'
import { Link } from 'react-router-dom'

const AuthorsSearch = ({ data, keyword, bookTitle }) => {
    return (
        <>
            {data && data.length > 0 && (
                <div className='authors-search-wrapper'>
                    <h2>Keyword ({keyword}) found in the authors list</h2>
                    <div className='author-result-wrapper'>
                        {data && data.length > 0 && (
                            data.map((result, index) => {
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
    )
}

export default AuthorsSearch