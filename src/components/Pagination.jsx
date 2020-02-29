import React from 'react'
import axios from  'axios'
import configs from '../db/configs.json'


export default class Pagination extends React.Component{
    constructor(props){
      super(props)
      this.state ={
         Pagination_data = [],
         PaginaAtual = 1
      }  
    }
    
    /*getPaginationResult = (page,limit) =>{
        axios.get(configs.BASE_URL + `users?_page=${page}&_limite=${limit}`)
    }
    */
    
    getPaginationResult = () =>{
        let getPage = this.state.PaginaAtual + 1 
        this.setState({PaginaAtual : getPage})
        axios.get(configs.BASE_URL + `users?_page=${getPage}&_limite=5`)
        .then(response =>{
            console.log(response.data)
            this.setState({Pagination_data : response.data})
        })
    }

    componentDidMount(){

        this.getPaginationResult
    }

    render(){
        return(
            <div>
                    
            </div>
        )
    }
}