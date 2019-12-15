import React from 'react';
import { Course } from '../services/apiService';
import { Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        margin: '0 0 0 10%',
        borderBottom: 'black solid 1px',
        width: '66%',
    },
    info: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '30%',
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
            <Grid container direction={'column'}>
                {props.courses.map(course => (
                    <Grid key={course.id} item xs={12} className={classes.container}>
                        <div>
                            <Link to={`/course/${course.id}`}>
                                <h3>{course.name}</h3>
                            </Link>
                            <div className={classes.info}>
                                <div>{Math.floor(course.rating * 100) / 100}</div>
                                <div>{course.provider}</div>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default CoursesList;
