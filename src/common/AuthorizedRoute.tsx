import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { FirebaseContext } from './../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

interface Props {
    exact: boolean;
    path: string;
    component: any;
}

function AuthorizedRoute(props: Props) {
    const firebase = useContext(FirebaseContext);
    const [user, loading, error] = useAuthState(firebase.auth);

    if (!!user && !loading) {
        return <Route {...props} />;
    }
    return <Redirect to={'/login'} />;
}

export default AuthorizedRoute;
