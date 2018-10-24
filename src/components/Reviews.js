import React from 'react';
import Review from './Review';
import NewReview from './NewReview';

class Reviews extends React.Component{
  constructor(){
    super();
    this.state={
      reviews:[],
      displayNewReviewForm:false
    }
    this.fetchStoreReviews = this.fetchStoreReviews.bind(this)
    this.handleNewReview = this.handleNewReview.bind(this)
    this.receiveClose = this.receiveClose.bind(this)


  }
  componentDidMount(){
    this.fetchStoreReviews()
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

  handleNewReview(){
    this.fetchStoreReviews();
    this.setState({
      displayNewReviewForm: !this.state.displayNewReviewForm
    })
  }

  receiveClose(){
    this.setState({
      displayNewReviewForm: !this.state.displayNewReviewForm
    })
  }


  render(){
    return(
      <div className="reviews">
      <p type="button" onClick={this.handleNewReview}>Your thoughts?</p>

      <div className="reviews__display">
        {this.state.reviews.map( review => {

          return <Review user_name={review.user_name}
        review={review.review} key={review.id} rating={review.rating}/>})
        }
      </div>
{this.state.displayNewReviewForm?
        <NewReview stall_id={this.props.stall_id}
           displayNewReviewForm={this.state.displayNewReviewForm}
           handleNewReview = {this.handleNewReview}
           receiveClose={this.receiveClose}
         />:null}

      </div>
    )
  }
}

export default Reviews;
