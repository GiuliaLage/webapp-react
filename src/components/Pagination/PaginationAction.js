
import axios from 'axios'
import configs from '../../db/configs.json'

export const GetPagination = (currentPage, Limite) =>{
    console.log(Limite, currentPage)
    if(Limite === false){
        console.log('entrei')
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
    console.log(ManyPages)
   

    console.log(currentPage,ManyPages, limite)
    
     if(currentPage < ManyPages && limite === true){
          console.log('INCREMENTA')
          currentPage = currentPage + 1
      }
      else{
          console.log('NAO FAZ NADA')
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

    console.log(currentPage)
    
     if(currentPage !== 1 ){
          console.log('DECREMENTA')
           currentPage = currentPage - 1

      }
      else{
          console.log('NAO FAZ NADA')
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

