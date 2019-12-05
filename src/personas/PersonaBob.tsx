import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { CourseCard } from '../CourseCard';

// imagine about page
export const PersonaBob: React.FC = () => {
    return (
        <>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <h2>Bob - Artist</h2>
            </Grid>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <Grid item><Button color="primary" href={"/generalRecommending/"+"5de7ab7d33992859d1d8e76a"}>General Model</Button></Grid>
                <Grid item><Button color="primary" href={"/overfittingRecommending/"+"5de7ab7d33992859d1d8e76a"}>Overfitting</Button></Grid>
                <Grid item><Button color="primary" href={"/taxonomyRecommending/"+"5de7ab7d33992859d1d8e76a"}>Taxonomy</Button></Grid>
                <Grid item><Button color="primary" href={"/categoryRecommending/"+"5de7ab7d33992859d1d8e76a"}>Categories</Button></Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="stretch"
            >
                <Grid item xs={2}>
                    <CourseCard provider='FutureLearn' title='How to Write Your First Song' description='Get a practical introduction to the mechanics of songwriting and meet established songwriters with this free online course' courseId='songwriting-3369' />
                </Grid>
                <Grid item xs={2}>
                    <CourseCard provider='Coursera' title='Songwriting: Writing the Lyrics' description='There’s a songwriter lurking somewhere inside you, peeking around corners, wondering if it’s safe to come out. Now it is. This course is an invitation to let your inner songwriter step into the sunlight' courseId='songwriting-lyrics-523' />
                </Grid>
                <Grid item xs={2}>
                    <CourseCard provider='Coursera' title='Fundamentals of Music Theory' description='This course will introduce students to the theory of music, providing them with the skills needed to read and write Western music notation, as well as to understand, analyse, and listen informedly.' courseId='musictheory-1358' />
                </Grid>
                <Grid item xs={2}>
                    <CourseCard provider='Coursera' title='Developing Your Musicianship' description='Learn the basic concepts and approaches needed to understand, create, and perform contemporary music.' courseId='musicianship-1726' />
                </Grid>
            </Grid>
        </>
    );
}
