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




const loadReducer = (state = [], action) => {
    switch(action.type){
        case "GET_LOAD_DATA":
            return action.loads
        default:
            return state
    }
}


export default loadReducer;