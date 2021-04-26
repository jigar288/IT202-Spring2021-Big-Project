import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
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


export default function DataSearch() {
  const classes = useStyles();
  return (
    <div>
        <NavBar/>
        
        <div className={classes.heroContent}>
          <Container maxWidth="sm">

            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Search by zip code to view food inspection data
            </Typography>


            <div className={classes.heroButtons}>

             <Grid container spacing={2} justify="center">
                <Grid item>
              
                <TextField
                  id="outlined-number"
                  label="Enter Zipcode"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />   

                <br/><br/>

                </Grid>
              </Grid>


              <Grid container spacing={2} justify="center">
                <Grid item>

                  {/* TODO: move to separate function */}
                  <Route render={({history}) => (                      
                    <Button variant="contained" color="primary" endIcon={<Search />} onClick={ async () => {
                      
                      let zipcode = document.getElementById('outlined-number').value;
                      zipcode = parseInt(zipcode);

                      const response = await axios.get(`https://data.cityofchicago.org/resource/4ijn-s7e5.json?zip=${zipcode}`);
                      console.log(response)

                      history.push({
                        pathname: '/view-data',
                        state: { data: response.data }
                      })

                    }} >
                      Search
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
