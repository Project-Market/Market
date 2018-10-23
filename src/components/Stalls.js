import React from "react";
import Stalls from "./Stalls";

class Stalls extends React.PureComponent {
  constructor() {
    
    super();

  }

    render() {
        return (
           
            <ul className="stalls" id="stalls">{this.props.stalls.map((stall, index) => {
            return <Stall key={index} stall={stall} review={this.props.reviewReceiver}/>;
            })}
            </ul>
        );
      }

}

export default Stalls;