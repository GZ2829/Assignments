
import {createStore} from 'redux'

const initialState =[];

const reducer =(state=initialState, action) =>{
    switch(action.type){
        case "ADD_PIDGEON":
        return [...state, action.pidgeon];
        case "REMOVE_PIDGEON":
        return state.filter((pidgeon,i)=>i !== action.index)
        default:
        return state;
    }    
}

export const removePidgeon = index =>{
    return{
        type: "REMOVE_PIDGEON",
        index
    }
}



export const addPidgeon = pidgeon => {
    return{
        type: "ADD_PIDGEON",
        pidgeon

    }
}



const store = createStore(reducer);
store.subscribe(() => {
    console.log(store.getState());
})

export default store;
