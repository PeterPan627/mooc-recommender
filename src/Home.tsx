import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { PersonaAlice } from './personas/PersonaAlice';
import { PersonaBob } from './personas/PersonaBob';
import { PersonaCharlie } from './personas/PersonaCharlie';
import { PersonaDavid } from './personas/PersonaDavid';
import { red, grey } from '@material-ui/core/colors';
import { palette } from '@material-ui/system';
import { ListItemSecondaryAction } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 20,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export function Home() {
    const classes = useStyles;

    return (
        <div>
            <h2>Example Personas</h2>
            <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="stretch"
            >
                <Grid>
                    <PersonaAlice />
                </Grid>
                <Grid>
                    <PersonaBob />
                </Grid>
                <Grid>
                    <PersonaCharlie />
                </Grid>
                <Grid>
                    <PersonaDavid />
                </Grid>
            </Grid>
        </div>
    );
}