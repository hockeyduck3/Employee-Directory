import React from 'react';

import './style.css';

function Nav(props) {
    return (
        <nav className='navbar navbar-dark'>
            <span className='navbar-brand'>Employee Directory</span>
            
            <form className='input-group' onSubmit={props.submitFunc}>
                <input className='form-control searchBar' type='search' placeholder='Search' aria-label='Search' />
            </form>
        </nav>
    )
}

export default Nav;