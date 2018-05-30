import React, {Component} from 'react'
import { connect } from 'react-redux'
import  { removeCoin }  from './redux'
import Navbar from './Navbar'

class MyPortfolio extends Component{
    constructor(){
        super()

      this.state ={

      }  
    }

    handleSubmit(coin){
        this.props.removeCoin(coin)
    }

    render(){
        const port = this.props.savedCoins && this.props.savedCoins.map(holder=>{
            return(
                <div className={holder.quotes.USD.percent_change_24h > 0.00 ? 'ticker1': 'ticker2'} key={holder.id}>
                    <h1 className='head'>{holder.name}</h1>
                    <h2 className='tick'>Ticker: {holder.symbol}</h2>
                    <h3 className='rank'>Rank: {holder.rank}</h3>
                    <p className='total'>Total Supply: {holder.total_supply}</p>
                    <p className='max'>Max Supply: {holder.max_supply}</p>
                    <p className='price'>Price in USD: {holder.quotes.USD.price}</p>
                    <p className='v24'>24hr Volume: {holder.quotes.USD.volume_24h}</p>
                    <p className='market'>Market Cap: {holder.quotes.USD.market_cap}</p>
                    <p className='hr1'>1hr % change: {holder.quotes.USD.percent_change_1h}</p>
                    <p className='change24'>24hr % change: {holder.quotes.USD.percent_change_24h}</p>
                    <p className='change7'>7 day % change: {holder.quotes.USD.percent_change_7d}</p>
                    <button className='but' onClick={(e)=>this.handleSubmit(holder)}>Remove Coin</button>
                </div>
        )
        })
    return(
        <div>
        <Navbar/>
        <div className='port'>
            {port}
        </div>
        </div>
    )
}}


export default connect(state=> state ,{removeCoin} )  (MyPortfolio);