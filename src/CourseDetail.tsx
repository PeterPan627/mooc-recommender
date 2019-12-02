import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { getCourseById } from './Api';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

    const courseId = '1styearteachingms-hs-936';
    const [course, setCourse] = useState();

    useEffect(() => {
        getCourseById(courseId).then(setCourse);
    }, []);

    function createRow(name: string, value: string) {
        return { name, value };
    }

    const rows = course
        ? [
              createRow('id', courseId),
              createRow('name', course.name),
              createRow('overview', course.overview),
              createRow('provider', course.provider),
              createRow('interested count', course['interested_count']),
              createRow('rating', course.rating),
              createRow('subject', course.subject),
              createRow('link', course.link),
              createRow('syllabus', course.syllabus),
              createRow('language', course.details.language),
              createRow('certificate', course.details.certificate),
          ]
        : [];

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell>{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
