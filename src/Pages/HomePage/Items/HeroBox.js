import React from 'react'

const HeroBox = ({ image }) => {
    return (
        <div className='hero-box-image-wrapper'>
            <div
                className='hero-box-background'
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    height: '100vh'
                }}
            ></div>
        </div>
    )
}

export default HeroBox