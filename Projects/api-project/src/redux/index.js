import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import storageSession from 'redux-persist/lib/storage/session'


function convertToArr(coinsObj){
    const newArr = []
    for(let key in coinsObj){
        newArr.push(coinsObj[key]);
    } 
    return newArr
}

export const getData = () => {
    return dispatch => {
        axios.get('https://api.coinmarketcap.com/v2/ticker/?limit=100').then(response => {
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

export const addToPortfolio = coin => {
    return{
        type: "ADD_TO_PORTFOLIO",
        coin
    }

}

export const removeCoin = coin =>{
    return{
        type: "REMOVE_COIN",
        coin
    }
}

export const calcTotal = (num1, num2, holder) =>{
    return{
        type: "CALC_TOTAL",
        num1,
        num2,
        holder
    }
}

const intialstate = {
    data: [],
    global: {
        data: {
            quotes: {
                USD: {}
            }
        } 
    },
    savedCoins: [{totalNum: 0}],
        num1: 0,
        num2: 0,
        num3: 0,  
        num4: 0,
        //totalNum: 0
}
            const tot = (n1,n2,hold) =>{
            hold=hold.quotes.USD.price
            intialstate.num3 = n1 * n2
            intialstate.num4 = n1 * hold
            intialstate.totalNum = intialstate.num4 - intialstate.num3
            return(intialstate.totalNum)
            }

const reducer = (state = intialstate, action) => {
    switch (action.type) {
        case "GET_DATA":
            return {
                ...state,
                data: action.data
            }
        case "GET_GLOBAL_DATA":
            return {
                ...state,
                global: action.data
            }
        case "ADD_TO_PORTFOLIO":
            let arr = []
            if(state.savedCoins.findIndex(item => item.id === action.coin.id) === -1){
                arr = [...state.savedCoins, action.coin]
            } else{
                arr = [...state.savedCoins]
            }
            return{
                ...state,
                savedCoins: arr
            }

        case "REMOVE_COIN":
            return{
                ...state,
                 savedCoins: state.savedCoins.filter((coin,id)=>coin.id !== action.coin.id)
            }
        case "CALC_TOTAL":
            console.log(action.num1)
            return{
                ...state, 
                  totalNum: tot(action.num1,action.num2, action.holder)
            }         
        default:
            return state
    }
}

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};


//export const store = createStore(reducer, applyMiddleware(thunk))

export default () =>{
    const store = createStore(persistReducer(persistConfig, reducer), applyMiddleware(thunk));
    const persistor = persistStore(store, [intialstate])
    return { store, persistor}

}
//  const store = createStore(persistReducer(persistConfig, reducer));
// const persistor = persistStore(store [{}, applyMiddleware(thunk)])

// export default persistor;

