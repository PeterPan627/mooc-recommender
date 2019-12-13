import React, { useContext } from 'react';
import { AppBar, Button, ButtonGroup, Toolbar, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthContext } from '../auth';

interface Props {
    pages: Array<{ label: string; to: string }>;
}

const Nav = ({ pages }: Props) => {
    const { auth, logoutUser } = useContext(AuthContext);
    const history = useHistory();
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <div>loading</div>;
    }

    const logout = () => {
        logoutUser();
    };

    return (
        <AppBar color="primary" position="static">
            <Toolbar>
                {!!user ? (
                    <ButtonGroup
                        color="primary"
                        size="small"
                        aria-label="small contained button group"
                    >
                        {pages.map(button => (
                            <Button
                                key={button.label}
                                color="secondary"
                                component={Link}
                                to={button.to}
                            >
                                <Typography color="secondary" variant="button">
                                    {button.label}
                                </Typography>
                            </Button>
                        ))}
                        <Button color="secondary" onClick={() => logout()}>
                            <Typography color="secondary" variant="button">
                                Logout
                            </Typography>
                        </Button>
                    </ButtonGroup>
                ) : (
                    <ButtonGroup>
                        <Button color="secondary" onClick={() => history.push('/login')}>
                            <Typography color="secondary" variant="button">
                                Login
                            </Typography>
                        </Button>
                    </ButtonGroup>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Nav;
