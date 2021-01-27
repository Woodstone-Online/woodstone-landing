import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as analytics from './services/analyticsService';

analytics.init();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
