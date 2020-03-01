import axios from 'axios'
import configs from '../../db/configs.json'



export const getUsuarios = () =>{
    
    const request = axios.get(configs.BASE_URL + 'users')
    return{
        type: 'GET_USUARIOS',
         payload : request
    }
}



export const PaginationAction = () => {
    
    const request = axios.get(configs.BASE_URL + 'users')
           /* .then(response => {
                this.setState({ usuarios: response.data });
            })
        */
    return {
        type: 'MAKE_PAGINATION',
        payload : request
    }
    
}



