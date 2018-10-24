import React from "react";
import ReactStars from "react-stars";
import { render } from "react-dom";
import StoreDetails from "./StoreDetails";
import "../styles/Stall.scss";

class Stall extends React.PureComponent {
    constructor() {
        super();
        this.state = {stallInfo:{}, stall_id:{}};
        this.clickStallMore = this.clickStallMore.bind(this);
    }

    clickStallMore(){
        this.setState({stallInfo: this.props.stall, stall_id: this.props.stall.id})
        console.log(this.state);

        //cx className here
    }
  
      render() {
        let cardlogo = this.props.stall.takes_card === true ? "/static/img/logos/visa.png":"/static/img/logos/cash.png";
          return (
            <li className="stall" >
            <div onClick={this.clickStallMore} id={this.props.stall_id} className="stall__info">
                <h3>{this.props.stall.title}</h3>
                <img className="stall__image" src={this.props.stall.image}/>
                <ReactStars
                    count={5}
                    value={this.props.stall.average_rating}
                    size={24}
                    edit={false}
                    color2={'#ffd700'} />
                <img src={cardlogo}/>
                <h3>{this.props.stall.category}</h3>
            </div> 
            <StoreDetails
            stall={this.state.stallInfo} 
            review={this.props.reviewReceiver} 
            stall_id={this.state.stall_id}/> 
            </li>
            
          )  
        }
  
  }
  
  export default Stall;

