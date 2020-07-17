import React from 'react';
import Nav from '../nav/index';

function Container(props) {
    return (
        <div>
            <Nav />

            <div className={`container${props.fluid ? '-fluid' : ''}`}>
            </div>
        </div>
    )
}

export default Container;
