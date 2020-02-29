import React from 'react'
import axios from 'axios'
import configs from '../db/configs'
import './Table.css'
import Detalhes from './Detalhes'

export default class Table extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            usuarios: [],
        };
    }

    componentDidMount() {

        axios.get(configs.BASE_URL + 'users')
            .then(response => {
                this.setState({ usuarios: response.data });
            })
    }

    splitNames = (name, index) => {

        let splitName = name.split(' ')
        name = splitName[index]
        return name
    }

    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {this.props.columns.map((col, index) =>
                                <th key={index}>{col}</th>
                            )}
                            <th>
                                <button type="button" className="btn btn-primary left-button">
                                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                                </button>
                               
                                <button type="button" className="btn btn-primary">
                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.usuarios.map((usuario, index) =>
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