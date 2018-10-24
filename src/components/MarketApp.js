import React from "react";
import Filter from "./Filter";
import Stalls from "./Stalls";
class MarketApp extends React.Component {
  constructor() {
    super();
    this.state = {
      stalls: []
    };
    this.stallFetch = this.stallFetch.bind(this);
    this.receiveFilteredResults = this.receiveFilteredResults.bind(this);
  }

  componentDidMount() {
    this.stallFetch();
  }

  stallFetch() {
    fetch("/api/market_stall")
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          stalls: data
        });
      });
  }

  receiveFilteredResults(filteredStalls) {
    this.setState({
      data: filteredStalls
    });
  }

  // POST REVIEW should ==
  // {market_stall_id: 1,user_name: "Chris",rating: 5, review: "sublime"}

  render() {
    return (
      <div>
        {/* <Stalls
          stalls={this.state.stalls}
          reviewReceiver={this.submitReviewHandle}
        /> */}
        <Filter
          stalls={this.state.stalls}
          filteredResultsReceiver={this.receiveFilteredResults}
        />
      </div>
    );
  }
}

export default MarketApp;
