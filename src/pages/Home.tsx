import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { User, getUserById, Course, getPersonaCourse } from '../services/apiService';
import PersonalPage from '../common/PersonaRecommendation';

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
    const defPersonas = [
        '5de7a8ad424af359d171b1a5',
        '5de7ab7d33992859d1d8e76a',
        '5de7abd133992859d1d8e76b',
        '5de7ac4033992859d1d8e76c',
    ];
    const [personasData, setPersonasData] = useState<User[]>([]);
    const [personaCourses, setPersonaCourses] = useState<Record<string, Course[]>>({});

    useEffect(() => {
        const personaList = defPersonas.map(id => getUserById(id));
        const personaCourses = defPersonas.map(id => getPersonaCourse(id));
        Promise.all([Promise.all(personaList), Promise.all(personaCourses)]).then(res => {
            const [personas, courses] = res;
            setPersonasData(personas);
            setPersonaCourses(courses.reduce((acc, curr) => ({ ...acc, ...curr }), {}));
        });
    }, [defPersonas]);

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <Grid container direction="column" justify="space-between" alignItems="stretch">
                    {personasData.map(persona => (
                        <PersonalPage
                            key={persona.id}
                            id={persona.id}
                            name={persona.name}
                            courses={personaCourses[persona.id] || []}
                        />
                    ))}
                </Grid>
            </div>
        </MuiThemeProvider>
    );
}
