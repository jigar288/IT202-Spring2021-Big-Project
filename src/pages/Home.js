import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Route } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));


export default function Home() {
  const classes = useStyles();
  return (
    <div>
        <NavBar/>
        
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Eat Clean, Fresh, Well Prepared Food
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Search and view food inspection data from Chicago. This app provides you data
              to keep you safe. According to the CDC, there are many people 
              that get sick from food poisoning leading to hospitalization or possibly death. 
            </Typography>
            
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Route render={({history}) => (                      
                    <Button variant="contained" color="primary" onClick={() => { history.push('/search') }} >
                      Start Exploring
                    </Button>
                  )} />
                </Grid>
              </Grid>
            </div>   

          </Container>
        </div>        

    </div>
  );
}
