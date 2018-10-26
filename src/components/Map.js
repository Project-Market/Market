import React from "react";
import MyMapDesktop from "./MyMapDesktop";
import StoreDetails from "./StoreDetails";
import "../styles/Map.scss";
class Map extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isMarkerShown: false,
      marketStallInfo: [],
      showStallDetails: false,
      storeId: null
    };

    this.delayedShowMarker = this.delayedShowMarker.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.fetchMarketInfo = this.fetchMarketInfo.bind(this);
    this.showStallDetails = this.showStallDetails.bind(this);
    this.clickStallMore = this.clickStallMore.bind(this);
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

  fetchMarketInfo() {
    fetch("/api/market_stall")
      .then(response => response.json())
      .then(markets => {
        this.setState({
          marketStallInfo: markets
        });
      })
      .catch(error => {
        error: error.message;
      });
  }

  showStallDetails(id) {
    this.setState({
      showStallDetails: !this.state.showStallDetails,
      storeId: Number(id)
    });
  }

  componentDidMount() {
    this.fetchMarketInfo();
  }

  clickStallMore() {
    this.setState(
      {
        showStallDetails: !this.state.showStallDetails
      },
      () => this.props.hideEverythingElse()
    );
  }

  render() {
    let content = [];

    if(this.state.showStallDetails){
      content.push(

        <StoreDetails
          key="details"
          clickStallMore={this.clickStallMore}
          stall={this.state.marketStallInfo[this.state.storeId]}
          stall_id={this.state.storeId}
        />

      );
    }

    if(!(window.matchMedia("(max-width:700px)").matches && this.state.showStallDetails )){
      content.push(
        
        <MyMapDesktop
          key="map"
          showStallDetails={this.showStallDetails}
          marketStallInfo={this.state.marketStallInfo}
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
          hideEverythingElse={this.props.hideEverythingElse}
        />
      );
    }

    return (
      <div className='tested'>
        {this.state.marketStallInfo ? (
          <div className={this.props.name}>{content}</div>
        ) : null}
      </div>
    );
  }
}

export default Map;
