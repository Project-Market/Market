import React from "react";
import Map from './Map';

import "../styles/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

    render(){
    return (
      <div>
        <Map/>
      </div>
    )
  }
  }

  export default App;
