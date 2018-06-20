import React, { Component } from 'react';
import '../App.css';


class Trucks extends Component {
  render() {
    return (
    <div className='trucks'>
    <h1>Add A Truck</h1>
    <form>
       <input type='text' placeholder='Make'/>
       <input type='text' placeholder='Model'/>
       <input type='number' placeholder='Year'/>
       <input type='number' placeholder='Amount of Trucks'/>
       <select>
           <option>Class 1-3 (0-14,000lbs)</option>
           <option>Class 4-6 (14,000-26,000lbs)</option>
           <option>Class 7-8 (26,000-80,000lbs+)</option>
       </select>
       <button>Submit</button>
    </form>
    </div>
    );
  }
}

export default Trucks;