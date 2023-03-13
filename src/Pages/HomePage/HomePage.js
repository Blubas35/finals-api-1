import React, { useEffect, useState } from 'react'
import Container from '../../Components/container/Container'
import backgroundImage from '../../Components/Images/hero-box-background.jpg'
import CardSlider from './Items/CardSlider'
import HeroBox from './Items/HeroBox'
import QuoteWrapper from './Items/QuoteWrapper'
import RightContainer from './Items/RightContainer'

const HomePage = () => {

    const [booksData, setBooksData] = useState([])
    const [authorsData, setAuthorsData] = useState('')
    const [authorsImage, setAuthorsImage] = useState('')
    const [reviewsData, setReviewsData] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:3000/books/')
            .then(res => res.json())
            .then(data => {
                setBooksData(data)
                setIsLoading(false)
            })

    }, [])
    
    useEffect(() => {
        fetch('http://localhost:3000/authors/')
            .then(res => res.json())
            .then(data => {
                setAuthorsData(data)
                setAuthorsImage(data.map(author => author.image))
                setIsLoading(false)
            })

    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/reviews?_limit=3')
            .then(res => res.json())
            .then(data => {
                setReviewsData(data)
                setIsLoading(false)
            })
    }, [])

    return (
        <>
            <HeroBox image={backgroundImage}></HeroBox>
            <Container>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <div className='left-container'>
                            <div className='selling-point-left'>
                                <h2>Deciding what to read next?</h2>
                                <p>You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations. </p>
                            </div>
                            <div className='selling-point-right'>
                                <h2>What are your friends reading</h2>
                                <p>Chances are your friends are discussing and reviewing their favorite (and least favorite) books on WhatToRead. </p>
                            </div>
                            <CardSlider booksData={booksData}></CardSlider>
                            <QuoteWrapper authorsImage={authorsImage[1]}></QuoteWrapper>
                        </div>
                        <RightContainer data={reviewsData}></RightContainer>
                    </>
                )}
            </Container>
        </>
    )
}

export default HomePage