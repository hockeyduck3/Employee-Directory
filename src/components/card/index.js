import React from 'react';

import './style.css';

function Card(props) {
    return (
        <div className='card'>
            <div className='card-body'>
                <img src={props.image} alt={`Profile of ${props.firstName} ${props.lastName}`} className='profileImg' />
                <p className='profileName'>{props.firstName} {props.lastName}</p>
            </div>
        </div>
    )
}

export default Card;