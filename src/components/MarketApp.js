import React from "react";
// import Stores from "./Stores";
class MarketApp extends React.Component {
  constructor() {
    super();
    this.state = {
      stalls: [],
      filterCard: false,
      filterCuisine: false,
      filterTopRated: false
    };
  }

  stallFetch() {
    fetch("/api/market_stall")
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.setState({
          stalls: data
        });
      });
  }

  // {market_stall_id: 1,user_name: "Chris",rating: 5, review: "sublime"}

  reviewReciever(review) {}

  render() {
    return;
    <Stores stalls={this.state.stalls} reviewReciever="reciever" />;
  }
}
