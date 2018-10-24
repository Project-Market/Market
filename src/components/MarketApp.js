import React from "react";
import Filter from "./Filter";
// import Stores from "./Stores";
class MarketApp extends React.Component {
  constructor() {
    super();
    this.state = {
      stalls: [],
      cuisine: "",
      filterCard: false,
      filterTopRated: false
    };
    this.stallFetch = this.stallFetch.bind(this);
    this.submitReviewHandle = this.submitReviewHandle.bind(this);
    this.cuisineReciever = this.cuisineReciever.bind(this);
    this.cardFilterHandle = this.cardFilterHandle.bind(this);
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

  submitReviewHandle(review) {
    fetch("/api/reviews", {
      method: post,
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(data => {
      alert("your review has been posted");
    });
  }

  cuisineReciever(cuisine) {
    this.setState({
      cuisine: cuisine
    });
  }

  cardFilterHandle() {
    this.setState({
      filterCard: !this.state.filterCard
    });
  }

  // POST REVIEW should ==
  // {market_stall_id: 1,user_name: "Chris",rating: 5, review: "sublime"}

  render() {
    return (
      <div>
        <Stores
          stalls={this.state.stalls}
          reviewReciever={this.submitReviewHandle}
        />
        <Filter cuisine={this.cuisineFilter} cardFilter={this.cardFilter} />
      </div>
    );
  }
}

export default MarketApp;
