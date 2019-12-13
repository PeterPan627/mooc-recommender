import React, { useState, useEffect } from 'react';
import { User } from '../services/apiService';
import app, { auth } from 'firebase/app';
import 'firebase/auth';
import { getUserByAuthId } from '../services/apiService';
import config, { USER_LOCALSTORAGE_LOCATION, USER_DATA_LOCALSTORAGE_LOCATION } from './config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

export const defValue = {
    userData: null,
    user: null,
    loading: false,
    error: undefined,
    auth: app.apps.length === 0 ? app.initializeApp(config).auth() : app.auth(),
    setUserData: () => {},
    logoutUser: () => {},
    loginUser: () => Promise.resolve(false),
    registerUser: () => Promise.resolve(null),
    passwordUpdate: () => {},
    passwordReset: () => {},
};
export const AuthContext = React.createContext<{
    userData: User | null;
    user: app.User | null;
    loading: boolean;
    error: auth.Error | undefined;
    auth: auth.Auth;
    loginUser: (email: string, password: string) => Promise<boolean>;
    logoutUser: Function;
    registerUser: (email: string, password: string) => Promise<auth.UserCredential | null>;
    passwordReset: Function;
    passwordUpdate: Function;
    setUserData: (user: User) => void;
}>(defValue);

export const UserContextProvider: React.FunctionComponent = props => {
    if (app.apps.length === 0) {
        app.initializeApp(config);
    }
    const auth = app.auth();
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_LOCATION) || 'null'),
    );
    const [userData, setUserData] = useState(
        JSON.parse(localStorage.getItem(USER_DATA_LOCALSTORAGE_LOCATION) || 'null'),
    );

    const [_, loading, error] = useAuthState(auth);

    const registerUser = (email: string, password: string) =>
        auth.createUserWithEmailAndPassword(email, password);

    const loginUser = async (email: string, password: string) => {
        const user = await auth.signInWithEmailAndPassword(email, password);
        if (user.user) {
            const userData = await getUserByAuthId(user.user.uid);
            setUserData(userData);
            setUser(user);
            toast.success('You have been successfully logged.');
        }
        return !!user.user;
    };

    const logoutUser = () => {
        localStorage.removeItem(USER_LOCALSTORAGE_LOCATION);
        localStorage.removeItem(USER_DATA_LOCALSTORAGE_LOCATION);
        setUser(null);
        setUserData(null);
        auth.signOut();
        toast.info('You have been successfully logged out.');
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
                        setUserData(user);
                        setUser(newUser);
                        localStorage.setItem(USER_DATA_LOCALSTORAGE_LOCATION, JSON.stringify(user));
                        localStorage.setItem(USER_LOCALSTORAGE_LOCATION, JSON.stringify(newUser));
                    });
                }
            },
            () => {
                localStorage.removeItem(USER_LOCALSTORAGE_LOCATION);
                localStorage.removeItem(USER_DATA_LOCALSTORAGE_LOCATION);
            },
        );
        return unsub;
    }, []);
    return (
        <AuthContext.Provider
            value={{
                auth,
                user,
                userData,
                loginUser,
                logoutUser,
                registerUser,
                passwordReset,
                passwordUpdate,
                loading,
                error,
                setUserData,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
