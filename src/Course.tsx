import React, { useState, useEffect } from 'react';
import { getCourseById } from './Api';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

export const Course = () => {
  const [course, setCourse] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const courseId = '1styearteachingms-hs-936'
      const result = await getCourseById(courseId);
      setCourse(result.description);
    };
    fetchData();
  }, []);

  return (
    <>
      <p>{course}</p>
    </>
  )
}
