import React from 'react';
import Review from './Review';

class Reviews extends React.Component{
  constructor(){
    super();
    this.state={
      reviews:[]
    }
    this.fetchStoreReviews = this.fetchStoreReviews.bind(this)

  }

  fetchStoreReviews(){
    fetch(`/api/market_stall_review/${this.props.stall_id}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        reviews: body
      })
    })
    .catch(error => {error: error.message})
  }

  render(){
    return(
      <div className="reviews">
      <div className="reviews__display">
        {this.state.reviews.map( review => <Review user_name={review.user_name}
        review={review.review} key={review.id} rating={review.rating}/>)
        }
      </div>

        <NewReview stall_id={this.props.stall_id}/>

      </div>
    )
  }
}

export default Reviews;
