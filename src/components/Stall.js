import React from "react";
import { render } from "react-dom";
// import StoreDetails from "./StoreDetails";
import StarRatings from "react-star-ratings";
import "../styles/Stall.scss";
// import cx from "classnames";
class Stall extends React.Component {

    constructor() {
        super();
        // this.state = {stallInfo:{}, stall_id:{}};
        // this.clickStallMore = this.clickStallMore.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

//     clickStallMore(){
// console.log("clicked!") 
// this.setState({switcher: !this.state.switcher}, ()=>console.log(this.state.switcher)
// )
    // }
  
    submitHandler(event) {
        event.preventDefault();
        console.log("I'm working!");
        this.props.clickStallMore(this.props.stall.id)
    }

      render() {
        let cardlogo = this.props.stall.takes_card === true ? "/static/img/logos/visa.png":"/static/img/logos/cash.png";
        let cartlogoalt = this.props.stall.takes_card === true ? "This stall accepts payment by credit card":"This stall only accepts payments in cash";
        // const switcher = cx({"hide_dishes": !this.props.switcher}, {"show_dishes": this.props.switcher})

          return (
        
        <div  className="stall__info">
        
        <h3>{this.props.stall.title}</h3>
        <img className="stall__image" src={this.props.stall.image}/>

        <StarRatings
          rating={Number(this.props.stall.average_rating)}
          starRatedColor="#0BBC62"
          numberOfStars={5}
          className="star__rating"
          starDimension="20px"
          starSpacing="5px"
        />
            <img src={cardlogo} alt={cartlogoalt}/>
            <h3>{this.props.stall.category}</h3>
        <button onClick={this.submitHandler}>more info</button>

        {/* {this.props.switcher && ( */}
            {/* <StoreDetails 
            
                stall={this.props.stall} 
                stall_id={this.props.stall.id}
                switcher={this.props.switcher}
            /> */}
        {/* )} */}
            </div>   
          )
        }  
  
}

export default Stall;