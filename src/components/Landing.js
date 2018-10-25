import React from 'react';
import LandingMap from './LandingMap';


class Landing extends React.Component {
    constructor() {
      super();
      this.state = {};
    }

    render() {
      return (
        <div className="landing">
         <LandingMap showMarketDetails={this.props.showMarketDetails} />
        </div>
      );
    }
  }

  export default Landing;
