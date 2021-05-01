/* eslint-disable react/prop-types */
import React from 'react';
import NavBar from '../components/NavBar'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import dotenv from 'dotenv'
dotenv.config()


const mapStyles = {
  width: '100%',
  height: '100%'
};


export function MapViewComponent(props) {
  // const classes = useStyles();
  console.log(props)
  return (
    <div>
        <NavBar/>

        <Map
            google={props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={
              {
                lat: props.location.state.data.longitude,
                lng: props.location.state.data.latitude
              }
            }> 

            <Marker position = {{ lat: props.location.state.data.longitude, lng: props.location.state.data.latitude }} />            
          </Map>

    </div>
  );
}

export default GoogleApiWrapper({
  // eslint-disable-next-line no-undef
  apiKey: process.env.REACT_APP_GOOGLE_CLOUD_API_KEY
})(MapViewComponent);

