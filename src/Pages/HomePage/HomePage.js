import React, { useEffect, useState } from 'react'
import Container from '../../Components/container/Container'
import backgroundImage from '../../Components/Images/hero-box-background.jpg'

const HomePage = () => {

    const [booksData, setBooksData] = useState('')
    const [authorsData, setAuthorsData] = useState('')
    const [authorsImage, setAuthorsImage] = useState('')
    const [reviewsData, setReviewsData] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/books/')
            .then(res => res.json())
            .then(data => {
                setBooksData(data)
            })

    }, [])
    useEffect(() => {
        fetch('http://localhost:3000/authors/')
            .then(res => res.json())
            .then(data => {
                setAuthorsData(data)
                setAuthorsImage(data.map(author => author.image))
            })

    }, [])
    useEffect(() => {
        fetch('http://localhost:3000/reviews?_limit=3')
            .then(res => res.json())
            .then(data => {
                setReviewsData(data)
            })
    }, [])
    return (
        <>
            <div className='hero-box-image-wrapper'>
                <div
                    className='hero-box-background'
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        height: '100vh'
                    }}
                ></div>
            </div>
            <Container>
                <div className='left-container'>
                    <div className='selling-point-left'>
                        <h2>Deciding what to read next?</h2>
                        <p>You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations. </p>
                    </div>
                    <div className='selling-point-right'>
                        <h2>What are your friends reading</h2>
                        <p>Chances are your friends are discussing and reviewing their favorite (and least favorite) books on WhatToRead. </p>
                    </div>
                    <div className='card-slide-wrapper'>
                        <h3>What will you discover?</h3>
                        {booksData && booksData.length > 0 && (
                            booksData.map((data, index) => (
                                <div key={index} className='card-item'>
                                    <img src={data.image} alt='cia bus book foto' width='150'></img>
                                </div>
                            ))
                        )}

                    </div>
                    <div className='quote-wrapper'>
                        <h2>Quotes</h2>
                        <div className='quote-content-wrapper'>

                            <div className='quote-author-image'>
                                <img src={authorsImage[1]} alt='authors portrait' width='150'></img>
                            </div>
                            <div className='quote-text'>
                                <p>"I am not afraid of storms, for I am learning how to sail my ship."</p>
                                <span>by Gitanas Nauseda</span>
                                {/* <span>by Louisa May Alcott</span> */}
                            </div>
                        </div>
                    </div>
                </div>
                {reviewsData && reviewsData.length > 0 && (
                    reviewsData.map((data, index) => (
                        <div key={index} className='right-container'>
                            <h4>User reviews</h4>
                            <div className='review-list-wrapper'>
                                <ul className='review-list'>
                                    <li className='review-item'>
                                        <div className='reviewer-image'>
                                            <img src={data.image} alt='reviewer portrait' width='50'></img>
                                        </div>
                                        <div className='review-info-wrapper'>
                                            <h5>{data.reviewer}</h5>
                                            <span>{data.rating}/5</span>
                                            <span>{data.comment}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))
                )}
            </Container>
        </>
    )
}

export default HomePage