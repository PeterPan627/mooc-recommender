import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import cx from 'classnames';
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

export function Course() {
  const classes = useStyles();
  const [courseId, setCourseId] = useState('1styearteachingms-hs-936');
  const [name, setName] = useState();
  const [overview, setOverview] = useState();
  const [provider, setProvider] = useState();
  const [interestedCount , setInterestedCount ] = useState();
  const [rating, setRating] = useState();
  const [subject, setSubject] = useState();
  const [language, setLanguage] = useState();
  const [certificate, setCertificate] = useState();
  const [link, setLink] = useState();
  const [syllabus, setSyllabus] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCourseById(courseId);
      setName(result.name);
      setOverview(result.overview);
      setProvider(result.provider);
      setInterestedCount(result.interested_count);
      setRating(result.rating);
      setSubject(result.subject);
      setLanguage(result.details.language);
      setCertificate(result.details.certificate);
      setLink(result.link);
      setSyllabus(result.syllabus);
    };
    fetchData();
  }, []);

  function createRow(name: string, value: string) {
    return { name, value };
  }

  const rows = [
    createRow('id', courseId),
    createRow('name', name),
    createRow('overview', overview),
    createRow('provider', provider),
    createRow('interested count', interestedCount),
    createRow('rating', rating),
    createRow('subject', subject),
    createRow('language', language),
    createRow('certificate', certificate),
    createRow('link', link),
    createRow('syllabus', syllabus),
  ];

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>  
  )
}
