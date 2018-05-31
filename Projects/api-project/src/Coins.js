import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getData } from './redux'
import { addToPortfolio } from './redux'
import Navbar from './Navbar'
import { getGlobalData } from './redux'

import './App.css'

class Coins extends Component {
    constructor(){
        super()
       
       this.state={
           input: ''
       }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(e){
        const val=e.target.value
        this.setState(prevState=>{
            return{
                input: val.toUpperCase()
            }
        })
    }

    handleSubmit = coin =>{
        this.props.addToPortfolio(coin)
    }

    componentDidMount(){
        this.props.getData()
        this.props.getGlobalData()
    }
    render() {
          const mapped = this.props.data && this.props.data
        .sort((a, b) => {
            return a.rank - b.rank
        }).filter(coins=>{
                const coi=coins.name.toUpperCase()
            if(coi.slice(0, this.state.input.length)===this.state.input){
                return coins
            }
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
          <div className='global'>
            <h1>Global Data</h1>
            <h2 className='coi'>Active Coins: {this.props.global.data.active_cryptocurrencies}</h2>
            <h2 className='mar'>Active Markets: {this.props.global.data.active_markets}</h2>
            <h3 className='bit'>Bitcoin % Of Market: {this.props.global.data.bitcoin_percentage_of_market_cap}</h3>
            <h3 className='cap'>Total Market Cap USD: {this.props.global.data.quotes.USD.total_market_cap}</h3>
            <h3 className='vol'>24hr Volume USD: {this.props.global.data.quotes.USD.total_volume_24h}</h3>
            <input className='tic' type='text' onChange={this.handleChange} placeholder="SEARCH BY NAME" name='input' value={this.state.input}/>
           </div>
        <div className="coins">
         {mapped}
        </div>
        </div>
      );
    }
  }



export default  connect(state => state, {getData, addToPortfolio, getGlobalData} )(Coins);