import React from 'react';
import Moment from 'react-moment';

import './style.css';

function Card(props) {
    return (
        <div className='card'>
            <div className='card-body'>
                <img src={props.image} alt={`Profile of ${props.firstName} ${props.lastName}`} className='profileImg' />

                <p className='profileName text'>{props.firstName} {props.lastName}</p>

                <p className='profileAge text'>Age: {props.age}</p>

                <p className='profileDob text'>
                    Dob: <Moment format='MM/DD/YYYY' className='moment'>{props.DOB}</Moment> 
                </p>

                <p className='profileNum text'>{props.phoneNum}</p>

                <a href={`mailto:${props.email}`} className='email'>{props.email}</a>
            </div>
        </div>
    )
}

export default Card;