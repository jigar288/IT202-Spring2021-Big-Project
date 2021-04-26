import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { Route } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

function renderNavLink(buttonLabel, pathname){
  return(
    <Route render={({history}) => (                      
      <Button color="inherit" onClick={() => { history.push(pathname) }}>{buttonLabel}</Button>
    )} />  
  );
}

export default function NavBar() {
  
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar position="relative">
        <Toolbar>
          <LocalHospitalIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" className={classes.title}>
            Healthy Chicago
          </Typography>

          { renderNavLink('Home', '/') }
          { renderNavLink('Search', '/search') }
          { renderNavLink('Data View', '/view-data') }
          { renderNavLink('Map View', '/map-view') }

        </Toolbar>
      </AppBar>      
    </React.Fragment>
  );
}