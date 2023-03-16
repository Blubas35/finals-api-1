import React from 'react'
import { Link } from 'react-router-dom'
import './CardSlider.scss'

const CardSlider = ({ booksData }) => {
    console.log(booksData)
    return (
        <>
            <h3>What will you discover?</h3>
            <div className='card-slide-wrapper'>
                {booksData && booksData.length > 0 && (
                    booksData.map((data, index) => (
                        <div key={index} className='card-item'>
                            <Link to={'/book/' + data.id}><img src={data.image} alt='book cover' width='150' height='200'></img></Link> 
                        </div>
                    ))
                )}
            </div>
        </>
    )
}

export default CardSlider