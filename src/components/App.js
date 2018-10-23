import React from "react";
import Map from './Map';
import Reviews from './Reviews';

import "../styles/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

    render(){
      const stall_id=1;
    return (
      <div>
        <Map/>
        <Reviews stall_id={stall_id}/>
      </div>
    )
  }
  }

  export default App;
