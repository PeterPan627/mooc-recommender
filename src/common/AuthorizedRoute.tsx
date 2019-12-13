import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../auth';

interface Props {
    exact: boolean;
    path: string;
    component: any;
}

function AuthorizedRoute(props: Props) {
    const {user, loading } = useContext(AuthContext);

    if (!!user && !loading) {
        return <Route {...props} />;
    }
    return <Redirect to={'/login'} />;
}

export default AuthorizedRoute;
