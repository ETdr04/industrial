import React, { Component } from 'react';
import { Container, Table } from './styles';
import Modal from 'react-responsive-modal';
import api from '../../services/api';

export default class Contato extends Component {
  state = {
    open: false,
    favorecido: [],
  };

  getFavorecidos = async () => {
    this.setState({ favorecido: [] });
    await api.get('contact/1/notVinculed')
    .then(response => {
      if (response.data) {
        this.setState({
          favorecido: response.data
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleFavorecido = async () => {
    await this.getFavorecidos();
    this.onOpenModal();
  }

  adicionarFavorecido = async (amigo) => {
    console.log(amigo);
    await api.post('contact/vinculation', {"amigo": amigo, "cliente": 1})
    .then(response => {
      this.getFavorecidos();
      alert('Amigo adicionado');
    });
  }

  render(){
    const { open } = this.state;
    return (
      <Container onClick={() => this.handleFavorecido()}>
        <label>Contatos</label>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Contatos</h2>
          <Table>
            <thead>
              <tr key={0}>
                <th>Favorecido</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.favorecido.map(item => (
                  <tr key={item.id}>
                    <td>{item.nome}</td>
                    <td>
                      <button onClick={() => this.adicionarFavorecido(item.id)}>Adicionar</button>
                    </td>
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
