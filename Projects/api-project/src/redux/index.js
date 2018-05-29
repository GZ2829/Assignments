import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

function convertToArr(coinsObj){
    const newArr = []
    for(let key in coinsObj){
        newArr.push(coinsObj[key]);
    } 
    return newArr
}

export const getData = () => {
    return dispatch => {
        axios.get('https://api.coinmarketcap.com/v2/ticker/?limit=20').then(response => {
            const coins = response.data.data;
            
            dispatch({
                type: "GET_DATA",
                data: convertToArr(coins)
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export const getGlobalData = () => {
    return dispatch => {
        axios.get('https://api.coinmarketcap.com/v2/global/?convert=USD').then(response => {
            dispatch({
                type: "GET_GLOBAL_DATA",
                data: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

const intialstate = {}

const reducer = (state = intialstate, action) => {
    switch (action.type) {
        case "GET_DATA":
            return {
                data: action.data
            }
        case "GET_GLOBAL_DATA":
            return {
                data1: action.data
            }
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store