import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserContextProvider } from './auth';

ReactDOM.render(
    <UserContextProvider>
        <Router>
            <App />
        </Router>
    </UserContextProvider>,
    document.getElementById('root'),
);
