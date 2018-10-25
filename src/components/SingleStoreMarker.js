import React from 'react';
import StoreDetails from './StoreDetails'
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
      isOpen:false,
      showStallDetails: false
    }

    this.onToggleOpen = this.onToggleOpen.bind(this);
    this.showStallDetails = this.showStallDetails.bind(this)
  }

    onToggleOpen(){
      this.setState({
        isOpen: !this.state.isOpen,
      })
    }

    showStallDetails(){
      this.props.showStallDetails(this.props.stall.id)
      this.props.hideEverythingElse()
    }

  render(){

    return (
      <div>
    <Marker
    position={{ lat: Number(this.props.stall.lat), lng: Number(this.props.stall.lang)}}
    onClick={this.onToggleOpen}
    >

    {this.state.isOpen && <InfoWindow
    onCloseClick={this.onToggleOpen}
    options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
    <div onClick={this.showStallDetails} style={{ backgroundColor: `#F5F5F5`, opacity: 0.75, padding: `12px` }}>
      <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
      <h4>{this.props.stall.title}</h4>
      <p>{this.props.stall.category}</p>
      <p>{this.props.stall.stall_website}</p>
      </div>
    </div>
    </InfoWindow>}
    </Marker>
    </div>
  )
  }
}

export default SingleStoreMarker;
