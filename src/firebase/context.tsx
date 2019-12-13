import React from 'react';
import Firebase from './firebase';
import { User } from '../services/apiService';

export const defValue = {
    firebase: new Firebase(),
    user: null,
    setUser: () => {},
};
export const FirebaseContext = React.createContext<{
    user: User | null;
    firebase: Firebase;
    setUser: Function;
}>(defValue);
export default FirebaseContext;
