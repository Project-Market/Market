import React from 'react';

import ReactDOM from 'react-dom';

import StarRatings from 'react-star-ratings';


function Review(props){
  const {user_name, rating, review} = props;
  return(
    <div className="review__single">

      <p>{user_name} </p>
      <StarRatings
          rating={rating}
          starRatedColor="orange"
          starHoverColor="yellow"
          numberOfStars={5}
          className='star__rating'
          starDimension="20px"
          starSpacing="5px"
        />
      <p>{review}</p>
    </div>
  )
}



export default Review;
