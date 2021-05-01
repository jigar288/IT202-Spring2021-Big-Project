/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SimpleCard from '../components/SimpleCard'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },  
}));

function displayCards(data){
  return (
      data.map( (inspection) => (
        <div>
            <SimpleCard businessName={inspection.aka_name} risk={inspection.risk} 
            results={inspection.results} address={inspection.address} city={inspection.city} 
            state={inspection.state} zip={inspection.zip} location={inspection.location} />
            <br/>
        </div>                                        
      ))                 
  );
}

function isDataPresent(data){
  if(data != undefined){
    return true
  }
  return false
}

function saveData(data){
  sessionStorage.setItem('inspection_id', data[0].inspection_id);
  sessionStorage.setItem('cacheData', JSON.stringify(data) );
}

// ! FIXME: add explicit prop validation
export default function DataListView(props) {
  const classes = useStyles();
  
  const showCachedData = () => {
    const cacheData = JSON.parse(sessionStorage.getItem('cacheData'))
    console.log(cacheData)

    alert('You are about to view cached data. Please search again for new data' )

    return (    
     cacheData.map( (inspection) => (
        <div>
            <SimpleCard businessName={inspection.aka_name} risk={inspection.risk} 
            results={inspection.results} address={inspection.address} city={inspection.city} 
            state={inspection.state} zip={inspection.zip} location={inspection.location} />
            <br/>
        </div>                                        
      ))      
  );
    
  }


  return (
    <div>
        <NavBar/>
        
        <div className={classes.heroContent}>
          <Container maxWidth="sm">

            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              View Data
            </Typography>    

            { isDataPresent(props.location.state) ? displayCards(props.location.state.data) : showCachedData()  }
            { isDataPresent(props.location.state) ? saveData(props.location.state.data) : console.log('no data to cache')  }

                    
          </Container>
        </div>        

    </div>
  );
}