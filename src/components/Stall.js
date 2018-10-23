import React from "react";
import Stall from "./Stall";
import StoreDetails from "./StoreDetails"

class Store extends React.PureComponent {
    constructor() {
        this.clickStallMoreInfo = this.clickStallMoreInfo.bind(this);
        super();
  
    }

    clickStallMore(){
        //cx className here
    }
  
      render() {
          return (
            <li className="stall" >
            <div onClick={this.clickStallMore} id={this.props.id} className="stall__info">
                <h3>{this.props.stall.average_rating}</h3>
                <h3>{this.props.stall.takes_card}</h3>
                <h3>{this.props.stall.category}</h3>
            </div>
            <StoreDetails
            stall={this.props.stall} review={this.props.reviewReceiver}/>
            </li>
            
          )  
        }
  
  }
  
  export default Stall;