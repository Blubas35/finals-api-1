import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({data, authorInformation}) => {
    return (
        <section className='recommended-book-list'>
            <h3>If you are interested in {authorInformation.name} writing style. Check out these books:</h3>
            <div className='recommended-book-card'>
                <div className='card-left-side'>
                    <h4>
                        <span>
                            <Link
                                to={'/book/' + data.id}
                            >
                                {data.title}
                            </Link>
                        </span>
                    </h4>
                    <img className='card-image' src={data.image} alt='book cover' width='100'></img>
                    <div className='card-right-side'>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
            <div className='recommended-book-card'>
                <div className='card-left-side'>
                    <h4>
                        <span>
                            <Link
                                to={'/book/' + data.id}
                            >
                                {data.title}
                            </Link>
                        </span>
                    </h4>
                    <img className='card-image' src={data.image} alt='book cover' width='100'></img>
                    <div className='card-right-side'>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
            <div className='recommended-book-card'>
                <div className='card-left-side'>
                    <h4>
                        <span>
                            <Link
                                to={'/book/' + data.id}
                            >
                                {data.title}
                            </Link>
                        </span>
                    </h4>
                    <img className='card-image' src={data.image} alt='book cover' width='100'></img>
                    <div className='card-right-side'>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookCard