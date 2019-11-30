import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';
import { AppBar, Button, ButtonGroup, Toolbar, Typography } from '@material-ui/core';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';

import { Login } from './Login';
import { About } from './About';
import { Home } from './Home';
import { User } from './User';
import { Course } from './Course';
import { Notfound } from './NotFound';

export const admin = 'admin@muni.cz';
export const adminPassword = '123';

const ourTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#829298'
    },
    secondary: {
      main: '#82d4bb'
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: 'none'
  }
}));

const App: React.FC = () => {
  const classes = useStyles;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authorizeUser = (username: string, password: string) => {
    const isAuthorized = username === admin && password === adminPassword;

    setIsLoggedIn(isAuthorized);

    return isAuthorized;
  };

  return (
    <MuiThemeProvider theme={ourTheme}>
      <Router>
        <AppBar color='primary' position='static'>
          {/* navigation will be rendered on all pages */}
          <Toolbar>
            {/* TODO render links to other pages ONLY when user is logged in */}
            {/* Hints: use Link component from react-router-dom + Button from MUI */}
            {isLoggedIn &&
              <>
                <ButtonGroup
                  color='primary'
                  size='small'
                  aria-label='small contained button group'
                >
                  {[
                    {
                      to: '/',
                      label: 'Home'
                    },
                    {
                      to: '/about/',
                      label: 'About'
                    },
                    {
                      to: '/user/',
                      label: 'User'
                    },
                    {
                      to: '/course/',
                      label: 'Course'
                    }
                  ].map(button => (
                    <Button
                      key={button.label}
                      color='secondary'
                      component={Link}
                      to={button.to}
                    >
                      <Typography color='secondary' variant='button'>
                        {button.label}
                      </Typography>
                    </Button>
                  ))}
                  <Button
                    color='secondary'
                    onClick={() => setIsLoggedIn(false)}
                  >
                    <Typography color='secondary' variant="button">
                      Logout
                    </Typography>
                  </Button>
                </ButtonGroup>

              </>
            }
          </Toolbar>
        </AppBar>

        <Redirect to={isLoggedIn ? '/' : '/login/'} />
        {/* <Redirect to={false ? "/" : "/login/"} /> */}

        <Switch>
          {/** 
						TODO: add routes to Home, Login, About, User components, do not forget for NotFound also
						Hint: you need to pass "authorizeUser" prop to Login component, so instead of
						
						<Route component={...} /> use <Route render={...} />
          */}
          <Route exact path='/' component={Home} />
          <Route
            path='/login/'
            render={() => <Login authorizeUser={authorizeUser} />}
          />
          <Route path='/about/' component={About} />
          <Route path='/user/' component={User} />
          <Route path='/course/' component={Course} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
