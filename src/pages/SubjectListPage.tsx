import React, { useEffect } from 'react';
import { getSubjectCategories, Subject } from '../services/apiService';
import { useState } from 'react';
import { Grid, Card, CardActions, CardContent, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Loader from '../common/Loader';
import GridContainer from '../common/GridContainer';
const useStyles = makeStyles({
    category: {
        fontSize: '1.1em',
        margin: '5px 10px 0 10px',
    },
    subject: {
        // margin: '0px 15px 10px 15px',
    },
    heading: {
        textAlign: 'center',
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
});

function SubjectListPage() {
    const [subjects, setSubjects] = useState<Array<Subject>>([]);
    const [openSubject, setOpenSubject] = useState<string | null>(null);
    const classes = useStyles();

    useEffect(() => {
        getSubjectCategories()
            .then(res => res.sort((a, b) => a['_id'].localeCompare(b['_id'])))
            .then(setSubjects);
    }, []);
    const isLoading = subjects.length === 0;
    return (
        <>
            <h1 className={classes.heading}>Subjects and Categories</h1>
            {isLoading && <Loader />}
            <GridContainer container justify="center" spacing={2}>
                {subjects.map(sub => (
                    <Grid
                        key={sub['_id']}
                        item
                        xs={12}
                        sm={5}
                        md={4}
                        lg={3}
                        className={classes.subject}
                    >
                        <Card>
                            <CardContent>
                                <Link to={`/subject/${sub['_id']}`}>
                                    <h2 className={classes.heading}>
                                        {sub['_id']
                                            .toUpperCase()
                                            .split('-')
                                            .join(' ')}
                                    </h2>
                                </Link>
                                <Grid container>
                                    {sub['unique_categories']
                                        .sort((a, b) => a.localeCompare(b))
                                        .slice(
                                            0,
                                            sub._id === openSubject
                                                ? sub['unique_categories'].length
                                                : 15,
                                        )
                                        .map(cat => (
                                            <Grid key={cat} item className={classes.category}>
                                                <Link to={`/subject/${sub['_id']}/${cat}/0`}>
                                                    {cat}
                                                </Link>
                                            </Grid>
                                        ))}
                                </Grid>
                            </CardContent>
                            <CardActions className={classes.actions}>
                                <Button onClick={e => setOpenSubject(sub._id)}>Show more</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </GridContainer>
        </>
    );
}

export default SubjectListPage;
