
export function addContact(contact){
    return{
        type: 'ADD_CONTACT',
        contact
    }
}

export function removeContact(contact){
        type: 'REMOVE_CONTACT',
        contact
}



function reducer(prevState = { list: [] }, action){
    switch(action.type){
        case 'ADD_CONTACT':
            return{
               list:[...prevState.list, action.contact] 
            }
        case 'REMOVE_CONTACT':
            return prevState.filter((contact, i)=> i !==action.index)  
            default:
                return prevState
    }
}




export default reducer;