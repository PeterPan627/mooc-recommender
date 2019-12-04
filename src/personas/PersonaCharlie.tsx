import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { CourseCard } from '../CourseCard';

// imagine about page
export const PersonaCharlie: React.FC = () => {
    return (
        <>
            <h2>Charlie</h2>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="stretch"
            >
                <Grid item xs={2}>
                    <CourseCard title='Critical Perspectives on Management' description='This course is designed for students of all backgrounds who have an interest in how firms are governed, the forces that have helped define modern management practice, and the outcomes of that practice not only for the firm itself, but also for the societies in which they operate.' courseId='criticalmanagement-714' />
                </Grid>
                <Grid item xs={2}>
                    <CourseCard title='Grow to Greatness: Smart Growth for Private Businesses, Part II' description='This course focuses on the common human resource (&quot;people&quot;) challenges faced by existing private businesses when they attempt to grow substantially. PART 1 OF THE GROW TO GREATNESS COURSE IS NOT A PREREQUISITE FOR TAKING THIS COURSE.' courseId='GTG-463' />
                </Grid>
                <Grid item xs={2}>
                    <CourseCard title='How to Start a Startup' description='CS183B is a class we’re teaching at Stanford. It’s designed to be a sort of one-class business course for people who want to start startups.Videos of the lectures, associated reading materials, and assignments will all be available here. There will be 20 videos, some with a speaker or two and some with a small panel.' courseId='independent-how-to-start-a-startup-2572' />
                </Grid>
                <Grid item xs={2}>
                    <CourseCard title='Project Management Basics' description='Ever wonder what Project Management involves? This course will provide you with key concepts and techniques for successfully managing projects from planning to completion.' courseId='open-education-by-blackboard-project-management-basics-794' />
                </Grid>
            </Grid>
        </>
    )
}
