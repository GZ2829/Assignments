import React, {Component} from 'react'
import { connect } from 'react-redux'
import  { removeCoin }  from './redux'
import Navbar from './Navbar'
import { calcTotal } from './redux'


class MyPortfolio extends Component{
    constructor(){
        super()

      this.state ={
        num1: 0,
        num2: 0,
        num3: 0,  
        num4: 0,
        totalNum: 0
      }
      this.handleChange=this.handleChange.bind(this)
      this.handleSubmit=this.handleSubmit.bind(this)
      this.handleSubmit1=this.handleSubmit1.bind(this)  
    }

    handleChange(e){
         const { name, value } = e.target;
        this.setState(prevState =>{
            return{
                [name]: value
            }
            
        })
    }

    handleSubmit(coin){
           this.props.removeCoin(coin)
    }

    handleSubmit1(num1,num2,hold){
        return(
          this.props.calcTotal(num1, num2, hold)
        )
    }

    render(){
        const port = this.props.data && this.props.data.filter(coin=>{
                for(var i=0; i<this.props.savedCoins.length; i++){
                    if(coin.id === this.props.savedCoins[i].id){
                        return true
                    }
                }}).map(holder=>{
            return(
                <div className='ticker1' key={holder.id}>
                    <h1 className='head'>{holder.name}</h1>
                    <h2 className='tick'>Ticker: {holder.symbol}</h2>
                    <h2 className='rank'>Rank: {holder.rank}</h2>
                    <p className='total'>Total Supply: {holder.total_supply}</p>
                    <p className='max'>Max Supply: {holder.max_supply}</p>
                    <p className='price'>Price in USD: {holder.quotes.USD.price}</p>
                    <p className='v24'>24hr Volume: {holder.quotes.USD.volume_24h}</p>
                    <p className='market'>Market Cap: {holder.quotes.USD.market_cap}</p>
                    <p className='hr1' style={{color: holder.quotes.USD.percent_change_1h >= 0.00 ? 'rgb(60, 255, 76)' : 'rgb(255, 85, 85)' }}>1hr % change: {holder.quotes.USD.percent_change_1h}</p>
                    <p className='change24' style={{color: holder.quotes.USD.percent_change_24h >= 0.00 ? 'rgb(60, 255, 76)' : 'rgb(255, 85, 85)'}}>24hr % change: {holder.quotes.USD.percent_change_24h}</p>
                    <p className='change7' style={{color: holder.quotes.USD.percent_change_7d >= 0.00 ? 'rgb(60, 255, 76)' : 'rgb(255, 85, 85)'}}>7 day % change: {holder.quotes.USD.percent_change_7d}</p>
                    <div>
                    <form onClick={()=>this.handleSubmit1(this.state.num1, this.state.num2, holder)}>
                    <input type='number' name='num1' onChange={this.handleChange} placeholder="Amount Of Coins" value={this.state.num1}/>
                    <input type='number' name='num2' onChange={this.handleChange} placeholder='Price?' value={this.state.num2}/>
                    <button>Calculate</button>
                    <p value={this.props.totalNum > 0 ? `You have gained: ${this.props.savedCoins.totalNum}` : `You have lost: ${this.props.totalNum}`}>{Math.floor(this.props.totalNum)}</p>
                    </form>
                    </div>
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



export default connect(state=> state ,{removeCoin, calcTotal} )  (MyPortfolio);