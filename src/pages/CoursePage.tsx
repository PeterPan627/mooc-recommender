import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import { getCourseById, removeUserEnrollment, enrollUserToCourse } from '../services/apiService';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Grid from '@material-ui/core/Grid';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useParams } from 'react-router';
import { Button } from '@material-ui/core';
import { AuthContext } from '../auth';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
});

export function CourseDetail() {
    const classes = useStyles();

    const { courseId }: { courseId?: string } = useParams();
    const [course, setCourse] = useState();

    const { loading, user, userData, setUserData } = useContext(AuthContext);

    useEffect(() => {
        if (courseId) {
            getCourseById(courseId).then(setCourse);
        } else {
            getCourseById('ancientgreeks-502').then(setCourse);
        }
    }, [courseId]);
    const enroll = () => {
        if (user && courseId) {
            enrollUserToCourse(user.uid, courseId).then(user => {
                if (user) {
                    setUserData(user);
                }
            });
        }
    };
    const removeEnrollment = () => {
        if (user && courseId) {
            removeUserEnrollment(user.uid, courseId).then(user => {
                if (user) {
                    setUserData(user);
                }
            });
        }
    };

    const renderEnrollBtn = () => {
        if (user && courseId && userData) {
            if (userData.enrolledIn.indexOf(courseId) > -1) {
                return <Button onClick={removeEnrollment}>Leave Course</Button>;
            } else {
                return <Button onClick={enroll}>Enroll</Button>;
            }
        }
        return null;
    };

    const rows: Record<string, string> = course
        ? {
              id: course.id,
              name: course.name,
              overview: course.overview,
              provider: course.provider,
              'interested count': course['interested_count'],
              rating: course.rating,
              subject: course.subject,
              link: course.link,
              syllabus: course.syllabus,
              language: course.details.language,
              certificate: course.details.certificate,
          }
        : {};

    return (
        <Paper className={classes.root}>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                    <h2>{rows['name']}</h2>
                    {renderEnrollBtn()}
                </Grid>
            </Grid>
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                    {Object.keys(rows).map(key => (
                        <TableRow key={key}>
                            <TableCell component="th" scope="row">
                                {key}
                            </TableCell>
                            <TableCell>{rows[key]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
