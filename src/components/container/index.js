import React from 'react';

import Nav from '../nav/index';
import Main from '../main-content/index';
import Footer from '../footer/index';

function Container(props) {
    return (
        <div>
            <Nav />

            <div className={`container${props.fluid ? '-fluid' : ''}`}>
                <Main />
            </div>

            <Footer />
        </div>
    )
}

export default Container;
