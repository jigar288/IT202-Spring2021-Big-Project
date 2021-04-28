/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
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

function displayError(){
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert variant="filled" severity="error">
        No data available to view. Please go back to search page to find data
      </Alert>
    </div>
  );
}

// ! FIXME: add explicit prop validation
export default function DataListView(props) {
  const classes = useStyles();

  return (
    <div>
        <NavBar/>
        
        <div className={classes.heroContent}>
          <Container maxWidth="sm">

            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              View Data
            </Typography>    

            { isDataPresent(props.location.state) ? displayCards(props.location.state.data) : displayError()  }
                    
          </Container>
        </div>        

    </div>
  );
}