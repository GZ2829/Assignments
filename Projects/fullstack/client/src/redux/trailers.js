import axios from 'axios'

export const getTrailerData = () =>{
    return dispatch=>{
        axios.get('/trailers').then(response =>{
            dispatch({
                type: "GET_TRAILER_DATA",
                trailers: response.data
            })
        })
    }
}
export const addTrailer = addedTrailer => {
    return dispatch => {
        axios.post("/trailers", addedTrailer).then(() => {
            dispatch(getTrailerData());
        }).catch(err => {
            console.log(err);
        })
    }
}

const trailerReducer = (state = [], action) => {
    switch(action.type){
        case "GET_TRAILER_DATA":
            return action.trailers
        default:
            return state
    }
}


export default trailerReducer