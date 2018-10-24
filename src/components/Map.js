import React from "react";
import MyMapComponent from "./MyMapComponent";

class Map extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isMarkerShown: false
    };

    this.delayedShowMarker = this.delayedShowMarker.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker() {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  }

  handleMarkerClick() {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  }

  render() {

    return (
      <MyMapComponent
        markerLocations={[
          { lat: 51.5201611, lng: -0.1094093 },
          { lat: 51.5258009, lng: -0.1093418 },
          { lat: 51.50544, lng: -0.0910606 }
        ]}
        
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

export default Map;
