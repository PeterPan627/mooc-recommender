import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

type CardProps = {
    title: string;
    description: string;
    courseId: string;
    provider: string;
};

const CourseCard = ({ title, description, courseId, provider }: CardProps) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {provider}
                </Typography>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" component="p">
                    {description.length > 100 ? description.substring(0, 100) + '...' : description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={`/course/` + courseId}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};
export default CourseCard;
