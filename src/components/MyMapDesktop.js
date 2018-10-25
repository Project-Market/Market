import React from "react";
import SingleStoreMarker from './SingleStoreMarker';
import "../styles/MyMapDesktop.scss";


import { compose, withProps, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const MyMapDesktop = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyAMzOxPMWZ48_HxfwIoeLu6O0zpNmK2f6U&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,

    containerElement: <div style={{ height: `800px`}} />,

    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  return (
    <GoogleMap
      defaultZoom={19}
      defaultCenter={{ lat: 51.520131, lng: -0.109311 }}
    >
      {props.marketStallInfo.map(stall => {
        return (
          <SingleStoreMarker hideEverythingElse={props.hideEverythingElse} showStallDetails={props.showStallDetails} stall={stall}
          />
        );
      })}
    </GoogleMap>
  );
});

export default MyMapDesktop;
