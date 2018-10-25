import React from "react";
import MyMapComponent from "./MyMapComponent";
import MyMapDesktop from "./MyMapDesktop";
import "../styles/MyMapComponent.scss";
import "../styles/MyMapDesktop.scss";
class Map extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isMarkerShown: false,
      marketInfo:[]
    };

    this.delayedShowMarker = this.delayedShowMarker.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.fetchMarketInfo = this.fetchMarketInfo.bind(this);
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

  fetchMarketInfo(){

    fetch("/api/market")
    .then(response=>response.json())
    .then(markets => {
      this.setState({
        marketInfo: markets
      },()=>console.log(this.state.marketInfo))
    })
    .catch(error => {error: error.message})
  }

  componentDidMount(){
    this.fetchMarketInfo()
  }

  render() {

    return (
      <div>
          <div className='mobile_map'>
      <MyMapComponent
        marketInfo={this.state.marketInfo}
        stalls={this.props.stalls}
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
