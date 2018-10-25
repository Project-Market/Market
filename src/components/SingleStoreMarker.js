import React from 'react';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";


class SingleStoreMarker extends React.Component{
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
    position={{ lat: Number(this.props.stall.lat), lng: Number(this.props.stall.lang)}}
    onClick={this.onToggleOpen}
    >

    {this.state.isOpen && <InfoWindow
    onCloseClick={this.onToggleOpen}
    options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
    <div style={{ backgroundColor: `#F5F5F5`, opacity: 0.75, padding: `12px` }}>
      <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
      <h4>{this.props.stall.title}</h4>
      <p>{this.props.stall.category}</p>
      <p>{this.props.stall.stall_website}</p>
      </div>
    </div>
    </InfoWindow>}
    </Marker>
  )
  }
}

export default SingleStoreMarker;
