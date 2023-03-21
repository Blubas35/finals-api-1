import React from 'react'
import BookCardItem from './BookCardItem/BookCardItem'
import './BookCard.scss'

const BookCard = ({ data, authorInformation }) => {
    // jeigu nori keisti book card reikai eiti i authors page ir keisti per data props
    return (
        <section className='recommended-book-list'>
            <h3>If you are interested in {authorInformation.name} writing style. Check out these books:</h3>
            <div className='book-card-wrapper'>
                <BookCardItem info={data} authorInformation={authorInformation}></BookCardItem>
                <BookCardItem info={data} authorInformation={authorInformation}></BookCardItem>
                <BookCardItem info={data} authorInformation={authorInformation}></BookCardItem>
            </div>
        </section>
    )
}

export default BookCard