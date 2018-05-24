
export function addContact(contact){
    return{
        type: 'ADD_CONTACT',
        contact
    }
}



function reducer(prevState = { list: [] }, action){
    switch(action.type){
        case 'ADD_CONTACT':
            return{
               list:[...prevState.list, action.contact] 
            }
    }
}




export default reducer;