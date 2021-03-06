import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


import './Table.css'
import Detalhes from '../Detalhes/Detalhes'
import {getUsuarios } from './GetDataAction'
import Pagination from '../Pagination/Pagination'

class Table extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            usuarios: [],
            orderState: false

        };
    }

   async componentDidMount() {
         
        await this.props.getUsuarios()
     
    }


    splitNames = (name, index) => {

        let splitName = name.split(' ')   

        if(splitName.includes('Mrs.') || splitName.includes('Miss.')){
            name = splitName[index + 1]
            return name
        }
        else if(index === 1){
         name = splitName[splitName.length - 1]
         return name
        }
        else{
            name = splitName[index]
            return name
        }
    }

   sortById = id =>{
        if(this.state.orderState === false){
           this.setState({ 
                usuarios : this.props.usuarios.sort( (a,b) =>{
                    return  b[id] - a[id]
                })
           }) 

            this.setState({orderState :true})
        }
        else{

            this.setState({ 
                usuarios : this.props.usuarios.sort( (a,b) =>{
                    return  a[id] - b[id]
                })
           }) 
            
            this.setState({orderState : false})

        }    
       
    }

    
    getKeySort = col =>{
       if(col === 'ID'){
           return <button className="btn btn-primary" onClick={() => this.sortById('id')}>
                    ID <i className={this.state.orderState ? 'fa fa-chevron-up' : "fa fa-chevron-down"} aria-hidden="true"></i>
                  </button>
       }
       else{
           return col
       }
   }

    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {this.props.columns.map((col, index) =>
                            <th key={index}>{this.getKeySort(col)}</th>
                            )}
                            <th>
                              <Pagination
                               
                              />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.usuarios && this.props.usuarios.map((usuario, index) =>
                            <tr key={index}>
                                <td>{usuario.id}</td>
                                <td>{this.splitNames(usuario.name, 0)}</td>
                                <td>{this.splitNames(usuario.name, 1)}</td>
                                <td>{usuario.email}</td>
                                <td><Detalhes id={usuario.id}></Detalhes></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    
    usuarios : state.ArrayUsers.usuarios,
    
})
            
const mapDispatchToProps = dispatch => bindActionCreators({getUsuarios} , dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Table)