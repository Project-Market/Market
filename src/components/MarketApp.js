import React from "react";
import Stalls from "./Stalls";
import Map from "./Map";
import Nav from "./Nav";
import Filter from "./Filter";

class MarketApp extends React.Component {
  constructor() {
    super();
    this.state = {
      stalls: [],
      filteredStalls: [],
      desRatingFilter: false,
      hideEverythingElse: false
    };
    this.stallFetch = this.stallFetch.bind(this);
    this.receiveFilteredResults = this.receiveFilteredResults.bind(this);
    this.receiveDesRatingFilter = this.receiveDesRatingFilter.bind(this);
    this.desRatingFilterHandle = this.desRatingFilterHandle.bind(this);
    this.hideEverythingElse = this.hideEverythingElse.bind(this);
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

  desRatingFilterHandle(array) {
    let newArray = [...array];
    if (this.state.desRatingFilter == true) {
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

  receiveDesRatingFilter() {
    this.setState(
      {
        desRatingFilter: !this.state.desRatingFilter
      },
      () => this.desRatingFilterHandle(this.state.filteredStalls)
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

  hideEverythingElse(){
    this.setState({
      hideEverythingElse: !this.state.hideEverythingElse
    })
  }
  // POST REVIEW should ==
  // {market_stall_id: 1,user_name: "Chris",rating: 5, review: "sublime"}

  render() {
    return (
      <div>
      
        <div>
          <Nav />
          <Map hideEverythingElse={this.hideEverythingElse} single={false}/>

          { !this.state.hideEverythingElse && (
            <React.Fragment>  
              <Filter
                filteredStalls={this.state.filteredStalls}
                stalls={this.state.stalls}
                filteredResultsReceiver={this.receiveFilteredResults}
                desRatingFilter={this.receiveDesRatingFilter}
              />
              <Stalls
                stalls={this.state.stalls}
                filteredStalls={this.state.filteredStalls}
              />
            </React.Fragment>
          )}
        </div>
      
      </div>
    );
  }
}

export default MarketApp;
