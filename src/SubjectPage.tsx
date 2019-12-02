import React, { useState, useEffect, useRef, RefObject } from 'react';
import CoursesList from './CoursesList';
import { useParams } from 'react-router';
import { getSubjectCourses, Course } from './services/apiService';
import { Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
        window.scrollTo(0, ref.current.offsetTop);
    }
};

const useStyles = makeStyles({
    container: {},
    buttons: {
        margin: '20px 0 5% 0',
        display: 'flex',
        justifyContent: 'center',
    },
});

function SubjectPage() {
    const classes = useStyles();
    const { subjectId, page }: { subjectId?: string; page?: string } = useParams();
    const [pageNum, setPageNum] = useState(Number.parseInt(page || '0'));
    const [courses, setCourses] = useState<Course[]>([]);
    const myRef = useRef(null);
    useEffect(() => {
        if (subjectId) {
            getSubjectCourses(subjectId, pageNum).then(setCourses);
        }
    }, [pageNum]);
    return (
        <div>
            <h1 ref={myRef}>{subjectId}</h1>
            <p>some basic info about subject</p>
            <CoursesList courses={courses} />
            <div className={classes.buttons}>
                {pageNum > 0 && (
                    <Button
                        onClick={() => {
                            setPageNum(pageNum - 1);
                            scrollToRef(myRef);
                        }}
                    >
                        <Link to={`/subject/${subjectId}/${pageNum - 1}`}>Previous Page</Link>
                    </Button>
                )}
                <Button
                    onClick={() => {
                        setPageNum(pageNum + 1);
                        scrollToRef(myRef);
                    }}
                >
                    <Link to={`/subject/${subjectId}/${pageNum + 1}`}>Next Page</Link>
                </Button>
            </div>
        </div>
    );
}

export default SubjectPage;
