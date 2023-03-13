import React from 'react'

const RightContainer = ({ data }) => {
    return (
        <>
            {data && data.length > 0 && (
                data.map((data, index) => (
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
        </>
    )
}

export default RightContainer