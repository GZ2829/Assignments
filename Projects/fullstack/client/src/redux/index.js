import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import axios from 'axios'


export const getLoadData = () =>{
    return dispatch => {
        axios.get('/loads').then(response => {
            dispatch({
                type: 'GET_LOAD_DATA',
                loads: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

const reducer = (state = [], action) => {
    switch(action.type){
        case "GET_LOAD_DATA":
            return action.loads
        default:
            return state
    }
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)