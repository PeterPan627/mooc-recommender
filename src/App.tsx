import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';

import { Login } from './pages/Login';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { User } from './pages/UserPage';
import { CourseDetail } from './pages/CoursePage';
import { Notfound } from './pages/NotFound';
import Nav from './common/Nav';
import SubjectListPage from './pages/SubjectListPage';
import SubjectPage from './pages/SubjectPage';
import CategoryPage from './pages/CategoryPage';
import { CategoriesRec } from './pages/recommendations/CategoriesRec';
import { GeneralRec } from './pages/recommendations/GeneralRec';
import { OverfittingRec } from './pages/recommendations/OverfittingRec';
import { TaxonomyRec } from './pages/recommendations/TaxonomyRec';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterPage from './pages/RegisterPage';
import AuthorizedRoute from './common/AuthorizedRoute';

const ourTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#fffff7',
            main: '#fff9c4',
            dark: '#cbc693',
            contrastText: '#000',
        },
    },
});

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#E8E8E8',
        height: '100%',
        minHeight: '100vh',
        left: 0,
        width: '100%',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    link: {
        textDecoration: 'none',
    },
    toastContainer: {
        position: 'fixed',
        top: '10vh',
        right: '5%',
        color: 'black',
        fontSize: '20px',
    },
}));

const pages = [
    {
        to: '/',
        label: 'Home',
    },
    {
        to: '/subjects',
        label: 'Subjects',
    },
    {
        to: '/user/',
        label: 'Profile',
    },
];

const App: React.FC = () => {
    const classes = useStyles();
    return (
        <MuiThemeProvider theme={ourTheme}>
            <div className={classes.root}>
                <Nav pages={pages} />
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={RegisterPage} />
                    <Route exact path="/about" component={About} />
                    <AuthorizedRoute path="/user/:userId?" component={User} />
                    <Route exact path="/course/:courseId" component={CourseDetail} />
                    <AuthorizedRoute
                        exact
                        path="/generalRecommending/:personId"
                        component={GeneralRec}
                    />
                    <AuthorizedRoute
                        exact
                        path="/overfittingRecommending/:personId"
                        component={OverfittingRec}
                    />
                    <AuthorizedRoute
                        exact
                        path="/taxonomyRecommending/:personId"
                        component={TaxonomyRec}
                    />
                    <AuthorizedRoute
                        exact
                        path="/categoryRecommending/:personId"
                        component={CategoriesRec}
                    />
                    <AuthorizedRoute
                        exact
                        path="/subject/:subjectId/:page?"
                        component={SubjectPage}
                    />
                    <AuthorizedRoute
                        exact
                        path="/subject/:subjectId/:categoryId/:page?"
                        component={CategoryPage}
                    />
                    <Route exact path="/subjects" component={SubjectListPage} />
                    <AuthorizedRoute exact path="/" component={Home} />
                    <Route component={Notfound} />
                </Switch>
                <ToastContainer className={classes.toastContainer} />
            </div>
        </MuiThemeProvider>
    );
};

export default App;
