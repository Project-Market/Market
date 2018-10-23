import React from "react";

import StoreDetails from "./StoreDetails"
import { throws } from "assert";

class Stall extends React.PureComponent {
    constructor() {
        super();
        this.clickStallMore= this.clickStallMore.bind(this);
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
            stall={this.props.stall} review={this.props.reviewReceiver} stall_id={this.state.stall_id}/> 
            </li>
            
          )  
        }
  
  }
  
  export default Stall;