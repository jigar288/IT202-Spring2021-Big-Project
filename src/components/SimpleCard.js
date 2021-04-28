/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Route } from 'react-router-dom'


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function handleViewMap(locationDetails, history){                    
    console.log(JSON.stringify(locationDetails))
    history.push({
      pathname: '/map-view',
      state: { data: locationDetails }
    })
}

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.risk}
        </Typography>
        <Typography variant="h5" component="h2">
          Business Name: {props.businessName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Test Results: {props.results}
        </Typography>
        <Typography variant="body2" component="p">
          Full Address: {props.address} {props.city} {props.state} {props.zip}
        </Typography>
      </CardContent>
      <CardActions>
        <Route render={({history}) => (   
          <Button size="small" variant="contained" color="primary" onClick={ () => { handleViewMap(props.location, history) }} >View in map</Button>
        )} />
      </CardActions>
    </Card>
  );
}