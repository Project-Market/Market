import React from 'react';
import Review from './Review';
import NewReview from './NewReview';
import '../styles/Reviews.scss';

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

    this.setState({
      displayNewReviewForm: !this.state.displayNewReviewForm
    }, () => this.fetchStoreReviews())
  }

  receiveClose(){
    this.setState({
      displayNewReviewForm: !this.state.displayNewReviewForm
    })
  }

  //need to pass down average rating from parent as a prop
  render(){
    return(
      <div className="reviews">
        <h3>Review Summary</h3>
        <h4>Average rating {this.props.average_rating}</h4>
        <h4>{this.state.reviews.length} reviews</h4>
      <p type="button" className="reviews__yourthoughts" onClick={this.handleNewReview}>Write your thoughts?</p>

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
