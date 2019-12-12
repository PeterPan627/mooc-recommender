import React from 'react';
import Firebase from './firebase';
const FirebaseContext = React.createContext<Firebase>(new Firebase());
export default FirebaseContext;
