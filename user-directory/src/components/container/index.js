import React from 'react';
import Title from '../title/index'

function Container(props) {
    return (
        <div>
            <Title />

            <div className={`container${props.fluid ? '-fluid' : ''}`} />
        </div>

    )
}

export default Container;
