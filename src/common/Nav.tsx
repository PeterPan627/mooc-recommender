import React, { useContext } from 'react';
import { AppBar, Button, ButtonGroup, Toolbar, Typography } from '@material-ui/core';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import FirebaseContext from './../firebase/context';

interface Props extends RouteComponentProps {
    pages: Array<{ label: string; to: string }>;
}

const Nav = ({ pages, history }: Props) => {
    const firebase = useContext(FirebaseContext);
    const isLoggedIn = !!firebase && firebase.isLoggedIn();

    return (
        <AppBar color="primary" position="static">
            <Toolbar>
                {isLoggedIn ? (
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
                        <Button color="secondary" onClick={() => firebase && firebase.logoutUser()}>
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

export default withRouter(Nav);
