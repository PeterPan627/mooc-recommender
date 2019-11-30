import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";

//import logo from "./logo.svg";
import "./App.css";

export function Login(props: { authorizeUser: any; }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const { authorizeUser } = props;

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        const isAuthorized = authorizeUser(email, password);

        if (!isAuthorized) {
            setError(true);
        }
    }

    return (
        <div className="App">
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item md={3} sm={6} xs={12}>
                    <Card>
                        <form onSubmit={handleSubmit}>
                            <CardContent>
                                {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
                                    Not your device? Use Guest mode to sign in privately.{" "}
                                    <Link>Learn more</Link>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="text" size="small" color="primary">
                                    Create Account
                </Button>
                                <Button
                                    type="submit"
                                    variant="text"
                                    size="small"
                                    color="primary"
                                >
                                    Login
                </Button>
                            </CardActions>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
