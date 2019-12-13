import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Firebase, { FirebaseContext, defValue } from './firebase';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <FirebaseContext.Provider value={defValue}>
        <Router>
            <App />
        </Router>
    </FirebaseContext.Provider>,
    document.getElementById('root'),
);
