import React, { Component } from 'react';
import { Container, Form } from './styles';
import Modal from 'react-responsive-modal';
import api from '../../services/api';

export default class Transferencia extends Component {
  state = {
    open: false,
    favorecidos: [],
    valor: '',
    idRecebedor: '',
    idEnviador: '1',
    tipo: 'debito',
    precisaSenha: false,
    senha: '',
    saldo: '',
  };

  getFavorecidos = async () => {
    await api.get('contact/1')
    .then(response => {
      this.setState({ favorecidos: response.data });
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

  handleUser = async () => {
    await api.get('account/1')
    .then(response => {
      this.setState({ saldo: response.data[0].saldo });
    })
    .catch(error => {
      console.log(error);
    });
  }

  handleTransferencia = () => {
    this.handleUser();
    this.getFavorecidos();
    this.onOpenModal();
  }

  handleInputChangeSenha = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleInputChange = (e) => {
    if (e.target.value > 800) {
      this.setState({ precisaSenha: true });
    } else {
      this.setState({ precisaSenha: false });
    }

    this.setState({
        [e.target.name]: e.target.value
    });
  }

  handleSelectChange = (e) => {
    this.setState({idRecebedor: e.target.value});
  }

  enviarTransferencia = async () => {
    if (Number(this.state.saldo) < Number(this.state.valor)) {
      alert('Atenção, você não possui saldo para realizar a transação, utilize o cartão de crédito, caso não possua, você poderá criar um novo na seção Cartão de Crédito');
      return;
    }
    await api.post('account/transfer', this.state)
    .then(response => {
      this.limparDados();
      window.location.reload();
    })
    .catch(error => {
      console.log(error);
    });
  }

  limparDados = () => {
    this.setState({idRecebedor: '', valor: '', senha: ''});
  }

  render(){
    const { open } = this.state;
    return (
      <Container onClick={() => this.handleTransferencia()}>
        <label>Transferência</label>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Transferência</h2>
          <Form>
            <label>Valor da transferência:</label>
            <input type="number" name="valor" value={this.state.valor} onChange={this.handleInputChange} />
            <label>Selecione o favorecido:</label>
            <select onChange={this.handleSelectChange}>
              { this.state.favorecidos.map(item => (
                <option name="idRecebedor" value={item.id} key={item.id}>{item.nome}</option>
              ))
              }
            </select>
            {  this.state.precisaSenha
            ? <div>
                <label>Senha:</label>
                <input type="password" name="senha" value={this.state.senha} onChange={this.handleInputChangeSenha} />
              </div>
            : <div />
            }
            <button onClick={() => this.enviarTransferencia()}>Transferir</button>
          </Form>
          <label>*Pressione ESC para sair</label>
        </Modal>
      </Container>
    );
  }
};
