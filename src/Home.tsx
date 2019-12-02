import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { PersonaAlice } from './personas/PersonaAlice';
import { PersonaBob } from './personas/PersonaBob';
import { PersonaCharlie } from './personas/PersonaCharlie';
import { PersonaDavid } from './personas/PersonaDavid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export function Home() {
    const classes = useStyles();

    return (
        <div>
            <h2>Example Personas</h2>
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
            >
                <Grid item xs={3}>
                    <Paper className={classes.paper}><PersonaAlice/></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}><PersonaBob/></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}><PersonaCharlie/></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}><PersonaDavid/></Paper>
                </Grid>
            </Grid>
        </div>
    );
}