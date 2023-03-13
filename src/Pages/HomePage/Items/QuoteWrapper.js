import React from 'react'

const QuoteWrapper = ({ authorsImage }) => {
    return (
        <div className='quote-wrapper'>
            <h2>Quotes</h2>
            <div className='quote-content-wrapper'>

                <div className='quote-author-image'>
                    <img src={authorsImage} alt='authors portrait' width='150'></img>
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