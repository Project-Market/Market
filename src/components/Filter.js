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
      cardFilter: false
    };
    this.cuisineSelectHandle = this.cuisineSelectHandle.bind(this);
    this.filterResultsCuisine = this.filterResultsCuisine.bind(this);
    this.cardClick = this.cardClick.bind(this);
    this.cardFilterHandle = this.cardFilterHandle.bind(this);
  }

  cardClick() {
    this.setState(
      {
        cardFilter: !this.state.cardFilter
      },
      () => this.filterResultsCuisine()
    );
  }

  cuisineSelectHandle(selectedCuisine) {
    this.setState(
      {
        cuisine: selectedCuisine.value
      },
      this.filterResultsCuisine
    );
  }

  filterResultsCuisine() {
    let cuisine = this.state.cuisine;
    if (cuisine == "") {
      let filteredByCard = this.props.stalls;
      if (this.state.cardFilter == true) {
        this.cardFilterHandle(filteredByCard);
      } else this.props.filteredResultsReceiver(filteredByCard);
    } else {
      let filteredByCuisineArray = this.props.stalls.filter(stall => {
        if (stall.category == cuisine) {
          return stall;
        }
      });
      console.log(filteredByCuisineArray);
      if (this.state.cardFilter == true) {
        this.cardFilterHandle(filteredByCuisineArray);
      } else {
        this.props.filteredResultsReceiver(filteredByCuisineArray);
      }
    }
  }

  cardFilterHandle(array) {
    if (this.state.cardFilter == true) {
      let newArray = array.filter(stall => {
        if (stall.takes_card == true) return stall;
      });
      this.props.filteredResultsReceiver(newArray);
    }
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
