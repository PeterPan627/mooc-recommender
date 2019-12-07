import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { PersonaAlice } from '../personas/PersonaAlice';
import { PersonaBob } from '../personas/PersonaBob';
import { PersonaCharlie } from '../personas/PersonaCharlie';
import { PersonaDavid } from '../personas/PersonaDavid';

const theme = createMuiTheme({
    palette: {
        type: 'light',
    },
});

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#E8E8E8',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    link: {
        textDecoration: 'none',
    },
}));

export function Home() {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
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
        </MuiThemeProvider>
    );
}