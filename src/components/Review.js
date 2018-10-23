import React from 'react';


function Review(props){
  const {user_name, rating, review} = props;
  return(
    <div className="review__single">
      <p>{user_name} {rating}</p>
      <p>{review}</p>
    </div>
  )
}



export default Review;
