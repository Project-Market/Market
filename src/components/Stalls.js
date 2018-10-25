import React from "react";
import Stall from "./Stall";

import "../styles/Stalls.scss";
import StoreDetails from "./StoreDetails";
import cx from "classnames";

class Stalls extends React.PureComponent {
  constructor() {
    super();
    this.clickStallMore = this.clickStallMore.bind(this);
    this.state = {
      switcher: false,
      stallid: 0
    };
  }

  clickStallMore(id) {
    this.setState({ switcher: !this.state.switcher, stallid: id });
    this.props.hideBackground();
  }

  render() {
    const keys = Object.values(this.props.filteredStalls);
    const stallswitch = cx(
      { show_stalls: !this.state.switcher },
      { hide_stalls: this.state.switcher }
    );
    // const switcher = cx(
    //   { hide_dishes: this.props.switcher },
    //   { show_dishes: !this.props.switcher }
    // );

    if (!this.state.switcher === false) {
      return (
        <StoreDetails
          stall={this.props.stalls[this.state.stallid]}
          stall_id={this.state.stallid}
          clickStallMore={this.clickStallMore}
        />
      );
    } else {
      return (
        <ul className={stallswitch} id="stalls">
          {keys.map((stall, index) => {
            return (
              <Stall
                key={index}
                stall={stall}
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
