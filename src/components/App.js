import React from "react";
import Map from "./Map";
import Landing from "./Landing";
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
          <Landing />

      </div>
    );
  }
}

export default App;
