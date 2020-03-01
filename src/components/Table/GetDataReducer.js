const INITIAL_STATE = {usuarios_static: [],  usuarios : [], currentPage : 1, limite: false } 



export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'GET_USUARIOS':
            return {...state, usuarios : action.payload.data, usuarios_static: action.payload.data}
        case 'DO_LIMITE':
             return {...state, usuarios : action.payload.data, currentPage : action.payload.Page, limite : action.payload.limit}  
         case 'NOT_PAGINATION':
             return {...state} 
         case 'NAV_PAGINATION':
         return {...state, usuarios : action.payload.data, currentPage : action.payload.Page}  
           
        default:
            return state    
    }
}

