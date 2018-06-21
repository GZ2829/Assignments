import axios from 'axios'



export const getTruckData =() =>{
    return dispatch =>{
        axios.get('/trucks').then(response =>{
            dispatch({
                type: "GET_TRUCK_DATA",
                trucks: response.data
            })
        }).catch(err=>{
            console.log(err)
        })
    }
}
export const addTruck = addedTruck => {
    return dispatch => {
        axios.post("/trucks", addedTruck).then(() => {
            dispatch(getTruckData());
        }).catch(err => {
            console.log(err);
        })
    }
}

const truckReducer = (state = [], action) => {
    switch(action.type){
        case "GET_TRUCK_DATA":
            return action.trucks
        default:
            return state
    }
}

export default truckReducer


