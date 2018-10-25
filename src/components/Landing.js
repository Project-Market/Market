import React from "react";
import LandingMap from "./LandingMap";

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
      <div className="landing">
        <LandingMap showMarketDetails={this.props.showMarketDetails} />

        <button
          className="leather-landing-button"
          onClick={this.showMarketDetails}
        >
          Leather Lane Street Market
        </button>

        <button className="exmouth-landing-button">Exmouth Market</button>

        <button className="brick-landing-button">Brick Lane</button>

        <button className="borough-landing-button">Borough Market</button>
      </div>
    );
  }
}

export default Landing;
