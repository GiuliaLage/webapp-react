import React from 'react'
import axios from 'axios'
import configs from '../db/configs.json'
import Modal from "react-bootstrap/Modal";

export default class Detalhes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_info: [],
            user_address: [],
            user_company: [],
            modalShow: false,
            modalHide: false
            
        }
    }

    hideModal = () => {
        this.setState({modalShow : false})
    }

    userId = id => {
        if(id){
            this.setState({modalShow : true})
            axios.get(configs.BASE_URL + `users/${id}`)
                .then(response => {
                    this.setState({ user_info: response.data, 
                                    user_address: response.data.address, 
                                    user_company : response.data.company
                                })
            })
        }
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={() => this.userId(this.props.id)}>Detalhes</button>
                    <Modal keyboard={false} backdrop="static" show={this.state.modalShow}>
                        <Modal.Header><strong>{this.state.user_info.name}</strong></Modal.Header>
                        <Modal.Body>
                             <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>Telefone:: </strong>  
                                        {this.state.user_info.phone} 
                                </li>
                                <li className="list-group-item">
                                    <strong>Website: </strong>  
                                        {this.state.user_info.website} 
                                </li>
                                <li className="list-group-item">
                                    <strong>Endereço: </strong>  
                                        {this.state.user_address.street} -
                                        {this.state.user_address.suite}  -
                                        {this.state.user_address.city}
                                </li>
                                <li className="list-group-item">
                                    <strong>Empresa: </strong>  
                                        {this.state.user_company.name} /
                                        {this.state.user_company.catchPhrase}
                                </li>
                             </ul>
                        </Modal.Body>
                        <Modal.Footer><button className="btn btn-primary" onClick={() => this.hideModal()}>Fechar</button></Modal.Footer>
                  </Modal>  
            </div>
        )
    }
}