import React from 'react';
import "../styles/Review.scss";
import ReactDOM from 'react-dom';

import StarRatings from 'react-star-ratings';


function Review(props){
  const {user_name, rating, review} = props;
  return(
    <div className="review__single">
      <div className="review__single__user">
      <p>{user_name}</p>
      <StarRatings
          rating={rating}
          starRatedColor="#0BBC62"
          starHoverColor="#D2FF2E"
          numberOfStars={5}
          className='star__rating'
          starDimension="20px"
          starSpacing="5px"
        />
        </div>
      <p>"{review}"</p>
    </div>
  )
}



export default Review;
