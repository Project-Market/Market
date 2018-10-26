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
            className="leather-landing-button pure-button hvr-grow"
            onClick={this.showMarketDetails}
          >
            Leather Lane Street Market
          </button>

          <button className="exmouth-landing-button hvr-grow">
            Exmouth Market
          </button>

          <button className="brick-landing-button hvr-grow">Brick Lane</button>

          <button className="borough-landing-button hvr-grow">
            Borough Market
          </button>
        </div>
      </div>
    );
  }
}

export default Landing;
