import axios from 'axios'


const initialState = {
    userInfo: {

    },
    accountType: '',
    loggedIn: false
}

    

export const signup = newUser =>{
        return dispatch =>{
            axios.post('/user/signup', newUser).then(response=>{
                localStorage.token = response.data
                initialState.user = JSON.stringify(newUser)
                initialState.accountType = JSON.stringify(newUser.accountType)
                dispatch({
                    
                })
            })
            .catch(err =>{
                console.error(err)
            })
        }
}

export function login(credentials) {  
    return () => {
        axios.post("/user/login", credentials)
            .then(response => {
                localStorage.token = response.data.token
                initialState.user = JSON.stringify(response.data.user);
            })
            .catch((err) => {
                console.error(err);
            });
    }
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default userReducer