import React from "react";
import MyMapComponent from "./MyMapComponent";

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
      <MyMapComponent
        marketInfo={this.state.marketInfo}
        stalls={this.props.stalls}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

export default Map;
