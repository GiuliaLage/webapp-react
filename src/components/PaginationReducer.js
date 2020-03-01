const INITIAL_STATE = {usuarios : []} 

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'GET_USUARIOS':
            return {...state, usuarios : action.payload.data}
        case 'MAKE_PAGINATION' :
            return {...state, users : action.payload.data}
        default:
            return state    
    }
}