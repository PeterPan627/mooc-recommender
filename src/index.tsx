import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Firebase, { FirebaseContext } from './firebase';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <Router>
            <App />
        </Router>
    </FirebaseContext.Provider>,
    document.getElementById('root'),
);
