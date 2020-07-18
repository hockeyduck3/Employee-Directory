import React from 'react';

import './style.css';

function Footer() {
    return (
        <footer>
            <p className='footerText footerTop'>Made with &hearts; in SLC</p>
            <p className='footerText'>By <a href='https://www.ljspencer.dev/' className='logo' target='_blank' rel='noopener noreferrer'>LJ Spencer</a></p>
            <p className='footerText'>Created using <a href='https://reactjs.org/' className='reactLink' target='_blank' rel='noopener noreferrer'>React</a></p>
        </footer>
    )
}

export default Footer;