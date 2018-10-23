import React from "react";
import Filter from "./Filter";
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
    this.stallFetch = this.stallFetch.bind(this);
    this.submitReviewHandle = this.submitReviewHandle.bind(this);
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

  // DATA should == [
  // {
  //     id: 0,
  //     title: "KIN",
  //     average_rating: 7,
  //     image: "/img/1.jpg",
  //     category: "asian",
  //     stall_website: "www.kin.com",
  //     location: "leather_lane",
  //     takes_card: null,
  //     lat: null,
  //     lang: null
  //     },
  //     {
  //     id: 1,
  //     title: "Boom Burger",
  //     average_rating: 7,
  //     image: "/img/2.jpg",
  //     category: "burger",
  //     stall_website: "www.kin.com",
  //     location: "leather_lane",
  //     takes_card: null,
  //     lat: null,
  //     lang: null
  //     },
  //     {
  //     id: 2,
  //     title: "Jamal Shake Shack",
  //     average_rating: 7,
  //     image: "/img/3.jpg",
  //     category: "american",
  //     stall_website: "www.kin.com",
  //     location: "leather_lane",
  //     takes_card: null,
  //     lat: null,
  //     lang: null
  //     },
  //     {
  //     id: 3,
  //     title: "Luke Warm Curry",
  //     average_rating: 7,
  //     image: "/img/4.jpg",
  //     category: "indian",
  //     stall_website: "www.kin.com",
  //     location: "leather_lane",
  //     takes_card: null,
  //     lat: null,
  //     lang: null
  //     },
  //     {
  //     id: 4,
  //     title: "Katsu Kate",
  //     average_rating: 7,
  //     image: "/img/5.jpg",
  //     category: "asian",
  //     stall_website: "www.kin.com",
  //     location: "leather_lane",
  //     takes_card: null,
  //     lat: null,
  //     lang: null
  //     },
  //     {
  //     id: 5,
  //     title: "Tom Yum",
  //     average_rating: 7,
  //     image: "/img/6.jpg",
  //     category: "asian",
  //     stall_website: "www.kin.com",
  //     location: "leather_lane",
  //     takes_card: null,
  //     lat: null,
  //     lang: null
  //     },
  //     {
  //     id: 6,
  //     title: "Burrito Brothers",
  //     average_rating: 7,
  //     image: "/img/7.jpg",
  //     category: "mexican",
  //     stall_website: "www.kin.com",
  //     location: "leather_lane",
  //     takes_card: null,
  //     lat: null,
  //     lang: null
  //     }
  //     ]

  // POST REVIEW should ==
  // {market_stall_id: 1,user_name: "Chris",rating: 5, review: "sublime"}

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

  filterReciever(filter) {}

  render() {
    return;
    <Stores
      stalls={this.state.stalls}
      reviewReciever={this.submitReviewHandle}
    />;
  }
}

export default MarketApp;
