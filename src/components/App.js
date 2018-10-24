import React from "react";
import Map from "./Map";
import Reviews from './Reviews';
import MarketApp from "./MarketApp";
import Nav from "./Nav";
import "../styles/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

    render(){
      const stall_id=1;
    return (
      <div>
        <Nav />
        <Map />
        <MarketApp />
      <Reviews stall_id={stall_id}/>
      </div>
    );
  }
}

export default App;
