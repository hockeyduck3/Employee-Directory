import React from 'react';

import './style.css';

function Nav(props) {
    return (
        <nav className='navbar navbar-dark'>
            <span className='navbar-brand'>Employee Directory</span>
            
            <form className='input-group' onSubmit={event => {event.preventDefault()}}>
                <input className='form-control searchBar' type='search' placeholder='Search' aria-label='Search' onChange={props.submitFunc}/>
            </form>
        </nav>
    )
}

export default Nav;