import React from "react";
import Map from "./Map";
import MarketApp from "./MarketApp";
import "../styles/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Map />
        <MarketApp />
      </div>
    );
  }
}

export default App;
