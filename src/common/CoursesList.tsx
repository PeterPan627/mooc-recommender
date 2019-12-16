import React from 'react';
import { Course } from '../services/apiService';
import { Grid, Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import GridContainer from '../common/GridContainer';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    container: {},
    //     margin: '0 0 0 10%',
    //     borderBottom: 'black solid 1px',
    //     width: '66%',
    // },
    info: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    subject: {
        // margin: '0px 15px 10px 15px',
    },
});
interface Props {
    courses: Course[];
    className?: string;
}
function CoursesList(props: Props) {
    const classes = useStyles();

    return (
        <div className={props.className}>
            <GridContainer container justify="center" spacing={2}>
                {props.courses.map(course => (
                    <Grid
                        key={course['id']}
                        item
                        xs={12}
                        sm={5}
                        md={4}
                        lg={3}
                        className={classes.subject}
                    >
                        <Grid key={course.id} item xs={12} className={classes.container}>
                            <Card>
                                <CardContent>
                                    <Link to={`/course/${course.id}`}>
                                        <Typography variant="subtitle2" gutterBottom>
                                            {course.name}
                                        </Typography>
                                    </Link>
                                    <div className={classes.info}>
                                        <div>{Math.floor(course.rating * 100) / 100}</div>
                                        <div>{course.provider}</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                ))}
            </GridContainer>
        </div>
    );
}

export default CoursesList;
