import React, { Component } from 'react';
import '../App.css';


class Trailers extends Component {
  render() {
    return (
    <div className='trailers'>
    <h1>Add A Trailer</h1>
    <form>
    <input type='text' placeholder='Type Of Trailer'/>
    <input type='text' placeholder='Trailer Model'/>
    <input type='number' placeholder='Trailer Year'/>
    <input type='number' placeholder='Carrying Capacity'/>
    <input type='number' placeholder='Pallet Capcity'/>
    <input type='number' placeholder="Amount of Trailers"/>
    <button>Submit</button>
    </form>

    </div>
    );
  }
}

export default Trailers;