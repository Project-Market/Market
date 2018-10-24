import React from "react";
import ReactStars from "react-stars";
import { render } from "react-dom";
import StoreDetails from "./StoreDetails";
import StarRatings from 'react-star-ratings';
import "../styles/Stall.scss";
import cx from "classnames";

class Stall extends React.PureComponent {
  constructor() {
    super();
    this.state = { stallInfo: {}, stall_id: {}, switcher: false };
    this.clickStallMore = this.clickStallMore.bind(this);
  }

  clickStallMore() {
    console.log("clicked!");
    this.setState({ switcher: !this.state.switcher }, () =>
      console.log(this.state.switcher)
    );
    //cx className here
  }

  render() {
    let cardlogo =
      this.props.stall.takes_card === true
        ? "/static/img/logos/visa.png"
        : "/static/img/logos/cash.png";
    let cartlogoalt =
      this.props.stall.takes_card === true
        ? "This stall accepts payment by credit card"
        : "This stall only accepts payments in cash";
    const switcher = cx(
      { hide_dishes: !this.state.switcher },
      { show_dishes: this.state.switcher }
    );

    return (
      <div className="stall__info">

        <h3>{this.props.stall.title}</h3>
        <img className="stall__image" src={this.props.stall.image} />


        <StarRatings
            rating={Number(this.props.stall.average_rating)}
            starRatedColor="#0BBC62"

            numberOfStars={5}
            className='star__rating'
            starDimension="20px"
            starSpacing="5px"
          />
            <img src={cardlogo} alt={cartlogoalt}/>
            <h3>{this.props.stall.category}</h3>

        <button onClick={this.clickStallMore}>more info</button>

        <StoreDetails
          stall={this.props.stall}
          stall_id={this.props.stall.id}
          switcher={switcher}
        />
      </div>
    );
  }

  
  export default Stall;



