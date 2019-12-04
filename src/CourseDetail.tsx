import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { getCourseById } from './services/apiService';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useParams } from 'react-router';

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

    useEffect(() => {
        if (courseId) {
            getCourseById(courseId).then(setCourse);
        } else {            
            getCourseById('ancientgreeks-502').then(setCourse);
        }
    }, []);

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
              'language': course.details.language,
              certificate: course.details.certificate,
          }
        : {};

    return (
        <Paper className={classes.root}>
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
