import React from 'react';
import { AppBar, Button, ButtonGroup, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const nav = ({
    isLoggedIn,
    setIsLoggedIn,
    pages,
}: {
    isLoggedIn: boolean;
    setIsLoggedIn: Function;
    pages: Array<{ label: string; to: string }>;
}) => (
    <AppBar color="primary" position="static">
        <Toolbar>
            {isLoggedIn && (
                <>
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
                        <Button color="secondary" onClick={() => setIsLoggedIn(false)}>
                            <Typography color="secondary" variant="button">
                                Logout
                            </Typography>
                        </Button>
                    </ButtonGroup>
                </>
            )}
        </Toolbar>
    </AppBar>
);

export default nav;
