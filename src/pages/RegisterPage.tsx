import React, { useState, useContext, FormEvent } from 'react';
import {
    Grid,
    CardContent,
    Button,
    Card,
    Typography,
    TextField,
    CardActions,
} from '@material-ui/core';
import AuthContext from '../auth/authContext';
import { Redirect } from 'react-router-dom';
import { createUser } from './../services/apiService';
import { auth } from 'firebase';

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');
    const [error, setError] = useState({});
    const { user, registerUser, loading } = useContext(AuthContext);

    const isAuthorized = !!user && !loading;
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (password !== repass) {
            setError({ msg: 'Retype password correctly' });
            return;
        }
        registerUser(email, password).then((user: auth.UserCredential | null) => {
            if (user) {
                createUser({ name, user });
            }
        });
    }

    return (
        <>
            {isAuthorized && <Redirect to={'/'} />}
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item md={3} sm={6} xs={12}>
                    <Card>
                        <form onSubmit={handleSubmit}>
                            <CardContent>
                                <Typography variant="h5">Sign up</Typography>
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
                                    label="Name"
                                    type="text"
                                    name="name"
                                    fullWidth
                                    autoComplete="name"
                                    margin="normal"
                                    variant="outlined"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
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
                                <TextField
                                    label="Retype password"
                                    type="password"
                                    name="Repass"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    value={repass}
                                    onChange={e => setRepass(e.target.value)}
                                />

                                {error && (
                                    <Typography variant="subtitle2" color="error" paragraph>
                                        <b>Wrong credentials</b>
                                    </Typography>
                                )}
                            </CardContent>
                            <CardActions>
                                <Button type="submit" variant="text" size="small" color="primary">
                                    Register
                                </Button>
                            </CardActions>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

export default RegisterPage;
