import React from "react";
import Select from "react-select";

const options = [
  { value: "American", label: "American" },
  { value: "Asian", label: "Asian" },
  { value: "Burger", label: "Burger" },
  { value: "Indian", label: "Indian" },
  { value: "Mexican", label: "Mexican" }
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
    this.ratingClick = this.ratingClick.bind(this);
  }

  cardClick() {
    this.setState(
      {
        cardFilter: !this.state.cardFilter
      },
      () => this.filterResultsCuisine()
    );
  }

  ratingClick() {
    this.props.desRatingFilter();
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
          onChange={this.cardClick}
        />

        <label for="card">Accepts Card</label>

        <input
          className="rating-checkbox"
          type="checkbox"
          name="rating"
          value="rating"
          onChange={this.ratingClick}
        />

        <label for="rating">Sort by rating</label>
      </div>
    );
  }
}
export default Filter;
