
import {createStore} from 'redux'

const initialState =[];

const reducer =(state=initialState, action) =>{
    switch(action.type){
        case "ADD_PIDGEON":
        return [...state, action.pidgeon]
        default:
        return state;
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
