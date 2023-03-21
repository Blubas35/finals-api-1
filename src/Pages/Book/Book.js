import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../Components/container/Container'
import LeftSide from './Components/LeftSide'
import ReviewContainer from './Components/ReviewContainer'
import ReviewForm from './Components/ReviewForm'
import RightSide from './Components/RightSide'
import './Book.scss'


const Book = () => {

    const { id } = useParams()

    const [bookTitle, setBookTitle] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')
    const [bookAuthorId, setBookAuthorId] = useState('')
    const [bookCategory, setBookCategory] = useState('')
    const [bookImage, setBookImage] = useState('')
    const [bookDescription, setBookDescription] = useState('')
    const [bookReviews, setBookReviews] = useState([])
    const [newReviewName, setNewReviewName] = useState('')
    const [newReviewBody, setNewReviewBody] = useState('')
    const [editReviewId, setEditReviewId] = useState('')
    const [editMode, setEditMode] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [rating, setRating] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:3000/books/${id}`)
            .then(res => res.json())
            .then(data => {
                setBookTitle(data.title)
                setBookAuthor(data.author)
                setBookCategory(data.category)
                setBookImage(data.image)
                setBookDescription(data.description)
                setBookAuthorId(data.authorId)
                setIsLoading(false)
            })
    }, [id])
    useEffect(() => {
        fetch(`http://localhost:3000/reviews?bookId=${id}`)
            .then(res => res.json())
            .then(data => {
                setBookReviews(data)
                setIsLoading(false)
            })
    }, [id])

    const fullNameHandler = (e) => setNewReviewName(e.target.value)
    const reviewBodyHandler = (e) => setNewReviewBody(e.target.value)

    const formSubmitHandler = (e) => {
        e.preventDefault()

        if (editMode) {
            updateReviewHandler(editReviewId)
        } else {
            const newReview = {
                bookId: id,
                reviewer: newReviewName,
                rating: rating,
                comment: newReviewBody,
            }

            fetch(`http://localhost:3000/reviews?bookId=${id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newReview),
            })
                .then(response => response.json())
                .then(({ id }) => {
                    setBookReviews([...bookReviews, { id, ...newReview }]);
                    setNewReviewName('');
                    setRating(0)
                    setNewReviewBody('');
                })
        }
    }

    const deleteHandler = (reviewId) => {
        console.log(reviewId)
        fetch(`http://localhost:3000/reviews/${reviewId}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((json) => {
                fetch(`http://localhost:3000/reviews?bookId=${id}`)
                    .then(res => res.json())
                    .then(postsData => {
                        setBookReviews(postsData)
                    });
            });

    }
    const editHandler = (reviewData) => {
        console.log(reviewData)

        setNewReviewName(reviewData.reviewer)
        setNewReviewBody(reviewData.comment)
        setRating(reviewData.rating)
        setEditReviewId(reviewData.id)
        setEditMode(true)
    }

    const updateReviewHandler = (reviewId) => {
        console.log(reviewId)
        fetch(`http://localhost:3000/reviews/${reviewId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                id: 1,
                reviewer: newReviewName,
                rating: rating,
                comment: newReviewBody,
                userId: reviewId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                fetch(`http://localhost:3000/reviews?bookId=${id}`)
                    .then(res => res.json())
                    .then(reviewData => {
                        setBookReviews(reviewData)
                        setNewReviewName('');
                        setRating(0)
                        setNewReviewBody('');
                        setEditMode(false)
                    });
            });

    }

    return (
        <Container>
            {isLoading ? (
                <div className='loading'>Loading...</div>
            ) : (
                <>
                    <div className='book-wrapper'>
                        <LeftSide bookImage={bookImage}></LeftSide>

                        <RightSide
                            bookTitle={bookTitle}
                            bookAuthorId={bookAuthorId}
                            bookAuthor={bookAuthor}
                            bookDescription={bookDescription}
                            bookCategory={bookCategory}
                        ></RightSide>

                    </div>
                    <div className='review-wrapper'>
                        <h2>Ratings & Reviews</h2>
                        <div className='review-form-button-wrapper'>
                            <ReviewForm
                                onFormSubmit={formSubmitHandler}
                                onNameChange={fullNameHandler}
                                nameValue={newReviewName}
                                textareaChange={reviewBodyHandler}
                                textareaValue={newReviewBody}
                                editMode={editMode}
                                updateReview={updateReviewHandler}
                                reviewId={editReviewId}
                                rating={rating}
                                setRating={setRating}
                            ></ReviewForm>

                        </div>
                        <ReviewContainer
                            infoArr={bookReviews}
                            onEdit={editHandler}
                            onDelete={deleteHandler}
                        ></ReviewContainer>
                    </div>
                </>
            )}

        </Container >
    )
}

export default Book