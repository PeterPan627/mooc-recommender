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
import { AuthContext } from '../auth';
import { Loader } from '../common';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<Record<string, string> | null>(null);
    const { user, loginUser, loading } = useContext(AuthContext);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (password.length < 6) {
            setError({ msg: 'Password is too short' });
            return;
        }
        loginUser(email, password).catch(err => {
            setError({ msg: err.message });
            console.log(err);
        });
    }
    if (loading) {
        return <Loader />;
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
                                    <b>{error.msg}</b>
                                </Typography>
                            )}
                            {/* <Typography variant="subtitle2" align="left" paragraph>
                                <Link>
                                    <b>Forgot email?</b>
                                </Link>
                            </Typography> */}
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
