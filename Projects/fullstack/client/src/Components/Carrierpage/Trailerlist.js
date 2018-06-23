import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getTrailerData } from '../../redux/trailers'
import '../../App.css';
import { removeTrailer, editTrailer } from '../../redux/trailers'


class Trailerlist extends Component {
    constructor(){
        super()
        this.state ={
           inputs:{
            typeOfTrailer: '',
            model: '',
            year: 0, 
            carryingCapacityInLbs: 0,
            palletCapacity: 0,
            amountOfTrailers: 0
           }

        }
        this.handleInputChange=this.handleInputChange.bind(this)
        this.toggle = this.toggle.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.getTrailerData()
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState(prevState=>({
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }))
    }


    toggle(){
        this.setState(prevState => {
            return {
                isToggled: !prevState.isToggled
            }
        })
    }

    handleDelete(){
            this.props.removeTrailer(this.props.id)
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.editTrailer(this.props.id, this.state.inputs)
    }




  render() {
    let className;
    if(this.state.isToggled){
        className='trailer'
    } else{
        className='trailer1'
    }
    return (
      <div className={className}>
          <h3>Type Of Trailer: {this.props.typeOfTrailer}</h3>
          <h3>Year: {this.props.year}</h3>
          <h4>Carrying Capacity In Lbs: {this.props.carryingCapacityInLbs}</h4>
          <h4>Amount of Trailers: {this.props.amountOfTrailers}</h4>
          <button onClick={this.toggle}>edit</button>
          <button onClick={()=> this.handleDelete(this.props.id)}>Delete</button>
          {this.state.isToggled 
            ? <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"     
                    value={this.state.typeOfTrailer} 
                    name="typeOfTrailer" 
                    onChange={ this.handleInputChange }
                    placeholder="Type Of Trailer"/>
                <input 
                    type="text" 
                    value={this.state.model} 
                    name="model" 
                    onChange={ this.handleInputChange }
                    placeholder="model"/>
                <input type='number'
                       value={this.state.year}
                       name='year'
                       onChange={this.handleInputChange}/>
                <input type='number'  
                        name='carryingCapacityInLbs'
                        onChange={this.handleInputChange}
                        value={this.state.carryingCapacityInLbs}/>
                <input type='number' 
                        name='palletCapacity'
                        value={this.state.palletCapacity}
                        onChange={this.handleInputChange}/>
                <input  type='number'
                        name='amountOfTrailers'
                        value={this.state.amountOfTrailers}
                        onChange={this.handleInputChange}/>
                    <button>Submit</button>
                </form>
              : null
              }  
              </div>
                );
            }
}

export default connect(state=>({ trailers: state.trailers }), { editTrailer, removeTrailer, getTrailerData })(Trailerlist)