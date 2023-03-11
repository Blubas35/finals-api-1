import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../../Components/container/Container'


const Book = () => {

    const { id } = useParams()

    const [bookTitle, setBookTitle] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')
    const [bookCategory, setBookCategory] = useState('')
    const [bookImage, setBookImage] = useState('')
    const [bookDescription, setBookDescription] = useState('')
    const [bookReviews, setBookReviews] = useState('')
    const [newReviewName, setNewReviewName] = useState('')
    const [newReviewTitle, setNewReviewTitle] = useState('')
    const [newReviewBody, setNewReviewBody] = useState('')


    useEffect(() => {
        fetch(`http://localhost:3000/books/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBookTitle(data.title)
                setBookAuthor(data.author)
                setBookCategory(data.category)
                setBookImage(data.image)
                setBookDescription(data.description)
            })
    }, [])
    useEffect(() => {
        fetch(`http://localhost:3000/reviews?bookId=${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBookReviews(data)
            })
    }, [])

    const fullNameHandler = (e) => setNewReviewName(e.target.value)
    const titleHandler = (e) => setNewReviewTitle(e.target.value)
    const reviewBodyHandler = (e) => setNewReviewBody(e.target.value)
    return (
        <Container>
            <div className='book-wrapper'>
                <div className='left-side'>
                    <div className='book-image-wrapper'>
                        <img src={bookImage} width='300' height='300'></img>
                    </div>
                    <div className='button-wrapper'>
                        <button>Buy now!</button>
                        <button>Sign up to read!</button>
                    </div>
                </div>
                <div className='right-side'>
                    <ul className='book-content'>
                        <li className='book-item'>
                            <div className='book-title-wrapper'>
                                <h2>Title of the book: {bookTitle}</h2>
                            </div>
                            <div className='book-information'>
                                <span>Book author: </span>
                                <Link><span>{bookAuthor}</span></Link>

                                <div className='book-description'>
                                    <h3>About the book:</h3>
                                    <p>{bookDescription}</p>
                                </div>

                                <p>Genre: {bookCategory}</p>
                            </div>
                        </li>
                    </ul>
                    {/* visai smagu butu padaryt recommendation (card'us) su book image, title ir author*/}
                    <h2>Ratings & Reviews</h2>
                    <form>
                        <div className='form-control'>
                            <label htmlFor='fullName'>Full name:</label>
                            <input onChange={fullNameHandler} name='fullName' type='text'></input>
                        </div>
                        <div className='form-control'>
                            <label htmlFor='title'>Title:</label>
                            <input onChange={titleHandler} name='title' type='text'></input>
                        </div>
                        <div className='form-control'>
                            <label htmlFor='review-textarea'>Write your review:</label>
                            <textarea onChange={reviewBodyHandler} name='review-textarea'></textarea>
                        </div>
                        <input type='submit'></input>
                    </form>
                    {bookReviews && bookReviews.length > 0 && (
                        bookReviews.map((review, index) => (
                            <div key={index} className='ratings-reviews-wrapper'>
                                <div className='user-info'>
                                    <img src={review.image}></img>
                                    <h4>{review.reviewer}</h4>
                                </div>
                                <div className='review-rating-description'>
                                    <div className='rating'>
                                        <span>{review.rating}/5</span>
                                    </div>
                                    <div className='review-text'>
                                        <span>What user <span style={{ fontWeight: "bold" }}>{review.reviewer}</span>  thinks about this book: </span>
                                        <p>{review.comment}</p>
                                    </div>
                                </div>
                            </div>

                        )
                        )

                    )}
                </div>
            </div>
        </Container>
    )
}

export default Book