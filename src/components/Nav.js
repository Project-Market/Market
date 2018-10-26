import React from 'react'
import "../styles/Nav.scss";

class Nav extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
  
    render() {
      return (
        <div className="nav">
        Project Market
         <div className="nav__logos">
         <img src="/static/img/logos/burger.png"/>
         <img src="/static/img/logos/noodles.png"/>
         <img src="/static/img/logos/pizza.png"/>
         </div>
        </div>
      );
    }
  }
  
  export default Nav;
  