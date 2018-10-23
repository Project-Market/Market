import React from "react";
import { renderComponent } from "recompose";

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="filter">
        <form className="filter-form">
          <select name="Cuisine">
            <option value="American" />
            <option value="Burger" />
            <option value="Indian" />
            <option value="Mexican" />
          </select>

          <input type="checkbox" name="card" value="card">
            Accepts Card
          </input>
        </form>
      </div>
    );
  }
}
export default Filter;
