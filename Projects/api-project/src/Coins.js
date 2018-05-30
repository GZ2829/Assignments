import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getData } from './redux'
import { addToPortfolio } from './redux'
import Navbar from './Navbar'

import './App.css'

class Coins extends Component {

    handleSubmit = coin =>{
        this.props.addToPortfolio(coin)
    }

    componentDidMount(){
        this.props.getData()
    }
    render() {

        const mapped = this.props.data && this.props.data
        .sort((a, b) => {
            return a.rank - b.rank
        })
        .map(key=>{
            return(
                <div className={key.quotes.USD.percent_change_7d > 0.00 ? 'ticker1': 'ticker2'} key={key.id} >
                    <h1 className='head'>{key.name}</h1>
                    <h2 className='tick'>Ticker: {key.symbol}</h2>
                    <h2 className='rank'>Rank: {key.rank}</h2>
                    <p className='total'>Total Supply: {key.total_supply}</p>
                    <p className='max'>Max Supply: {key.max_supply}</p>
                    <p className='price'>Price in USD: {key.quotes.USD.price}</p>
                    <p className='v24'>24hr Volume: {key.quotes.USD.volume_24h}</p>
                    <p className='market'>Market Cap: {key.quotes.USD.market_cap}</p>
                    <p className='hr1'>1hr % change: {key.quotes.USD.percent_change_1h}</p>
                    <p className='change24'>24hr % change: {key.quotes.USD.percent_change_24h}</p>
                    <p className='change7'>7 day % change: {key.quotes.USD.percent_change_7d}</p>
                    <button className='but' onClick={(e)=> this.handleSubmit(key)}>Add To Portfolio</button>
                </div>
            )
        })
      return (
          <div>
          <Navbar/>    
        <div className="coins">
         {mapped}
        </div>
        </div>
      );
    }
  }


export default  connect(state => state, {getData, addToPortfolio} )(Coins);