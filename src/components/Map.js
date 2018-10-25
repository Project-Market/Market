import React from "react";
import MyMapDesktop from "./MyMapDesktop";
import "../styles/MyMapDesktop.scss";
class Map extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isMarkerShown: false,
      marketStallInfo:[]
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

    fetch("/api/market_stall")
    .then(response=>response.json())
    .then(markets => {
      this.setState({
        marketStallInfo: markets
      })
    })
    .catch(error => {error: error.message})
  }

  componentDidMount(){
    this.fetchMarketInfo()
  }

  render() {

    return (



          <MyMapDesktop
          marketStallInfo={this.state.marketStallInfo}
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
          />



    );
  }
}

export default Map;
