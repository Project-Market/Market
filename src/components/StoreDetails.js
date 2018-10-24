import React from 'react'
import "../styles/StoreDetails.scss";
import cx from 'classnames';


class StoreDetails extends React.Component {
    constructor() {
      super();
      this.state = {
        dishes: [],
        show: false
      };
    }


      fetchDishes() {
      fetch(`/api/market_stall/${this.props.stall_id}`)
        .then(function(response) {
          return response.json();
        })
        .then(data => {
        
          this.setState({
            dishes: data
          });
        });
    }

    componentDidMount(){
      this.fetchDishes()
    }

    render() {

      return (
        <div className={this.props.switcher}>
           {this.state.dishes.map(dish => {

            return (
                <div  key={dish.id}>
                  <p>dish title:{dish.dish_title}</p>
                  <p>price:£{dish.price}</p>
                  <p>description:{dish.description}</p>
                  <hr></hr>
                </div>
            )
          })}
      </div>
      );
    }
  }

  export default StoreDetails;
