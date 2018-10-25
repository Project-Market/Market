import React from 'react';
import MarketApp from './MarketApp';

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
      isOpen:false,

    }

    this.onToggleOpen = this.onToggleOpen.bind(this);
    this.showMarketDetails = this.showMarketDetails.bind(this);

  }

    onToggleOpen(){
      this.setState({
        isOpen: !this.state.isOpen,
      })
    }

    showMarketDetails(){
      this.props.showMarketDetails()
    }
  render(){

    return (

    <Marker
    position={{ lat: Number(this.props.market.lat), lng: Number(this.props.market.lang)}}
    onClick={this.onToggleOpen}
    >
    {this.state.isOpen && <InfoWindow
    onCloseClick={this.onToggleOpen}

    options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
    <div onClick={this.showMarketDetails} style={{ backgroundColor: `#F5F5F5`, opacity: 0.75, padding: `12px` }}>
      <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
      <h4>{this.props.market.name}</h4>
      <p>{this.props.market.address}</p>
      </div>
    </div>
    </InfoWindow>}
  </Marker>


  )
  }
}

export default SingleMarker;
