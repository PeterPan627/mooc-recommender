import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { FirebaseContext } from './../firebase';

interface Props {
    exact: boolean;
    path: string;
    component: any;
}

function AuthorizedRoute(props: Props) {
    const firebase = useContext(FirebaseContext);
    if (firebase && firebase.isLoggedIn()) {
        return <Route {...props} />;
    }
    return <Redirect to={'/login'} />;
}

export default AuthorizedRoute;
