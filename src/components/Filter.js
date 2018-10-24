import React from "react";

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      cuisine: "",
      cardFilter: false
    };
    this.cuisineSelectHandle = this.cuisineSelectHandle.bind(this);
    this.cardFilterHandle = this.cardFilterHandle.bind(this);
  }

  cuisineSelectHandle(event) {
    this.setState(
      {
        cuisine: event.target.value
      },
      this.props.cuisine(this.state.cuisine)
    );
  }

  cardFilterHandle() {
    this.props.cardFilter();
  }

  render() {
    return (
      <div className="filter">
        <form className="filter-form">
          <select name="Cuisine">
            <option onChange={this.cuisineSelectHandle} value="American" />
            <option onChange={this.cuisineSelectHandle} value="Burger" />
            <option onChange={this.cuisineSelectHandle} value="Indian" />
            <option onChange={this.cuisineSelectHandle} value="Mexican" />
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
