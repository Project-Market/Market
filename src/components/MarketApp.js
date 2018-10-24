import React from "react";
import Filter from "./Filter";
import Stalls from "./Stalls";
import Map from "./Map";


import Nav from "./Nav";
class MarketApp extends React.Component {
  constructor() {
    super();
    this.state = {
      stalls: [],
      filteredStalls: []
    };
    this.stallFetch = this.stallFetch.bind(this);
    this.receiveFilteredResults = this.receiveFilteredResults.bind(this);
  }

  componentDidMount() {
    this.stallFetch();
  }

  stallFetch() {
    fetch("/api/market_stall/")
      .then(function(response) {
        return response.json();
      })
      .then(data => {

        this.setState({
          stalls: data,
          filteredStalls: data
        });
      });
  }

  receiveFilteredResults(filteredStalls) {
    console.log(filteredStalls);
    this.setState({
      filteredStalls: filteredStalls
    });
  }
  componentDidMount() {
    this.stallFetch();
  }

  cuisineReciever(filteredStalls) {}

  // POST REVIEW should ==
  // {market_stall_id: 1,user_name: "Chris",rating: 5, review: "sublime"}

  render() {
    return (
      <div>
        <Nav />
        <Map />

        <Filter
          filteredStalls={this.state.filteredStalls}
          stalls={this.state.stalls}
          filteredResultsReceiver={this.receiveFilteredResults}
        />
        <Stalls
          stalls={this.state.stalls}
          filteredStalls={this.state.filteredStalls}
        />
      </div>
    );
  }
}

export default MarketApp;
