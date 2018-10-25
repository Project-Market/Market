import React from "react";
import Filter from "./Filter";
import Stalls from "./Stalls";
class MarketApp extends React.Component {
  constructor() {
    super();
    this.state = {
      stalls: [],
      filteredStalls: [],
      ratingFilter: false
    };
    this.stallFetch = this.stallFetch.bind(this);
    this.receiveFilteredResults = this.receiveFilteredResults.bind(this);
    this.receiveRatingFilter = this.receiveRatingFilter.bind(this);
    this.ratingFilterHandle = this.ratingFilterHandle.bind(this);
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

  ratingFilterHandle(array) {
    console.log(this.state.ratingFilter);
    let newArray = [...array];
    if (this.state.ratingFilter == true) {
      newArray.sort(function(a, b) {
        return b.average_rating - a.average_rating;
      });
      this.receiveFilteredResults(newArray);
    } else {
      newArray.sort(function(a, b) {
        return a.id - b.id;
      });
      this.receiveFilteredResults(newArray);
    }
  }

  receiveRatingFilter() {
    this.setState(
      {
        ratingFilter: !this.state.ratingFilter
      },
      () => this.ratingFilterHandle(this.state.filteredStalls)
    );
  }

  receiveFilteredResults(filteredStalls) {
    this.setState({
      filteredStalls: filteredStalls
    });
  }

  componentDidMount() {
    this.stallFetch();
  }

  // POST REVIEW should ==
  // {market_stall_id: 1,user_name: "Chris",rating: 5, review: "sublime"}

  render() {
    return (
      <div>
        <Stalls
          stalls={this.state.stalls}
          filteredStalls={this.state.filteredStalls}
        />
        <Filter
          filteredStalls={this.state.filteredStalls}
          stalls={this.state.stalls}
          filteredResultsReceiver={this.receiveFilteredResults}
          ratingFilter={this.receiveRatingFilter}
        />
      </div>
    );
  }
}

export default MarketApp;
