import React from 'react'
import './Star.scss'

const Star = ({ value, selected, onClick }) => {
    return (
        <span
            className={selected ? 'star selected' : 'star'}
            onClick={() => onClick(value)}
        >
            ★
        </span>
    );
}
export default Star