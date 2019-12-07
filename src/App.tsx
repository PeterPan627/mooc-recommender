import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';

import { Login } from './pages/Login';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { User } from './pages/UserPage';
import { CourseDetail } from './pages/CoursePage';
import { Notfound } from './pages/NotFound';
import Nav from './common/Nav';
import SubjectList from './pages/SubjectListPage';
import SubjectPage from './pages/SubjectPage';
import CategoryPage from './pages/CategoryPage';
import { CategoriesRec } from './pages/recommendations/CategoriesRec';
import { GeneralRec } from './pages/recommendations/GeneralRec';
import { OverfittingRec } from './pages/recommendations/OverfittingRec';
import { TaxonomyRec } from './pages/recommendations/TaxonomyRec';

export const admin = 'admin@muni.cz';
export const adminPassword = '123';

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
        flexGrow: 1,
        backgroundColor: '#E8E8E8',
        height: '100%',
        left: 0,
        width: '100%',
        overflow: 'hidden',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    link: {
        textDecoration: 'none',
    },
}));

const pages = [
    {
        to: '/',
        label: 'Home',
    },
    {
        to: '/subjects/',
        label: 'Subjects',
    },
];

const App: React.FC = () => {
    const classes = useStyles();
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const authorizeUser = (username: string, password: string) => {
        const isAuthorized = username === admin && password === adminPassword;

        setIsLoggedIn(isAuthorized);

        return isAuthorized;
    };

    return (
        <MuiThemeProvider theme={ourTheme}>
            <div className={classes.root}>
                <Router>
                    {!isLoggedIn && <Redirect to={'/login/'} />}
                    <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} pages={pages} />
                    <Switch>
                        <Route
                            exact
                            path="/login/"
                            render={() => <Login authorizeUser={authorizeUser} />}
                        />
                        <Route exact path="/about/" component={About} />
                        <Route exact path="/user/" component={User} />
                        <Route exact path="/course/:courseId" component={CourseDetail} />
                        <Route exact path="/generalRecommending/:personId" component={GeneralRec} />
                        <Route
                            exact
                            path="/overfittingRecommending/:personId"
                            component={OverfittingRec}
                        />
                        <Route
                            exact
                            path="/taxonomyRecommending/:personId"
                            component={TaxonomyRec}
                        />
                        <Route
                            exact
                            path="/categoryRecommending/:personId"
                            component={CategoriesRec}
                        />
                        <Route exact path="/subject/:subjectId/:page?" component={SubjectPage} />
                        <Route
                            exact
                            path="/subject/:subjectId/:categoryId/:page?"
                            component={CategoryPage}
                        />
                        <Route exact path="/subjects" component={SubjectList} />
                        <Route exact path="/" component={Home} />
                        <Route component={Notfound} />
                    </Switch>
                </Router>
            </div>
        </MuiThemeProvider>
    );
};

export default App;
