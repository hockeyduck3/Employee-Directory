import React from 'react';

import './style.css';

function Nav(props) {
    return (
        <nav className='navbar navbar-dark'>
            <span className='navbar-brand'>Employee Directory</span>
            
            <form className='input-group' onSubmit={event => {event.preventDefault()}}>
                <input className='form-control searchBar' id='searchBar' type='search' placeholder='Search' aria-label='Search' onChange={props.submitFunc}/>
            </form>

            <div className='dropdown'>

                <button className='btn btn-secondary' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                    <p id='sortBtn'>Sort</p> <i className='fas fa-angle-up' id='arrow'></i>
                </button>

                <div className='dropdown-menu dropdown-menu-right' aria-labelledby='dropdownMenuButton'>
                    <button className='dropdown-item' onClick={props.dropdownFunc}>By Default</button>
                    
                    <div className='dropdown-divider'></div>

                    <button className='dropdown-item' onClick={props.dropdownFunc}>By Name</button>

                    <div className='dropdown-divider'></div>
                    
                    <button className='dropdown-item' onClick={props.dropdownFunc}>By Age</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav;