import React from 'react'
import Container from '../../Components/container/Container'

const HomePage = () => {



    return (
        <Container>
            <div>Hero box background image</div>
            <div className='left-container'>main content
                <div className='selling-point-left'>
                    <h2>Deciding what to read next?</h2>
                    <p>You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations. </p>
                </div>
                <div className='selling-point-right'>
                    <h2>What are your friends reading</h2>
                    <p>Chances are your friends are discussing and reviewing their favorite (and least favorite) books on WhatToRead. </p>
                </div>
                <div className='card-slide-wrapper'>
                    <div className='card-item'>
                        <img alt='cia bus book foto'></img>
                    </div>
                </div>
                <div className='quote-wrapper'>
                    <h2>Quotes</h2>
                    <div className='quote-content-wrapper'>
                        <div className='quote-author-image'>
                            <img alt='cia bus foto'></img>
                        </div>
                        <div className='quote-text'>
                            <p>Teleloto</p>
                            <span>by Gitanas Nauseda</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-container'>side content
                <div className='review-list-wrapper'>
                    <ul className='review-list'>
                        <li className='review-item'></li>
                    </ul>
                </div>
            </div>
        </Container>
    )
}

export default HomePage