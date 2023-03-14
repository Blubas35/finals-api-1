import React from 'react'
import './HeroBox.scss'

const HeroBox = ({ image }) => {
    return (
        <div className='hero-box-image-wrapper'>
            <div
                className='hero-box-background'
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    height: '70vh'
                }}
            >
                <div className='hero-box-overlay'>
                    <div className='hero-box-text'>
                        <h1>Welcome to my website</h1>
                        <p>Check out our book collection</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBox