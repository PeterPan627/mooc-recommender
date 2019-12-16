import React, { useState, useEffect, useContext } from 'react';
import { Card, CardActions, CardContent, Button, Typography, makeStyles } from '@material-ui/core';
import { Review, getCourseReviews, deleteReview } from '../services/apiService';
import { Rating } from '@material-ui/lab';
import { AuthContext } from '../auth';
const useStyles = makeStyles({
    card: {
        minWidth: 300,
        background: 'whitesmoke',
    },
    listContainer: {
        display: 'flex',
        justifyContent:'center',
    },
});
interface Props {
    handleDelete: Function;
    reviews: Review[];
}
function ReviewList(props: Props) {
    const classes = useStyles();
    const { user, userData } = useContext(AuthContext);

    return (
        <div className={classes.listContainer}>
            {props.reviews.map((rev: Review) => (
                <Card key={rev.id} className={classes.card}>
                    <CardContent>
                        <Typography color="primary" gutterBottom>
                            {rev.user.name}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            {rev.text}
                        </Typography>
                        <Rating name="rating" value={rev.rating} readOnly />
                    </CardContent>
                    {user && rev.user.authId === user.uid && (
                        <CardActions>
                            <Button onClick={e => props.handleDelete(rev.id)}>Delete</Button>
                        </CardActions>
                    )}
                </Card>
            ))}
        </div>
    );
}

export default ReviewList;
