import React, { useState, useContext, FormEvent } from 'react';
import {
    Grid,
    CardContent,
    Button,
    Link,
    Card,
    TextField,
    CardActions,
    Typography,
} from '@material-ui/core';
import { Link as RrdLink, Redirect } from 'react-router-dom';
import { FirebaseContext } from './../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const { firebase } = useContext(FirebaseContext);
    const [user, loading, authErr] = useAuthState(firebase.auth);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (firebase) {
            firebase.loginUser(email, password);
        }
    }
    if (loading) {
        return <div>loading</div>;
    }
    if (!!user) {
        return <Redirect to={'/'} />;
    }

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item md={3} sm={6} xs={12}>
                <Card>
                    <form onSubmit={handleSubmit}>
                        <CardContent>
                            <Typography variant="h5">Sign in</Typography>
                            <Typography variant="subtitle1">Use your Account</Typography>
                            <TextField
                                label="Email"
                                type="email"
                                name="email"
                                fullWidth
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <TextField
                                label="Password"
                                type="password"
                                name="password"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            {error && (
                                <Typography variant="subtitle2" color="error" paragraph>
                                    <b>Wrong credentials</b>
                                </Typography>
                            )}
                            <Typography variant="subtitle2" align="left" paragraph>
                                <Link>
                                    <b>Forgot email?</b>
                                </Link>
                            </Typography>
                            <Typography variant="subtitle2" align="left" paragraph>
                                Not your device? Use Guest mode to sign in privately.
                                <Link>Learn more</Link>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <RrdLink to={'/register'}>
                                <Button variant="text" size="small" color="primary">
                                    Create Account
                                </Button>
                            </RrdLink>
                            <Button type="submit" variant="text" size="small" color="primary">
                                Login
                            </Button>
                        </CardActions>
                    </form>
                </Card>
            </Grid>
        </Grid>
    );
}
