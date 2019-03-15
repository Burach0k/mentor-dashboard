import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

fetch('./data.json')
    .then((res) => res.json())
    .then((dashboard) => {
        ReactDOM.render(<App dashboard={dashboard} />, document.getElementById('root'));
    });
