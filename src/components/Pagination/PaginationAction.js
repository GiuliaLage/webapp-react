
import axios from 'axios'
import configs from '../../db/configs.json'

export const GetPagination = (currentPage, Limite) =>{
    if(Limite === false){
        Limite = true
        return dispatch =>{
            axios.get(configs.BASE_URL + `users?_page=${currentPage}&_limit=5`)
            .then(resp => dispatch({ type: 'DO_LIMITE', 
             payload : {
                data: resp.data,
                Page: currentPage,
                limit: Limite  
            }}))
       }  
    }
    else{

        currentPage = 1
        Limite = false

        return dispatch =>{
            axios.get(configs.BASE_URL + 'users')
            .then(resp => dispatch({ type: 'DO_LIMITE', 
             payload : {
                data: resp.data,
                Page: currentPage,
                limit: Limite 
            }}))
       }
    }
}


export const NavPaginationInc =  (currentPage, usuarios, limite) =>{

    let ManyPages = usuarios.length / 5
    
     if(currentPage < ManyPages && limite === true){
        
          currentPage = currentPage + 1
      }
      else{
         
         return {
            type: 'NOT_PAGINATION'
         }
      }
            
      return async dispatch =>{
      await axios.get(configs.BASE_URL + `users?_page=${currentPage}&_limit=5`)
      .then(resp => dispatch({ type: 'NAV_PAGINATION', 
                  payload : {
        
                   data: resp.data,
                   Page: currentPage 
        
                }}))
            }   
}


export const NavPaginationDec =  (currentPage) =>{

     if(currentPage !== 1 ){
          
           currentPage = currentPage - 1

      }
      else{
         
         return {
            type: 'NOT_PAGINATION'
         }
      }
            
      return async dispatch =>{
      await axios.get(configs.BASE_URL + `users?_page=${currentPage}&_limit=5`)
      .then(resp => dispatch({ type: 'NAV_PAGINATION', 
                  payload : {
        
                   data: resp.data,
                   Page: currentPage 
        
                }}))
            }   
}

