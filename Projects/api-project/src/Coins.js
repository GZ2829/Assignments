import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getData } from './redux'

import './App.css'

class Coins extends Component {
    constructor(){
        super()

      this.state ={

      }  
    }

    addToPortfolio(){

    }

    componentDidMount(){
        this.props.getData()
    }
    render() {
        console.log(this.props.data)
        const mapped = this.props.data && this.props.data
        .sort((a, b) => {
            return a.rank - b.rank
        })
        .map(key=>{
            return(
                <div className='ticker' key={key.id}>
                    <h1>Name: {key.name}</h1>
                    <h2>Ticker: {key.symbol}</h2>
                    <h3>Rank: {key.rank}</h3>
                    <p>Total Supply: {key.total_supply}</p>
                    <p>Max Supply: {key.max_supply}</p>
                    <p>Price in USD: {key.quotes.USD.price}</p>
                    <p>24hr Volume: {key.quotes.USD.volume_24h}</p>
                    <p>Market Cap: {key.quotes.USD.market_cap}</p>
                    <p>1hr % change: {key.quotes.USD.percent_change_1h}</p>
                    <p>24hr % change: {key.quotes.USD.percent_change_24h}</p>
                    <p>7 day % change: {key.quotes.USD.percent_change_7d}</p>
                    <button onClick={addToPortfolio}>Add To Portfolio</button>
                </div>
            )
        })
      return (
        <div className="Coins">
         {mapped}
        </div>
      );
    }
  }


export default  connect(state => state, {getData})(Coins);