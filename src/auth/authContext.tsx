import React, { useState, useEffect } from 'react';
import { User } from '../services/apiService';
import app, { auth } from 'firebase/app';
import 'firebase/auth';
import { getUserByAuthId } from '../services/apiService';
import config, { USER_DATA_LOCALSTORAGE_LOCATION } from './config';

export const defValue = {
    user: null,
    auth: app.apps.length === 0 ? app.initializeApp(config).auth() : app.auth(),
    logoutUser: () => {},
    loginUser: () => Promise.resolve(false),
    registerUser: () => Promise.resolve(null),
    passwordUpdate: () => {},
    passwordReset: () => {},
};
export const AuthContext = React.createContext<{
    user: User | null;
    auth: auth.Auth;
    loginUser: (email: string, password: string) => Promise<boolean>;
    logoutUser: Function;
    registerUser: (email: string, password: string) => Promise<auth.UserCredential | null>;
    passwordReset: Function;
    passwordUpdate: Function;
}>(defValue);

export const UserContextProvider: React.FunctionComponent = props => {
    if (app.apps.length === 0) {
        app.initializeApp(config);
    }
    const auth = app.auth();
    const [authUser, setAuthUser] = useState(
        JSON.parse(localStorage.getItem(USER_DATA_LOCALSTORAGE_LOCATION) || '{}'),
    );

    const registerUser = (email: string, password: string) =>
        auth.createUserWithEmailAndPassword(email, password);

    const loginUser = async (email: string, password: string) => {
        const user = await auth.signInWithEmailAndPassword(email, password);
        setAuthUser({});
        return !!user.user;
    };

    const logoutUser = () => {
        localStorage.removeItem(USER_DATA_LOCALSTORAGE_LOCATION);
        auth.signOut();
    };

    const passwordReset = (email: string) => auth.sendPasswordResetEmail(email);
    const passwordUpdate = (password: string) => {
        if (auth.currentUser) {
            auth.currentUser.updatePassword(password);
        }
    };

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(
            newUser => {
                if (newUser) {
                    getUserByAuthId(newUser.uid).then(user => {
                        const userData = { auth: newUser, data: user };
                        localStorage.setItem(
                            USER_DATA_LOCALSTORAGE_LOCATION,
                            JSON.stringify(userData),
                        );
                        setAuthUser(userData);
                    });
                }
            },
            () => {
                localStorage.removeItem(USER_DATA_LOCALSTORAGE_LOCATION);
            },
        );
        return unsub;
    },[]);
    return (
        <AuthContext.Provider
            value={{
                auth,
                user: authUser,
                loginUser,
                logoutUser,
                registerUser,
                passwordReset,
                passwordUpdate,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
