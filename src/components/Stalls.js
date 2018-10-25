import React from "react";
import Stall from "./Stall";

import Filter from "./Filter";

import "../styles/Stalls.scss";
import StoreDetails from "./StoreDetails";
import cx from "classnames";

class Stalls extends React.PureComponent {
  constructor() {
    super();
    this.clickStallMore = this.clickStallMore.bind(this);
    this.state = { switcher: false, stallid:0};
  }

  clickStallMore(id) {
    this.setState({ switcher: !this.state.switcher, stallid: id }, () =>
      console.log(this.state)
    );
  }

  render() {
    const keys = Object.values(this.props.stalls);
    const stallswitch = cx(
      { show_stalls: !this.state.switcher },
      { hide_stalls: this.state.switcher }
    );
      const switcher = cx({"hide_dishes": this.props.switcher}, {"show_dishes": !this.props.switcher})


    if (!this.state.switcher === false) {
      return (
        <StoreDetails
          stall={this.props.stalls[this.state.stallid]}
          stall_id={this.state.stallid}
          switcher={switcher} 
        />

      );
    } else {
      return (
        
        <ul className={stallswitch} id="stalls">
        <Filter
        filteredStalls={this.state.filteredStalls}
        stalls={this.state.stalls}
        filteredResultsReceiver={this.receiveFilteredResults}
      />
          {keys.map((stall, index) => {
              console.log(stall)
            return (
              <Stall
              
                key={index}
                stall={stall}
                switcher={switcher}
                clickStallMore={this.clickStallMore}

              />
            );
          })}
        </ul>
      );
    }

  }

}

export default Stalls;
