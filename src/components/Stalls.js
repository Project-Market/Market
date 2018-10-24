import React from "react";
import Stall from "./Stall";

class Stalls extends React.PureComponent {
  constructor() {
    
    super();

  }
  
    render() {
      console.log(this.props.stalls)
      const keys = Object.values(this.props.stalls)
        return (
           
            <ul className="stalls" id="stalls">{keys.map((stall, index) => {
            return <Stall 
            key={index} 
            stall={stall} 
            review={this.props.reviewReceiver}/>
            })}
            </ul>
        )
      }

}

export default Stalls;