import React from 'react'
import './RightContainer.scss'

const RightContainer = ({ data }) => {
    console.log(data)
    return (
        <div className='right-container'>
            <h3 className='right-container-title'>User reviews</h3>
            {data && data.length > 0 && (
                data.map((data, index) => (
                    <div key={index} className='right-container-content'>
                        <div className='review-list-wrapper'>
                            <ul className='review-list'>
                                <li className='review-item'>
                                    <div className='reviewer-image'>
                                        <img className='reviewer-image' src={data.image} alt='reviewer portrait' width='50'></img>
                                    </div>
                                    <div className='review-info-wrapper'>
                                        <h5 className='reviewer-name'>{data.reviewer}</h5>
                                        <span>{data.rating}/5</span>
                                        <span>{data.comment}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))
            )}
        </div>

    )
}

export default RightContainer