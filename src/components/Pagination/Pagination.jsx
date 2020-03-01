import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {GetPagination, NavPaginationInc, NavPaginationDec} from './PaginationAction'
import './Pagination.css'

class Pagination extends React.Component{
    render(){
        return(
            <div>

                <button className="btn btn-primary left-button">
                    {this.props.PaginaAtual}
                </button>
               <button onClick={() => this.props.GetPagination(this.props.PaginaAtual, this.props.Limite)} className="btn btn-primary">
                    Limitar Resultados
                </button>
                <button onClick={(e) => this.props.NavPaginationDec(this.props.PaginaAtual)} value="prev" type="button" className="btn btn-primary left-button">
                     <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </button>
                <button onClick={() => this.props.NavPaginationInc(this.props.PaginaAtual, this.props.Usuarios, this.props.Limite)} value="next" type="button" className="btn btn-primary">
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </button>        
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ 
    PaginaAtual : state.PaginaAtual.currentPage,
    Limite : state.Limit.limite,
    Usuarios: state.Usuarios_static.usuarios_static
})
const mapDispachToProps = dispatch => bindActionCreators({GetPagination, NavPaginationInc, NavPaginationDec}, dispatch)
export default connect(mapStateToProps, mapDispachToProps)(Pagination)