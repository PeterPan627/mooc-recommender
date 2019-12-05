import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { CourseCard } from '../CourseCard';

// imagine about page
export const PersonaAlice: React.FC = () => {
    return (
        <>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <h2>Alice - Philosopher</h2>
            </Grid>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <Grid item><Button color="primary" href={"/generalRecommending/"+"5de7a8ad424af359d171b1a5"}>General Model</Button></Grid>
                <Grid item><Button color="primary" href={"/overfittingRecommending/"+"5de7a8ad424af359d171b1a5"}>Overfitting</Button></Grid>
                <Grid item><Button color="primary" href={"/taxonomyRecommending/"+"5de7a8ad424af359d171b1a5"}>Taxonomy</Button></Grid>
                <Grid item><Button color="primary" href={"/categoryRecommending/"+"5de7a8ad424af359d171b1a5"}>Categories</Button></Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="stretch"
            >
                <Grid item xs={2}>
                    <CourseCard provider='Coursera' title='The Ancient Greeks' description='This is a survey of ancient Greek history from the Bronze Age to the death of Socrates in 399 BCE. Along with studying the most important events and personalities, we will consider broader issues such as political and cultural values and methods of historical interpretation.' courseId='ancientgreeks-502' />
                </Grid>
                <Grid item xs={2}>
                    <CourseCard provider='Coursera' title='A Life of Happiness and Fulfillment' description='This course draws content from a variety of fields, including psychology, neuroscience, and behavioral decision theory to offer a tested and practical recipe for leading a life of happiness and fulfillment.' courseId='happiness-2860' />
                </Grid>
                <Grid item xs={2}>
                    <CourseCard provider='edX' title='Shakespeare Matters' description='Learn about Shakespeare’s plays and their influence through a focus on emotions such as love, hate, and jealousy.' courseId='edx-shakespeare-matters-8731' />
                </Grid>
                <Grid item xs={2}>
                    <CourseCard provider='FutureLearn' title='Religion and Conflict' description='Understand and analyse the role of religion in conflicts and peacebuilding in present-day societies, with this free online course.' courseId='religion-and-conflict-3294' />
                </Grid>
            </Grid>
        </>
    );
}
