import React from "react";
import Select from "react-select";
//filter stall results in filter, pass them back to MarketApp

const options = [
  { value: "american", label: "American" },
  { value: "asian", label: "Asian" },
  { value: "burger", label: "Burger" },
  { value: "indian", label: "Indian" },
  { value: "mexican", label: "Mexican" }
];

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisine: "",
      cardFilter: false,
      filteredStalls: [],
      stalls: props.stalls
    };
    this.cuisineSelectHandle = this.cuisineSelectHandle.bind(this);
    this.filterResultsCuisine = this.filterResultsCuisine.bind(this);
    this.cardClick = this.cardClick.bind(this);
  }

  cardClick() {
    this.setState({
      cardFilter: !this.state.cardFilter
    });
  }

  cuisineSelectHandle(selectedCuisine) {
    this.setState(
      {
        cuisine: selectedCuisine
      },
      this.filterResultsCuisine
    );
  }

  filterResultsCuisine() {
    let cuisine = this.state.cuisine;
    console.log(cuisine);
    let card = this.state.cardFilter;
    let filteredByCuisineArray = this.state.stalls.filter(stall => {
      console.log(stall.stallInfo.category);
      if (stall.stallInfo.category == cuisine.value) return stall;
    });
    this.setState(
      {
        filteredStalls: filteredByCuisineArray
      },
      () => this.props.filteredResultsReceiver(this.state.filteredStalls)
    );
  }

  render() {
    const { selectedCuisine } = this.state.cuisine;
    return (
      <div>
        <Select
          value={selectedCuisine}
          onChange={this.cuisineSelectHandle}
          options={options}
        />

        <input
          className="card-checkbox"
          type="checkbox"
          name="card"
          value="card"
          onClick={this.cardClick}
        />

        <label for="card">Accepts Card</label>
      </div>
    );
  }
}
export default Filter;
