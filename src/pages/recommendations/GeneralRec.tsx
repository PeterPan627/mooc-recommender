import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { getRecommendedByGeneral, WholeRecommendation } from '../../services/apiService';
import { CardContent, Card } from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core';
import { useParams } from 'react-router';
import { GridContainer } from '../../common';

const useStyles = makeStyles(theme => ({
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
export function GeneralRec() {
    const classes = useStyles();

    const { personId }: { personId?: string } = useParams();
    const [recommendations, setRecommendations] = useState<Array<WholeRecommendation>>([]);

    useEffect(() => {
        if (personId) {
            getRecommendedByGeneral(personId).then(setRecommendations);
        }
    }, [personId]);

    return (
        <>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                    <h2>General</h2>
                </Grid>
            </Grid>

            <GridContainer container spacing={3} justify="space-evenly" alignItems="stretch">
                {recommendations != null &&
                    recommendations.map(recs => (
                        <Grid item xs={12} sm={5}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h6">
                                        {recs['recommended'].course.name}
                                    </Typography>
                                    <Grid item>
                                        <Typography variant="body1" display="block" gutterBottom>
                                            Overall similarity{' '}
                                            {recs['overallSimilarity'].toFixed(1)}
                                        </Typography>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
            </GridContainer>
        </>
    );
}
