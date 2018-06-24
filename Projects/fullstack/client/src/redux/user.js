import axios from 'axios'


export const signup = newUser =>{
        return dispatch =>{
            axios.post('/user/signup', newUser).then(response=>{
                const {token, newUser} = response.data
                dispatch(newUser, token)
                localStorage.token = token
                localStorage.user = newUser
            })
            .catch(err =>{
                console.log(err)
            })
        }
}