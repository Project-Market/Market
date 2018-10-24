import React from "react";

//filter stall results in filter, pass them back to MarketApp

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      cuisine: "",
      cardFilter: false,
      filteredStalls: [],
      stalls: this.props.stalls
    };
    this.cuisineSelectHandle = this.cuisineSelectHandle.bind(this);
    this.filterResultsCuisine = this.filterResultsCuisine.bind(this);
  }

  cuisineSelectHandle(event) {
    this.setState(
      {
        cuisine: event.target.value
      },
      filterResultsCuisine()
    );
  }

  filterResultsCuisine() {
    cuisine = this.state.cuisine;
    card = this.state.cardFilter;
    if (cuisine.length !== 0) {
      filteredByCuisine = this.state.stalls.filter(stall => {
        if (stall.category == cuisine) return stall;
      });
      return filteredByCuisine;
    }
    this.setState(
      {
        filteredStalls: filteredByCuisine
      },
      this.props.filteredresultsReceiver(this.state.filteredResults)
    );
  }

  render() {
    return (
      <div className="filter">
        <form className="filter-form">
          <select name="Cuisine" onChange={this.cuisineSelectHandle}>
            <option value="american" />
            <option value="burger" />
            <option value="asian" />
            <option value="mexican" />
          </select>

          <input
            className="card-checkbox"
            type="checkbox"
            name="card"
            value="card"
          >
            Accepts Card
          </input>
        </form>
      </div>
    );
  }
}
export default Filter;
