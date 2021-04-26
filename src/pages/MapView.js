import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));


export default function MapView() {
  const classes = useStyles();
  return (
    <div>
        <NavBar/>
        
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Map View
            </Typography>
          </Container>
        </div>        

    </div>
  );
}
