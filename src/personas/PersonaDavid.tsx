import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { CourseCard } from '../common/CourseCard';

// imagine about page
export const PersonaDavid: React.FC = () => {
    return (
        <>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <h2>David - Engineer</h2>
            </Grid>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <Grid item><Button color="primary" href={"/generalRecommending/"+"5de7ac4033992859d1d8e76c"}>General Model</Button></Grid>
                <Grid item><Button color="primary" href={"/overfittingRecommending/"+"5de7ac4033992859d1d8e76c"}>Overfitting</Button></Grid>
                <Grid item><Button color="primary" href={"/taxonomyRecommending/"+"5de7ac4033992859d1d8e76c"}>Taxonomy</Button></Grid>
                <Grid item><Button color="primary" href={"/categoryRecommending/"+"5de7ac4033992859d1d8e76c"}>Categories</Button></Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="stretch"
            >
                <Grid item xs={2}>
                    <CourseCard provider="FutureLearn" title='Technical Report Writing for Engineers' description='Learn to communicate effectively through technical report writingTechnical reports are a vital tool for engineers to communicate their ideas. This online course introduces technical report writing and teaches the techniques you need to construct well-written engineering reports.' courseId='technical-report-writing-for-engineers-9087' />
                </Grid>
                <Grid item xs={2}>
                    <CourseCard provider="Coursera" title='Introduction to Engineering Mechanics' description='This course is an introduction to learning and applying the principles required to solve engineering mechanics problems. Concepts will be applied in this course from previous courses you have taken in basic math and physics. The course addresses the modeling and analysis of static equilibrium problems with an emphasis on real world engineering applications and problem solving.' courseId='statics1-564' />
                </Grid>
                <Grid item xs={2}>
                    <CourseCard provider="Coursera" title='Applications in Engineering Mechanics' description='This course applies principles learned in my course “Introduction to Engineering Mechanics” to analyze real world engineering structures. You will need to have mastered the engineering fundamentals from that class in order to be successful in this course offering. This course addresses the modeling and analysis of static equilibrium problems with an emphasis on real world engineering systems and problem solving.' courseId='statics2-1148' />
                </Grid>
                <Grid item xs={2}>
                    <CourseCard provider="Udacity" title='Artificial Intelligence for Robotics' description='Learn how to program all the major systems of a robotic car from the leader of Google and Stanfords autonomous driving teams. This class will teach you basic methods in Artificial Intelligence, including: probabilistic inference, planning and search, localization, tracking and control, all with a focus on robotics. Extensive programming examples and assignments will apply these methods in the context of building self-driving cars.This course is offered as part of the Georgia Tech Masters in Computer Science.' courseId='udacity-artificial-intelligence-for-robotics-319' />
                </Grid>
            </Grid>
        </>
    );
}
