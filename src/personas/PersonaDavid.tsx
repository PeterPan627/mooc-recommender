import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { CourseCard } from '../CourseCard';

// imagine about page
export const PersonaDavid: React.FC = () => {
    return (
        <>
            <h2>David</h2>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="stretch"
            >
                <Grid item xs={2}>
                    <CourseCard title='MyTitle' syllabus='MySyllabus' courseId='MyCourse' />
                </Grid>
                <Grid item xs={2}>
                    <CourseCard title='MyTitle2' syllabus='MySyllabus2' courseId='MyCourse2' />
                </Grid>
                <Grid item xs={2}>
                    <CourseCard title='MyTitle3' syllabus='MySyllabus3' courseId='MyCourse3' />
                </Grid>
                <Grid item xs={2}>
                    <CourseCard title='MyTitle4' syllabus='MySyllabus4' courseId='MyCourse4' />
                </Grid>
            </Grid>
        </>
    );
}
