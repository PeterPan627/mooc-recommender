import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { CourseCard } from '../CourseCard';

// imagine about page
export const PersonaCharlie: React.FC = () => {
    return (
        <>
                        <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <h2>Charlie - Manager</h2>
            </Grid>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center">
                <Grid item><Button color="primary" href={"/generalRecommending/"+"5de7abd133992859d1d8e76b"}>General Model</Button></Grid>
                <Grid item><Button color="primary" href={"/overfittingRecommending/"+"5de7abd133992859d1d8e76b"}>Overfitting</Button></Grid>
                <Grid item><Button color="primary" href={"/taxonomyRecommending/"+"5de7abd133992859d1d8e76b"}>Taxonomy</Button></Grid>
                <Grid item><Button color="primary" href={"/categoryRecommending/"+"5de7abd133992859d1d8e76b"}>Categories</Button></Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="stretch"
            >
                <Grid item xs={2}>
                    <CourseCard provider="Coursera" title='Critical Perspectives on Management' description='This course is designed for students of all backgrounds who have an interest in how firms are governed, the forces that have helped define modern management practice, and the outcomes of that practice not only for the firm itself, but also for the societies in which they operate.' courseId='criticalmanagement-714' />
                </Grid>
                <Grid item xs={2}>
                    <CourseCard provider="Coursera" title='Grow to Greatness: Smart Growth for Private Businesses, Part II' description='This course focuses on the common human resource (&quot;people&quot;) challenges faced by existing private businesses when they attempt to grow substantially. PART 1 OF THE GROW TO GREATNESS COURSE IS NOT A PREREQUISITE FOR TAKING THIS COURSE.' courseId='GTG-463' />
                </Grid>
                <Grid item xs={2}>
                    <CourseCard provider="Independent" title='How to Start a Startup' description='CS183B is a class we’re teaching at Stanford. It’s designed to be a sort of one-class business course for people who want to start startups.Videos of the lectures, associated reading materials, and assignments will all be available here. There will be 20 videos, some with a speaker or two and some with a small panel.' courseId='independent-how-to-start-a-startup-2572' />
                </Grid>
                <Grid item xs={2}>
                    <CourseCard provider="Open Education by Blackboard" title='Project Management Basics' description='Ever wonder what Project Management involves? This course will provide you with key concepts and techniques for successfully managing projects from planning to completion.' courseId='open-education-by-blackboard-project-management-basics-794' />
                </Grid>
            </Grid>
        </>
    )
}
