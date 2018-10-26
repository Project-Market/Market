import React from "react";
import "../styles/StoreDetails.scss";
import cx from "classnames";
import Reviews from "./Reviews";

class StoreDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      dishes: [],
      show: false
    };
    this.closeDetails = this.closeDetails.bind(this);
  }

  fetchDishes() {
    fetch(`/api/market_stall/${this.props.stall_id}`)
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.setState({
          dishes: data
        });
      });
  }

  closeDetails() {
    this.props.clickStallMore();
  }

  componentDidMount() {
    this.fetchDishes();
  }

  render() {
    return (
      <div className={this.props.switcher}>
      <div onClick={this.closeDetails}>X</div>
        {this.state.dishes.map(dish => {
          return (
            <div key={dish.id}>
              
              <p>
                
                {dish.dish_title}
              </p>
              <p>
                £
                {dish.price}
              </p>
              <p className='description'>
                {dish.description}
              </p>
              <hr />
            </div>
          );
        })}
        <Reviews
          stall_id={this.props.stall_id}
          average_rating={this.props.stall.average_rating}
        />
      </div>
    );
  }
}

export default StoreDetails;
