import React from "react";
import LandingMap from "./LandingMap";
import Nav from "./Nav";
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
        <Nav />
        <div className="landing-full-grid">
          <div className="landing-map">
            <LandingMap showMarketDetails={this.props.showMarketDetails} />
          </div>

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
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
