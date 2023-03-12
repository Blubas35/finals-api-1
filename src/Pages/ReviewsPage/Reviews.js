import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../../Components/container/Container'

const Reviews = () => {

    const [reviewsData, setReviewsData] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/reviews?_expand=book')
        // fetch('http://localhost:3000/reviews/')
        // http://localhost:3000/reviews?bookId=1
            .then(res => res.json())
            .then(data => {
                setReviewsData(data)
                console.log(data)
            })
    }, [])

    return (
        <Container>
            <h1>Reviews list</h1>
            {reviewsData && reviewsData.length > 0 && (
                reviewsData.map((review, index) => (
                    <div key={index} className='review-wrapper'>
                        <ul>
                            <li>
                                <h2>{review.reviewer} has recently reviewed this book: <span><Link to= {`/book/${review.book.id}`} >{review.book.title}</Link></span></h2>
                                <div className='review-content'>
                                    <span>{review.comment} </span>
                                    <span>{review.rating}/5</span>
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

export default Reviews