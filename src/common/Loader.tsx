import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
    loader: {
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: `translate(-50%, -50%)` 
    },
});
function Loader() {
    const classes = useStyles();
    return (
        <div className={classes.loader}>
            <CircularProgress />
        </div>
    );
}

export default Loader;
