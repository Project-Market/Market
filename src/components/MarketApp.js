import React from "react";
import Stalls from "./Stalls";
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

  render() {
    return (
      <div>
        <Stalls
          stalls={this.state.stalls}
          filteredStalls={this.state.filteredStalls}
        />
        
      </div>
    );
  }
}

export default MarketApp;
