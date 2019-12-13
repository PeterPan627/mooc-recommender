import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../auth';
import { useAuthState } from 'react-firebase-hooks/auth';

interface Props {
    exact: boolean;
    path: string;
    component: any;
}

function AuthorizedRoute(props: Props) {
    const { auth } = useContext(AuthContext);
    const [user, loading, error] = useAuthState(auth);

    if (!!user && !loading) {
        return <Route {...props} />;
    }
    return <Redirect to={'/login'} />;
}

export default AuthorizedRoute;
