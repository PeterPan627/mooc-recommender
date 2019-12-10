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
import FirebaseContext from './../firebase/context';
import { Redirect } from 'react-router-dom';

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');
    const [error, setError] = useState({});
    const firebase = useContext(FirebaseContext);
    const [isAuthorized, setIsAuthorized] = useState<boolean>(!!firebase && firebase.isLoggedIn());

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (password !== repass) {
            setError({ msg: 'Retype password correctly' });
            return;
        }
        if (firebase) {
            firebase.registerUser(email, password).then(user => {
                console.log(user);
                setIsAuthorized(!!user);
            });
        }
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
