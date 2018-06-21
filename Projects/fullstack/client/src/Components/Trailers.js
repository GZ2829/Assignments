import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getTrailerData, addTrailer } from '../redux/trailers'
import '../App.css';

class Trailer extends Component {
  constructor(){
       super()

    this.state = {
        typeOfTrailer: '',
        model: '',
        year: 0, 
        carryingCapacityInLbs: 0,
        palletCapacity: 0,
        amountOfTrailers: 0

    }
    this.handleInputChange= this.handleInputChange.bind(this)
    this.trailerPost = this.trailerPost.bind(this)
  }

  componentDidMount(){
    this.props.getTrailerData()
  }

  trailerPost(e){
        e.preventDefault()
    this.props.addTrailer({
        typeOfTrailer: this.state.typeOfTrailer,
        model: this.state.model,
        year: this.state.year,
        carryingCapacityInLbs: this.state.carryingCapacityInLbs,
        palletCapacity: this.state.palletCapacity,
        amountOfTrailers: this.state.amountOfTrailers
    })
  }
  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    })
}


  render() {
    console.log(this.props)
    const trailers=this.props.trailers.map(trailer=>{
      return(
        <div className='loads'>
          <h3>Type Of Trailer: {trailer.typeOfTrailer}</h3>
          <h3>Year: {trailer.year}</h3>
          <h4>Carrying Capacity In Lbs: {trailer.carryingCapacityInLbs}</h4>
        </div>
    )
    })
    return (
        <div className='trailers'>
        <h1>Add A Trailer</h1>
        <form onSubmit={this.trailerPost}>
        <input type='text'   onChange={this.handleInputChange} placeholder='Type Of Trailer' name='typeOfTrailer' value ={this.state.typeOfTrailer}/>
        <input type='text'   onChange={this.handleInputChange} placeholder='Trailer Model' name='model' value={this.state.model}/>
        <input type='number' onChange={this.handleInputChange} placeholder='Trailer Year' name='year' value={this.state.year}/>
        <input type='number' onChange={this.handleInputChange} placeholder='Carrying Capacity' name='carryingCapacityInLbs' value={this.state.carryingCapacityInLbs}/>
        <input type='number' onChange={this.handleInputChange} placeholder='Pallet Capcity' name='palletCapacity' value={this.state.palletCapacity}/>
        <input type='number' onChange={this.handleInputChange} placeholder="Amount of Trailers" name='amountOfTrailers' value={this.state.amountOfTrailers}/>
        <button>Submit</button>
        </form>
        <br/>
        <h1>View Your Trailers</h1>
        <div className='trailertest'>
        {trailers}
        </div>
        </div>
    );
  }
}

export default connect(state=>({ trailers: state.trailers }), { getTrailerData, addTrailer })(Trailer)