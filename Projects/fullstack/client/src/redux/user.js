import axios from 'axios'


export const signup = newUser =>{
        return () =>{
            axios.post('/user/signup', newUser).then(response=>{
                console.log(response.data)
                localStorage.token = response.data
                localStorage.user = JSON.stringify(newUser)
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
                console.log(response.data)
                localStorage.token = response.data.token
                localStorage.user = JSON.stringify(response.data.user);
            })
            .catch((err) => {
                console.error(err);
            });
    }
}