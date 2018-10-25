import React from "react";
import Map from "./Map";
import Landing from "./Landing";
import MarketApp from "./MarketApp";

import "../styles/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showMarketDetails:false
    };
    this.showMarketDetails  = this.showMarketDetails.bind(this);
  }

  showMarketDetails(){
    this.setState({
      showMarketDetails:!this.state.showMarketDetails
    })
  }


    render(){

    return (
    <div>
      {this.state.showMarketDetails? <MarketApp/>:
          <Landing showMarketDetails={this.showMarketDetails} />
        }
      </div>
    );
  }
}

export default App;
