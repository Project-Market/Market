import React from "react";
import LandingMap from "./LandingMap";
import "../styles/Landing.scss";

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.showMarketDetails = this.showMarketDetails.bind(this);
  }

  showMarketDetails() {
    this.props.showMarketDetails();
  }

  render() {
    return (
      <div>
        <LandingMap showMarketDetails={this.props.showMarketDetails} />

        <div className="landing">
          <button
            className="leather-landing-button"
            onClick={this.showMarketDetails}
          >
            Leather Lane
          </button>

          <button className="exmouth-landing-button ">Exmouth Market</button>

          <button className="brick-landing-button ">Brick Lane</button>

          <button className="borough-landing-button ">Borough Market</button>
          <div className="left" />
          <div className="right" />
        </div>
      </div>
    );
  }
}

export default Landing;
