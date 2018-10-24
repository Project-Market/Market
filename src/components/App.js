import React from "react";
import Map from "./Map";

import MarketApp from "./MarketApp";
import Nav from "./Nav";
import "../styles/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

    render(){
      
    return (
      <div>
        <Nav />
        <Map />
        <MarketApp />

      </div>
    );
  }
}

export default App;
