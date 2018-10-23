import React from "react"
import MyMapComponent from './MyMapComponent';


class Map extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      isMarkerShown: false,
    }

    this.delayedShowMarker = this.delayedShowMarker.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);

  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker(){
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick(){
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        markerLocations={[{ lat: -34.397, lng: 150.644 }, { lat: -35.397, lng: 155.644 }]}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default Map;
