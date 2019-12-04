import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { CourseCard } from '../CourseCard';

// imagine about page
export const PersonaBob: React.FC = () => {
    return (
        <>
            <h2>Bob - Artist</h2>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="stretch"
            >
                <Grid item xs={2}>
                    <CourseCard title='How to Write Your First Song' description='Get a practical introduction to the mechanics of songwriting and meet established songwriters with this free online course' courseId='songwriting-3369' />
                </Grid>
                <Grid item xs={2}>
                    <CourseCard title='Songwriting: Writing the Lyrics' description='There’s a songwriter lurking somewhere inside you, peeking around corners, wondering if it’s safe to come out. Now it is. This course is an invitation to let your inner songwriter step into the sunlight' courseId='songwriting-lyrics-523' />
                </Grid>
                <Grid item xs={2}>
                    <CourseCard title='Fundamentals of Music Theory' description='This course will introduce students to the theory of music, providing them with the skills needed to read and write Western music notation, as well as to understand, analyse, and listen informedly.' courseId='musictheory-1358' />
                </Grid>
                <Grid item xs={2}>
                    <CourseCard title='Developing Your Musicianship' description='Learn the basic concepts and approaches needed to understand, create, and perform contemporary music.' courseId='musicianship-1726' />
                </Grid>
            </Grid>
        </>
    );
}
