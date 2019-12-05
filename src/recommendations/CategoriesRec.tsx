import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { getRecommendedByCategories, WholeRecommendation, Recommendation, Cause } from '../services/apiService';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Grid, Typography } from '@material-ui/core';
import { useParams } from 'react-router';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
        backgroundColor: '#E8E8E8',
    },
    table: {
        minWidth: 650,
    },
    paper: {
        padding: 20,
    },
    card: {
        minWidth: 275,
    },
}));

// imagine about page
export function CategoriesRec() {
    const classes = useStyles();

    const { personId }: { personId?: string } = useParams();
    const [recommendations, setRecommendations] = useState<Array<WholeRecommendation>>([]);

    useEffect(() => {
        if (personId) {
            getRecommendedByCategories(personId).then(setRecommendations);
        }
    }, []);

    return (
        <>
            <h2>Categories</h2>;
            <Grid container
                spacing={3}
                justify="space-evenly"
                alignItems="stretch"
            >
                {recommendations.map(recs => (
                    <Grid item xs={12} sm={5} >
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6">
                                    {recs['recommended'].course.name}
                                </Typography>
                                <Grid item>
                                    <Typography variant="body1" display="block" gutterBottom>
                                        Overall similarity {(recs['overallSimilarity']).toFixed(1)}
                                    </Typography>
                                </Grid>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href={`/course/` + recs['courseID']}>Learn More</Button>
                                {recs['recommended'].recommendedBecause.map(cause => (
                                    <Button size="small" href={`/course/` + cause.CourseID}>{cause.Popularity.toFixed(1)} popularity</Button>
                                ))}
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}