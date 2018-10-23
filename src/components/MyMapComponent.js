import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyAMzOxPMWZ48_HxfwIoeLu6O0zpNmK2f6U&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,


    containerElement: <div style={{ height: `150px` }} />,

    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  return (

    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: 51.520131, lng: -0.109311 }}
    >

      {props.markerLocations.map(location => {
        return (
          <Marker
            key={`${location.lat}${location.lng}`}
            position={{ lat: location.lat, lng: location.lng }}
            onClick={props.onMarkerClick}
          />
        );
      })}
    </GoogleMap>
  );
});

export default MyMapComponent;
