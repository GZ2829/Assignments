import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import axios from 'axios'


export const getData = () =>{
    return dispatch => {
        axios.get('/issue').then(response => {
            dispatch({
                type: 'GET_DATA',
                issues: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

const reducer = (state = [], action) => {
    switch(action.type){
        case "GET_DATA":
            return action.issues
        default:
            return state
    }
}


export default createStore(reducer, applyMiddleware(thunk))
