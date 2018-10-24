import React from "react";
import Stall from "./Stall";

class Stalls extends React.PureComponent {
  constructor() {

    super();
  }


    render() {
      
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


  render() {
    const keys = this.props.filteredStalls;
    console.log(keys);
    return (
      <ul className="stalls" id="stalls">
        {keys.map((stall, index) => {
          return (
            <Stall
              key={index}
              stall={stall}
              review={this.props.reviewReceiver}
            />
          );
        })}
      </ul>
    );
  }
}

export default Stalls;
