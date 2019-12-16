import React, { RefObject, useState, useRef, useEffect } from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core';
import { useParams } from 'react-router';
import { Course, getCourses } from '../services/apiService';
import CoursesList from '../common/CoursesList';
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
function CategoryPage() {
    const classes = useStyles();
    const { subjectId, page, categoryId }: Params = useParams();
    // const categoryName = categoryId && categoryId.replace('-', ' ');
    const [pageNum, setPageNum] = useState(Number.parseInt(page || '0'));
    const [courses, setCourses] = useState<Course[]>([]);
    const myRef = useRef(null);
    useEffect(() => {
        if (subjectId) {
            getCourses(subjectId, pageNum, categoryId).then(setCourses);
        }
    }, [pageNum, subjectId, categoryId]);
    return (
        <Grid container>
            <Grid container direction="column" justify="center" alignItems="center">
                <h2 ref={myRef}>{subjectId}/{categoryId}</h2>
                <p>some basic info about subject</p>
            </Grid>
            
            <CoursesList courses={courses} />
            <div className={classes.buttons}>
                {pageNum > 0 && (
                    <Button
                        onClick={() => {
                            setPageNum(pageNum - 1);
                            scrollToRef(myRef);
                        }}
                    >
                        <Link to={`/subject/${subjectId}/${categoryId}/${pageNum - 1}`}>
                            Previous Page
                        </Link>
                    </Button>
                )}
                {courses.length === 20 && (
                    <Button
                        onClick={() => {
                            setPageNum(pageNum + 1);
                            scrollToRef(myRef);
                        }}
                    >
                        <Link to={`/subject/${subjectId}/${categoryId}/${pageNum + 1}`}>
                            Next Page
                        </Link>
                    </Button>
                )}
            </div>
        </Grid>
    );
}
interface Params {
    subjectId?: string;
    page?: string;
    categoryId?: string;
}

export default CategoryPage;
