import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Main from './components/main-content/index';
import Footer from './components/footer/index';

ReactDOM.render([<Main key='1' />, <Footer key='2' />], document.getElementById('root'));