import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';

class NewReview extends React.Component{

  constructor(){
    super();
    this.state ={
      name:"",
      rating:null,
      review:""
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeRating = this.handleChangeRating.bind(this);
    this.handleChangeReview = this.handleChangeReview.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleChangeName(event){
     this.setState({
      name: event.target.value
     })

  }

  handleChangeRating(event){
    this.setState({
      rating: event.target.value
    })
  }

  handleChangeReview(event){
    this.setState({
      review: event.target.value
    })
  }

  handleSubmit(){
    event.preventDefault();
    const newReview={
      name: this.state.name,
      rating: this.state.rating,
      review: this.state.review
    }

    fetch(`/api/market_stall_review/${this.props.stall_id}`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(newReview)
      })
        .then(response => response.json())
        .then(()=>{
          this.setState({
            name:"",
            rating:null,
            review:""
          })
        })
        .catch(error => {error: error.message})

  }

render(){

  return(
    <Modal open={this.props.displayNewReviewForm} onClose={this.handleSubmit} center>
    <div className="user">
      <p>Your name</p>
      <input type="text" onChange={this.handleChangeName} value={this.state.name} placeholder="Name"/>
      <p>Rating</p>
      <input type="number" onChange={this.handleChangeRating} value= {this.state.rating} placeholder="Rating"/>
      <p>Details of your experience</p>
      <input type="text" onChange={this.handleChangePhone} value= {this.state.review} placeholder="Your thoughts"/>
      <p type="button" className="button" onClick ={this.handleSubmit}>Post</p>
    </div>
    </Modal>
  )
}
}

export default NewReview;
