import React from 'react';

import './style.css';

function Nav(props) {
    return (
        <nav className='navbar navbar-dark'>
            <span className='navbar-brand'>Employee Directory</span>
            
            <form className='input-group' onSubmit={event => {event.preventDefault()}}>
                <input className='form-control searchBar' type='search' placeholder='Search' aria-label='Search' onChange={props.submitFunc}/>
            </form>

            <div className='dropdown'>
                <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                    Sort
                </button>
                <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                    <button className='dropdown-item' onClick={props.dropdownFunc}>By Default</button>
                    <button className='dropdown-item' onClick={props.dropdownFunc}>By Name</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav;