import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import { Route } from 'react-router-dom'
import dotenv from 'dotenv'
dotenv.config()

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    }
  }
}));


export default function DataSearch() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);

  const fetchDataAndRedirect = async (history, isManualSearch, zipCodeByLocation) => {
    let zipcode;

    if(isManualSearch){
      zipcode = document.getElementById('outlined-number').value;
      zipcode = parseInt(zipcode);
    }else{
      zipcode = zipCodeByLocation
    }

  
    const response = await axios.get(`https://data.cityofchicago.org/resource/4ijn-s7e5.json?zip=${zipcode}`);
  
    history.push({
      pathname: '/view-data',
      state: { data: response.data }
    })
  }

  const parseZipCode = (data) => {
    let zipcode = -1;  

    data.results.forEach( (locationInfo) => {      
      locationInfo.address_components.forEach( (component) => {
          if(component.types.includes('postal_code') ){
            console.log(`zip code is ${component.short_name}`)
            zipcode = component.short_name
            return parseInt(zipcode);
          }
      }) 
    })

    return parseInt(zipcode);
  }

  const showCurrentPosition = async (position, history) => {
  
    // eslint-disable-next-line no-undef
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${process.env.REACT_APP_GOOGLE_GEOCODING_API_KEY}`);
    setLoading(false);
    const zipCode = await parseZipCode(response.data)
    fetchDataAndRedirect(history, false, zipCode)
    console.log(`zip  ${typeof zipCode}`)
  }

  
  const getLocation = async (history) => {
    if(navigator.geolocation){
      setLoading(true);
      navigator.geolocation.getCurrentPosition( (position) => {
        showCurrentPosition(position, history)
      })
    }else{
      alert('No location data found. Please allow permission to view your current location')
    }
  }

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
                  placeholder="i.e. 60607"
                />   

                <br/><br/>

                </Grid>
              </Grid>


              <Grid container spacing={2} justify="center">
                <Grid item>
                  
                  <Route render={({history}) => (                      
                    <Button variant="contained" color="primary" endIcon={<Search />} onClick={ async () => fetchDataAndRedirect(history, true, null) } >
                      Search
                    </Button>
                  )} />
                </Grid>

              </Grid>


              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Route render={({history}) => (                      
                      <Button variant="contained" color="primary" endIcon={<LocationOnIcon />} onClick={ () => getLocation(history) } >
                        Search by current location
                      </Button>
                  )} />
                </Grid>                    
              </Grid>   

              <Grid container spacing={2} justify="center">
                <Grid item>
                    <div className={classes.root}>
                      { loading && <CircularProgress /> }
                    </div> 
                </Grid>                  
              </Grid>                 
              
                        


            </div>     

          </Container>
        </div>        

    </div>
  );
}
