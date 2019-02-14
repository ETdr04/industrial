import React, { Component } from 'react';
import { Container, Table } from './styles';
import Modal from 'react-responsive-modal';
import api from '../../services/api';

export default class Historico extends Component {
  state = {
    open: false,
    historico: []
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  getHistorico = async () => {
    await api.get('account/1/history')
    .then(response => {
      this.setState({historico: response.data});
    })
    .catch(error => {
      console.log(error);
    });
  }

  handleHistorico = async () => {
    await this.getHistorico();
    this.onOpenModal();
  }

  render(){
    const { open } = this.state;
    return (
      <Container onClick={() => this.handleHistorico()}>
      <label>Histórico</label>
      <Modal open={open} onClose={this.onCloseModal} center>
        <h2>Histórico</h2>
        <Table>
          <thead>
            <tr key={0}>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.historico.map(item => (
                <tr key={item.id}>
                  <td>{item.tipo}</td>
                  <td>R${item.valor}</td>
                  <td>{item.data}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        <label>*Pressione ESC para sair</label>
      </Modal>
      </Container>
    );
  }
};
