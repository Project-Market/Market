import React from "react";
import MyMapComponent from "./MyMapComponent";
import MyMapDesktop from "./MyMapDesktop";
import "../styles/MyMapComponent.scss";
import "../styles/MyMapDesktop.scss";
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
      <div>
          <div className='mobile_map'>
      <MyMapComponent
        markerLocations={[
          // { lat: 51.5201611, lng: -0.1094093 },
          // { lat: 51.5258009, lng: -0.1093418 },
          // { lat: 51.50544, lng: -0.0910606 }
        ]}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
        </div>
        <div className='desktop_map'>
          <MyMapDesktop
          markerLocations={[
          { lat: 51.520130, lng: 51.520130},
          { lat: 51.520238, lng: -0.109688},
          { lat:51.520306,  lng: -0.109454},
          { lat: 51.519989, lng: -0.109347 },
          { lat: 51.519810, lng: -0.109283},
          { lat: 51.519536, lng: -0.109176 },
          { lat: 51.519864, lng: -0.109308 },
          { lat: 51.520556, lng: -0.109568 },
          { lat: 51.520643, lng: -0.109607 },
          { lat: 51.519905, lng: -0.109323}
         
          

          
          // { lat: 51.520131, lng: -0.109311  }
         ]}
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
          />
       </div>
      </div> 
      
    );
  }
}

export default Map;
