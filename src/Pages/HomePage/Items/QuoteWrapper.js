import React from 'react'
import './QuoteWrapper.scss'

const QuoteWrapper = ({ authorsImage }) => {
    return (
        <div className='quote-wrapper'>
            <h2 className='quote-title'>Quotes</h2>
            <div className='quote-content-wrapper'>

                <div className='quote-author-image'>
                    <img className='quote-author-image' src={authorsImage} alt='authors portrait' width='150'></img>
                </div>
                <div className='quote-text'>
                    <p>"I am not afraid of storms, for I am learning how to sail my ship."</p>
                    <span>by Gitanas Nauseda</span>
                    {/* <span>by Louisa May Alcott</span> */}
                </div>
            </div>
        </div>
    )
}

export default QuoteWrapper