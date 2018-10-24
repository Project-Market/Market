import React from 'react';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";


class SingleMarker extends React.Component{
  constructor(){
    super();
    this.state={
      isOpen:false
    }

    this.onToggleOpen = this.onToggleOpen.bind(this);
  }

    onToggleOpen(){
      this.setState({
        isOpen: !this.state.isOpen,
      })
    }

  render(){
    return (
    <Marker
    position={{ lat: this.props.location.lat, lng: this.props.location.lng}}
    onClick={this.onToggleOpen}
    >
    {this.state.isOpen && <InfoWindow
    onCloseClick={this.onToggleOpen}
    options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
    <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
      <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
        Hello, Kaohsiung!
      </div>
    </div>
    </InfoWindow>}
    </Marker>
  )
  }
}

export default SingleMarker;
