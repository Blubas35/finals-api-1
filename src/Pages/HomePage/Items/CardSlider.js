import React from 'react'

const CardSlider = ({ booksData }) => {
    console.log(booksData)
    return (
        <div className='card-slide-wrapper'>
            <h3>What will you discover?</h3>
            {booksData && booksData.length > 0 && (
                booksData.map((data, index) => (
                    <div key={index} className='card-item'>
                        <img src={data.image} alt='book cover' width='150'></img>
                    </div>
                ))
            )}
        </div>
    )
}

export default CardSlider