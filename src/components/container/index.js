import React from 'react';
import Nav from '../nav/index';
import Main from '../main-content/index';

function Container(props) {
    return (
        <div>
            <Nav />

            <div className={`container${props.fluid ? '-fluid' : ''}`}>
                <Main />
            </div>
        </div>
    )
}

export default Container;
